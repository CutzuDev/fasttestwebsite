import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alfa_Slab_One, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const alfaOneSlab = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alfaOneSlab",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className} text-white`}>
      <Component {...pageProps} />
    </main>
  );
}
