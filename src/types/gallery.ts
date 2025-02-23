import { ImgHTMLAttributes } from "react";

/* Gallery card types */

/** Gallery card properties type. */
export type GalleryCardProps = {
  image: ImgHTMLAttributes<HTMLImageElement>;
  hidden?: boolean;
};
