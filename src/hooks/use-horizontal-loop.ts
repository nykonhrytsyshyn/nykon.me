import React, { useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * Configuration options for the horizontal loop animation.
 *
 * @property speed        The speed of the animation in pixels per second.
 * @property reversed     Whether to reverse the animation.
 * @property paddingRight The right padding to add to the last item.
 */
interface HorizontalLoopConfig {
  speed?: number;
  reversed?: boolean;
  paddingRight?: number;
}

/**
 * Custom hook to create a horizontal loop animation for a container.
 *
 * @param containerRef A reference to the container element.
 * @param config       Configuration options for the animation.
 */
export function useHorizontalLoop(
  containerRef: React.RefObject<HTMLDivElement | null>,
  config: HorizontalLoopConfig = {},
) {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const items = Array.from(container.children) as HTMLDivElement[];

    if (items.length === 0) {
      return;
    }

    const timeline = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    const pixelsPerSecond = (config.speed || 1) * 100;
    const widths: number[] = [];
    const xPercents: number[] = [];

    gsap.set(items, {
      xPercent: (i, el) => {
        const width = (widths[i] =
          parseFloat(gsap.getProperty(el, "width", "px") as string) ||
          el.clientWidth);
        const x = parseFloat(gsap.getProperty(el, "x", "px") as string) || 0;

        xPercents[i] =
          (x / width) * 100 + (gsap.getProperty(el, "xPercent") as number);

        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });

    const startX = items[0].offsetLeft;
    const last = items[items.length - 1];
    const totalWidth =
      last.offsetLeft +
      (xPercents[items.length - 1] / 100) * widths[items.length - 1] -
      startX +
      last.offsetWidth * (gsap.getProperty(last, "scaleX") as number) +
      (config.paddingRight || 0);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const curX = (xPercents[i] / 100) * widths[i];
      const distanceToStart = item.offsetLeft + curX - startX;
      const distanceToLoop =
        distanceToStart +
        widths[i] * (gsap.getProperty(item, "scaleX") as number);

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
        );
    }

    timeline.progress(1, true).progress(0, true);

    if (config.reversed) {
      timeline.reverse(0);
    }

    return () => {
      timeline.kill();
    };
  }, [containerRef, config.reversed, config.speed, config.paddingRight]);
}
