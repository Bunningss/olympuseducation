import "@/styles/globals.css";
import { nunito } from "@/fonts/fonts";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";
import Alert from "@/components/Alert/Alert";

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
      <body className={nunito.className}>
        <Alert />
        <Navbar />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
