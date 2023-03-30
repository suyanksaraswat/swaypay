import "../locales/i18n";
import "../styles/globals.css";
import "simplebar/src/simplebar.css";
import { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import NotistackProvider from "../ui-library/components/NotistackProvider";
import React from "react";
import ThemeProvider from "../ui-library/theme/index";
export { reportWebVitals } from "next-axiom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <ThemeProvider>
      <NotistackProvider>
        <Component {...pageProps} />
      </NotistackProvider>
    </ThemeProvider>
  );
};

export default trpc.withTRPC(MyApp);
