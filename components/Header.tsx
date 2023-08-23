"use client"
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Dark, Light, Logo } from "./icons";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-1 h-20 border-b-2 border-solid border-slate-200 z-10">
      <nav className="flex items-center gap-5 ">
        Countries of the world
        <Logo />
      </nav>

      <button onClick={toggleTheme}>{theme === "light" ? <Dark/>: <Light/>} </button> 
    </div>
  );
};

export default Header;
