import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { TransitionProvider } from "@contexts/transition-screen";
import Cursor from "@components/cursor";
import "@styles/globals.css";
import "@configs/fonts";
import { ReactElement } from "react";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider attribute="class" forcedTheme={pageProps.theme || undefined}>
      <HeroUIProvider navigate={useRouter().push}>
        <TransitionProvider>
          <Cursor />
          <Component {...pageProps} />
        </TransitionProvider>
      </HeroUIProvider>
    </ThemeProvider>
  );
}
