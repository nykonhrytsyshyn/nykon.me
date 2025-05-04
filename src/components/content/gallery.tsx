import { GalleryCardProps } from "@type/gallery";
import { Card } from "@heroui/card";
import React, { ReactElement, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";
import galleryStyles from "@styles/module/gallery.module.css";
import { useHorizontalLoop } from "@hooks/use-horizontal-loop";

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
        "hover-target transition-none!",
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

  useHorizontalLoop(rowRef, {
    speed: Math.random() * (0.7 - 0.3) + 0.3,
    reversed: reverse,
    paddingRight: 20,
  });

  const cleanedProperties = deduplicateAdjacent(properties);
  const doubled = [...cleanedProperties, ...cleanedProperties];

  return (
    <div
      ref={rowRef}
      className={galleryStyles.galleryRow}
      style={{ height: `${height}vh` }}
    >
      {doubled.map((cardProps, index) => (
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
 * Deduplicate adjacent elements in an array based on image.src.
 *
 * @param arr The array to deduplicate.
 * @returns The deduplicated array.
 */
function deduplicateAdjacent<T extends GalleryCardProps>(arr: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = result[result.length - 1];

    if (!prev || prev.image.src !== arr[i].image.src) {
      result.push(arr[i]);
    }
  }

  return result;
}
