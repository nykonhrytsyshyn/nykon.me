import React, { useState, useEffect, ReactElement } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Icon } from "@components/icon";

/**
 * A switch component to switch between light and dark themes.
 *
 * @constructor
 */
export default function ThemeSwitch(): ReactElement {
  /* State to store the mounted state of the component */
  const [isMounted, setIsMounted] = useState(false);
  /* Theme context */
  const { theme, setTheme } = useTheme();
  /* Switch handler */
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  /* Switch hook */
  const { Component, isSelected, getInputProps } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return <div className="w-6 h-6" />;
  }

  return (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      className="w-10 h-10 cursor-pointer hover-target backdrop-blur-md bg-transparent border-1 border-neutral-600 hover:bg-default/40 transition-all rounded-large"
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Icon
        className={clsx(
          "h-full w-full p-2",
          "group-data-[selected=true]:bg-transparent",
          "text-default-500",
        )}
        id={isSelected ? "moon" : "sun"}
      />
    </Component>
  );
}
