import DefaultLayout from "@layouts/default";
import React, { ReactElement, useEffect, useState } from "react";
import galleryCards from "@configs/content/gallery-cards";
import "@styles/module/gallery.module.css";
import { Gallery } from "@components/content/gallery";
import useScrollAnimation from "@hooks/use-scroll-animation";

export default function GalleryPage(): ReactElement {
  useScrollAnimation();

  const [rowCount, setRowCount] = useState(3);

  useEffect(() => {
    setRowCount(
      window.innerHeight < 600 ? 1 : window.innerHeight < 800 ? 2 : 3,
    );
  }, []);

  return (
    <DefaultLayout>
      <section className="relative h-screen flex flex-col">
        <Gallery properties={updateRows(rowCount)} />
      </section>
    </DefaultLayout>
  );
}

function updateRows(count: number) {
  const images = [...galleryCards, ...galleryCards];

  return Array.from({ length: count }, (_, i) =>
    images.slice(
      i * Math.ceil(images.length / count),
      (i + 1) * Math.ceil(images.length / count),
    ),
  );
}
