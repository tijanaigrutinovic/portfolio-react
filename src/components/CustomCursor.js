import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMediaQuery = (e) => {
      if (e.matches) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const mediaQuery = window.matchMedia("(max-width: 600px)");
    mediaQuery.addEventListener("change", handleMediaQuery);

    handleMediaQuery(mediaQuery);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        opacity: isVisible ? "1" : "0",
      }}
    ></div>
  );
};

export default CustomCursor;
