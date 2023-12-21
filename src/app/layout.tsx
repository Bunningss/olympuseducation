import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";

const roboto = Roboto_Slab({ subsets: ["cyrillic"], weight: ["900"] });
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});

export { ubuntu, roboto };

export const metadata: Metadata = {
  title: "Olympus",
  description: "Olympus Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
