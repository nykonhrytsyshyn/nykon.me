import React, { ReactElement } from "react";
import { Navbar } from "@components/navigation";
import Head from "@layouts/head";
import TransitionScreen from "@components/transition-screen";
import { TransitionProvider } from "@contexts/transition-screen";

/**
 * Default layout of the application that wraps the content with the navbar and
 * transition screen.
 *
 * @param children The children to render within the layout.
 * @constructor
 */
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <TransitionProvider>
      <Head />
      <TransitionScreen />
      <Navbar />
      <main>{children}</main>
    </TransitionProvider>
  );
}
