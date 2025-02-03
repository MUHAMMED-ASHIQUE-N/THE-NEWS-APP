import { Classic } from "@theme-toggles/react";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.currentTheme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.currentTheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.currentTheme = "light";
    }
  }, [theme]);

  return (
    <>
    <Classic onClickCapture={() => setTheme(theme === "light" ? "dark" : "light")}  duration={750}
    className="text-3xl" />
    </>

  );
};

export default ThemeToggle;
