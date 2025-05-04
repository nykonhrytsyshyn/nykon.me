import DefaultLayout from "@layouts/default";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import galleryCards, { maxImageHeight } from "@configs/content/gallery-cards";
import "@styles/module/gallery.module.css";
import { Gallery } from "@components/content/gallery";
import useScrollAnimation from "@hooks/use-scroll-animation";

export default function GalleryPage(): ReactElement {
  useScrollAnimation();

  const [layout, setLayout] = useState({ rows: 1, columns: 3 });
  const handleResize = useCallback(() => {
    setLayout({
      rows: Math.max(1, Math.floor(window.innerHeight / maxImageHeight)),
      columns: Math.max(1, Math.floor(window.innerWidth / 256)),
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <DefaultLayout>
      <section className="relative h-dvh flex flex-col">
        <Gallery properties={generateLayout(layout.rows, layout.columns)} />
      </section>
    </DefaultLayout>
  );
}

/**
 * Generate a layout for the gallery based on the number of rows and columns.
 *
 * @param rowCount    The number of rows.
 * @param columnCount The number of columns.
 * @returns The layout for the gallery.
 */
function generateLayout(rowCount: number, columnCount: number) {
  const totalCardsNeeded = rowCount * columnCount;
  const fullDeck = [];

  /* Duplicate cards to fill the required number of cards */
  while (fullDeck.length < totalCardsNeeded) {
    fullDeck.push(...galleryCards);
  }

  /* Shuffle and slice to the required number */
  const shuffled = fullDeck
    .sort(() => Math.random() - 0.5)
    .slice(0, totalCardsNeeded);

  /* Distribute cards into rows and columns */
  return Array.from({ length: rowCount }, (_, i) => {
    const start = i * columnCount;

    return shuffled.slice(start, start + columnCount);
  });
}
