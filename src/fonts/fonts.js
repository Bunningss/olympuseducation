import { Nunito_Sans, Roboto_Slab } from "next/font/google";

export const roboto = Roboto_Slab({ subsets: ["cyrillic"], weight: ["900"] });

export const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});
