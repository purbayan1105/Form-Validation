import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--var-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className={poppins_init.variable}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
