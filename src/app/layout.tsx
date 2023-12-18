import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";

const nunito = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Academy App",
  description: "Academy App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
