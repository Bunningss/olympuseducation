import { nunito } from "@/fonts/fonts";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";
import ContextProvider from "@/Context/ContextProvider";

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
      <ContextProvider>
        <body className={nunito.className}>
          <Navbar />
          <RegisterModal />
          <LoginModal />
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
