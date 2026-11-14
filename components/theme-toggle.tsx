"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.dataset.theme === "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      try {
        if (localStorage.getItem("portfolio-theme")) return;
      } catch {}
      root.dataset.theme = preference.matches ? "dark" : "light";
    };
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", update);
    };
  }, []);
  const toggle = () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    setDark(theme === "dark");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      onClick={toggle}
    >
      <Moon className="theme-moon" size={17} aria-hidden="true" />
      <Sun className="theme-sun" size={17} aria-hidden="true" />
    </button>
  );
}
