import DefaultLayout from "@layouts/default";
import React, { ReactElement, useEffect, useState } from "react";
import galleryCards, {
  cardWidth,
  maxCardHeight,
} from "@configs/content/gallery-cards";
import "@styles/module/gallery.module.css";
import { Gallery } from "@components/content/gallery";
import useScrollAnimation from "@hooks/use-scroll-animation";
import { GalleryCardProps } from "@type/gallery";

export default function GalleryPage(): ReactElement {
  useScrollAnimation();

  const [layout, setLayout] = useState<GalleryCardProps[][]>([]);

  useEffect(() => {
    setLayout(generateInitialLayout(window.innerWidth, window.innerHeight));
  }, []);

  return (
    <DefaultLayout>
      <section className="relative h-dvh flex flex-col">
        {layout.length > 0 && <Gallery properties={layout} />}
      </section>
    </DefaultLayout>
  );
}

/**
 * Generate the initial layout for the gallery.
 *
 * @param width  The width of the gallery.
 * @param height The height of the gallery.
 * @returns The initial layout for the gallery.
 */
function generateInitialLayout(
  width: number,
  height: number,
): GalleryCardProps[][] {
  const rowCount = Math.max(1, Math.floor(height / maxCardHeight));
  const cardsPerRow = Math.ceil(width / cardWidth);
  const baseCards = [...galleryCards];

  return Array.from({ length: rowCount }, () => {
    const shuffled = [...baseCards].sort(() => Math.random() - 0.5);

    while (shuffled.length < cardsPerRow) {
      shuffled.push(...baseCards);
    }

    return shuffled.slice(0, cardsPerRow);
  });
}
