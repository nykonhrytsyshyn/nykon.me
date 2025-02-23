import { GalleryCardProps } from "@type/gallery";
import { Card } from "@heroui/card";
import React, { ReactElement, useEffect, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import galleryStyles from "@styles/module/gallery.module.css";
import gsap from "gsap";

/**
 * Gallery card component.
 *
 * @param properties The properties to render the gallery card.
 * @constructor
 */
export function GalleryCard({
  properties,
}: {
  properties: GalleryCardProps;
}): ReactElement | null {
  if (properties.hidden) {
    return null;
  }

  return (
    <Card
      className={clsx([
        "w-64 h-full shrink-0",
        "flex flex-col justify-center items-center",
        "rounded-[2.5rem]",
        "hover-target !transition-none",
      ])}
    >
      <Image
        alt={properties.image.alt as string}
        className="z-0 w-full h-full object-cover"
        fill={true}
        loading="lazy"
        src={properties.image.src as string}
      />
    </Card>
  );
}

/**
 * Gallery row component.
 *
 * @param images  The images to render the gallery row.
 * @param reverse The reverse flag to reverse the row.
 * @constructor
 */
function GalleryRow({
  properties,
  height,
  reverse,
}: {
  properties: GalleryCardProps[];
  height: number;
  reverse?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rowRef.current) {
      return;
    }

    const loop = horizontalLoop(gsap.utils.toArray(rowRef.current.children), {
      speed: 0.5,
      paddingRight: 20,
      reversed: reverse,
    });

    return () => gsap.killTweensOf(loop);
  }, [reverse]);

  return (
    <div
      ref={rowRef}
      className={clsx(galleryStyles.galleryRow)}
      style={{ height: `${height}vh` }}
    >
      {[...properties, ...properties].map((cardProps, index) => (
        <GalleryCard key={index} properties={cardProps} />
      ))}
    </div>
  );
}

/**
 * Gallery component.
 *
 * @param cardProps The card properties to render the gallery.
 * @constructor
 */
export function Gallery({
  properties,
}: {
  properties: GalleryCardProps[][];
}): ReactElement {
  return (
    <div className={galleryStyles.gallery} style={{ overflow: "hidden" }}>
      {properties.map((propsPerRow, index) => (
        <GalleryRow
          key={index}
          height={100 / properties.length}
          properties={propsPerRow}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

/**
 * Horizontal loop animation.
 *
 * @param items
 * @param config
 */
function horizontalLoop(
  items: HTMLDivElement[],
  config: {
    reversed?: boolean;
    speed?: number;
    paddingRight?: number;
  },
): gsap.core.Timeline {
  const timeline: gsap.core.Timeline = gsap.timeline({
    repeat: -1,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      timeline.totalTime(timeline.rawTime() + timeline.duration() * 100);
    },
  });
  const pixelsPerSecond: number = (config.speed || 1) * 100;
  const length: number = items.length;
  const startX: number = items[0].offsetLeft;
  const prevItem: HTMLDivElement = items[length - 1];
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];

  // Set initial xPercent and x values
  gsap.set(items, {
    xPercent: (i: number, target: any) => {
      const width: number = (widths[i] = parseFloat(
        gsap.getProperty(target, "width", "px") as string,
      ));

      xPercents[i] =
        ((parseFloat(gsap.getProperty(target, "x", "px") as string) /
          width) as number) *
          100 +
        (gsap.getProperty(target, "xPercent") as number);

      return xPercents[i];
    },
  });
  gsap.set(items, { x: 0 });

  const totalWidth =
    prevItem.offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    prevItem.offsetWidth * (gsap.getProperty(prevItem, "scaleX") as number) +
    (config.paddingRight || 0);

  // IntersectionObserver with opacity animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) =>
        gsap.to(entry.target, { opacity: entry.isIntersecting ? 1 : 0 }),
      );
    },
    { threshold: 0.1 },
  );

  // Observe each item
  items.forEach((item) => {
    observer.observe(item);
  });

  // Loop through the items and create the animation timeline
  for (let i = 0; i < length; ++i) {
    const item: HTMLDivElement = items[i];
    const curX: number = (xPercents[i] / 100) * widths[i];
    const distanceToStart: number = item.offsetLeft + curX - startX;
    const distanceToLoop: number =
      distanceToStart +
      widths[i] * (gsap.getProperty(item, "scaleX") as number);

    times[i] = distanceToStart / pixelsPerSecond;
    timeline
      .to(
        item,
        {
          xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
      .fromTo(
        item,
        {
          xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond,
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
  }

  let curIndex: number;

  function toIndex(index: number, vars: any) {
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);

    const newIndex: number = gsap.utils.wrap(0, length, index);
    let time: number = times[newIndex];

    if (time > timeline.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, timeline.duration()) };
      time += timeline.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;

    return timeline.tweenTo(time, vars);
  }

  timeline.next = (vars: any) => toIndex(curIndex + 1, vars);
  timeline.previous = (vars: any) => toIndex(curIndex - 1, vars);
  timeline.current = () => curIndex;
  timeline.toIndex = (index: number, vars: any) => toIndex(index, vars);
  timeline.times = times;

  timeline.progress(1, true).progress(0, true);

  if (config.reversed) {
    if (timeline.vars.onReverseComplete) {
      timeline.vars.onReverseComplete();
    }

    timeline.reverse();
  }

  return timeline;
}
