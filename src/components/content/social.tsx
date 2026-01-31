import type { SocialCardProps, SocialCategoryProps } from "@type/social";

import React, { ReactElement } from "react";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import clsx from "clsx";
import styles from "@styles/module/scroll-animated.module.css";
import { Icon } from "@components/icon";
import { fontMono } from "@configs/fonts";

/**
 * Social card component.
 *
 * @param properties Social card parameters.
 * @returns Social card component.
 * @constructor
 */
export function SocialCard({
  properties,
}: {
  properties: SocialCardProps;
}): ReactElement | null {
  if (properties.disabled) {
    return null;
  }

  return (
    <Link
      key={properties.link.href}
      className={`${styles.scrollAnimated} w-full`}
      href={properties.link.href}
      target={properties.link.target}
    >
      <Card
        className={clsx([
          "w-full h-full min-h-24 sm:min-h-64",
          "flex flex-row sm:flex-col justify-center sm:items-center",
          "rounded-[2.5rem] border-1 border-transparent",
          "hover:border-default hover:scale-[1.025] hover:bg-default-100",
          "focus:border-default focus:scale-[1.025] focus:bg-default-100",
        ])}
      >
        {properties.background ? (
          <Image
            removeWrapper
            alt={properties.background.alt}
            className="z-0 absolute w-full h-full object-cover"
            src={properties.background.src}
          />
        ) : null}
        {properties.icon ? (
          <div
            className={clsx([
              "z-10 sm:flex sm:justify-center items-center px-6",
              "max-sm:absolute top-1/4 left-0",
            ])}
          >
            <Icon id={properties.icon} size={properties.iconSize || 50} />
          </div>
        ) : null}
        {properties.title ? (
          <h1
            className={clsx(
              "z-10 sm:absolute bottom-4 top-auto text-l font-light font-mono ",
              "max-sm:content-center",
              fontMono.variable,
            )}
          >
            {properties.title}
          </h1>
        ) : null}
      </Card>
    </Link>
  );
}

/**
 * Social category component
 *
 * @param props     Category properties.
 * @param id        Category component id.
 * @param className Category component class name.
 * @param children  Category content.
 * @constructor
 */
export function SocialCategory({
  props,
  id,
  className,
  children,
}: {
  props: SocialCategoryProps;
  id?: string;
  className?: string | undefined;
  children: React.ReactNode;
}): ReactElement {
  return (
    <div className={className} id={id}>
      {props.title ? (
        <h1 className={`${styles.scrollAnimated} text-2xl font-bold`}>
          {props.title}
        </h1>
      ) : null}
      <p
        className={`${styles.scrollAnimated} text-lg text-neutral-600 dark:text-neutral-500 mb-8`}
      >
        {props.subtitle}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
        {children}
      </div>
    </div>
  );
}
