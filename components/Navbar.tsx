"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  // Start as false, then check localStorage once the component mounts
  // in the browser (localStorage doesn't exist on the server).
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setIsDark(saved === "dark");
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);

    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <header className="border-b border-gray-200 dark:border-neutral-700">
      <nav
        aria-label="Main navigation"
        className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-4"
      >
        <Link href="/" className="text-lg font-bold no-underline">
          Hugo Rusli
        </Link>

        <ul className="flex flex-wrap items-center gap-4 list-none m-0 p-0">
          <li>
            <Link href="/" className="site-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="site-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="site-link">
              Contact
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              className="border border-gray-400 dark:border-neutral-500 rounded px-3 py-1 text-sm"
            >
              {isDark ? "Switch to light mode" : "Switch to dark mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
