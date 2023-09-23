import { Montserrat } from "next/font/google";
import "material-symbols";
import ClientProcessor from "@/molecules/clientProcessor/ClientProcessor";
import Navbar from "@/molecules/Navbar/Navbar";
import Sidebar from "@molecules/Sidebar/Sidebar";
import LoginModal from "@molecules/modals/LoginModal";
import RegisterModal from "@molecules/modals/RegisterModal";
import ToasterProvider from "@providers/ToasterProvider";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextWebDesktop",
  description: "Escritorio Web ver 3.0",
};

const font = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientProcessor>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {children}
          <Sidebar />
        </ClientProcessor>
      </body>
    </html>
  );
}
