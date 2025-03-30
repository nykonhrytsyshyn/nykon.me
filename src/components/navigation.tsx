import type { IconId } from "@type/icon";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { siteConfig } from "@configs/site";
import ThemeSwitch from "@components/theme-switch";
import styles from "@styles/module/navbar.module.css";
import { Button, ButtonProps } from "@heroui/button";
import { Icon } from "@components/icon";
import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useTransitionScreen from "@hooks/use-transition-screen";
import { NavItemProps } from "@type/navigation";
import { Divider } from "@heroui/react";
import clsx from "clsx";

/**
 * Default navbar component.
 * <p>It uses the `siteConfig.navItems` to render the navigation items.</p>
 *
 * @constructor
 */
export function Navbar(): ReactElement {
  return (
    <HeroUINavbar
      className={`${styles.navbar} backdrop-blur-none bg-background-none`}
      isBlurred={false}
    >
      <NavbarContent className="basis-full" justify="center">
        <div className="flex gap-1 backdrop-blur-md bg-transparent border-1 border-neutral-600 rounded-2xl h-10 items-center px-1 py-5">
          {siteConfig.navItems.map((item: NavItemProps) => (
            <>
              <NavDivider show={item.separation?.left} />
              <NavButton
                key={item.link.href}
                href={item.link.href}
                iconId={item.icon}
                label={item.label || ""}
              />
              <NavDivider show={item.separation?.right} />
            </>
          ))}
        </div>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
}

/**
 * A navigation button that navigates to the specified href.
 * <p>Used in the navbar to navigate to different pages.</p>
 * <p>
 * <b>NOTE:</b> Not needed to be wrapped with the {@link NavbarItem} component,
 * it is already wrapped.
 * </p>
 *
 * @param href            The href to navigate to.
 * @param label           Button label, showed when `iconOnly` is false.
 * @param iconId          Icon id, see {@link Icon}.
 * @param buttonClassName Button class name.
 * @param textClassName   Text class name.
 * @param props           Additional button props.
 * @constructor
 */
export function NavButton({
  href,
  label,
  iconId,
  buttonClassName,
  textClassName,
  ...props
}: {
  href: string | undefined;
  label: string;
  iconId: IconId;
  buttonClassName?: string;
  textClassName?: string;
} & ButtonProps): ReactElement {
  /* State to store the active state of the button */
  const [isActive, setActive] = useState(false);
  /* Router instance */
  const router = useRouter();
  /* Transition context, used to set the content visibility */
  const { setContentVisible } = useTransitionScreen();

  /* Sets the active state of the button based on the current path */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActive(window.location.pathname === href);
    }
  }, [router]);

  /* Handles the navigation to the specified href */
  const handleNavigation = async () => {
    if (href && !isActive && !props.disabled) {
      setContentVisible(false);
      setTimeout(() => {
        router.push(href).then(() => setContentVisible(true));
      }, 250); // Animation transition duration
    }
  };

  return (
    <NavbarItem>
      <Button
        className={clsx(
          isActive
            ? "bg-default/60 border-neutral-600 text-default-900"
            : "border-transparent text-default-500",
          "w-full",
          "min-w-14 transition-all border-1 hover:border-neutral-600 focus:border-neutral-600 px-4 gap-3",
          buttonClassName,
        )}
        color="default"
        isIconOnly={true}
        radius="md"
        size="sm"
        startContent={<Icon id={iconId} size={16} />}
        variant="light"
        onPress={handleNavigation}
        {...props}
      >
        {label ? (
          <h2 className={`max-sm:hidden sm:pl-3 text-sm ${textClassName}`}>
            {label}
          </h2>
        ) : null}
      </Button>
    </NavbarItem>
  );
}

function NavDivider(
  { show }: { show: boolean | undefined } = { show: false },
): ReactElement | null {
  return show ? <Divider className="h-5 mx-1" orientation="vertical" /> : null;
}
