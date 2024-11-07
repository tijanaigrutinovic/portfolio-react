import React, { useState, useEffect } from "react";

function DarkLightMode() {
  const [theme, setTheme] = useState("dark"); // Početna vrednost može biti 'light' ili preuzeta iz localStorage

  // Funkcija za podešavanje boje teme u meta tagu
  const setThemeColor = (color) => {
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    }
  };

  // Funkcija koja će reflektovati promene teme u DOM-u
  const reflectPreference = () => {
    document.documentElement.setAttribute("data-theme", theme);
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", theme);
    }

    // Postavljanje boje u meta tagu
    const isDark = theme === "dark";
    const newColor = isDark ? "#0E0E0E" : "#ffffff";
    setThemeColor(newColor);
  };

  // Funkcija za čitanje preferencija iz localStorage ili iz system settings
  const getColorPreference = () => {
    const storedTheme = localStorage.getItem("theme-preference");
    if (storedTheme) {
      return storedTheme;
    } else {
      // Ako nije postavljena preferencija, uzimamo default sistemsku
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  };

  // Efekat koji se poziva pri učitavanju da bi postavio početnu temu
  useEffect(() => {
    const preferredTheme = getColorPreference();
    setTheme(preferredTheme); // Postavi temu prema preferenciji korisnika
  }, []);

  // Efekat za reflektovanje promene teme u DOM-u
  useEffect(() => {
    reflectPreference();
    // Skladišti temu u localStorage
    localStorage.setItem("theme-preference", theme);
  }, [theme]);

  // Toggle tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Efekat koji prati promene sistema u vezi sa temom
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={toggleTheme} // Dodaj ovu liniju
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}

export default DarkLightMode;
