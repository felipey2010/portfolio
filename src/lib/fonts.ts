import { Source_Code_Pro, Poppins } from "next/font/google";

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-source-code",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
