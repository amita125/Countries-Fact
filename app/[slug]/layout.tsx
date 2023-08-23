"use client"
import { Footer, Header } from "@/components"
import { useTheme } from "@/context/ThemeContext";

export default function CountryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const { theme } = useTheme();

    return (
      <div  className={`${[theme]} h-screen `}>
        <Header />
        {children}
        <Footer/>
      </div>
    )
  }