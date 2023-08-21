"use client"
import { Dashboard, Footer, Header } from "@/components";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import "../styles/globals.scss";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`${[theme]}`} >
      <Header />
      <Dashboard/>
      <Footer />
    </div>
  );
}
