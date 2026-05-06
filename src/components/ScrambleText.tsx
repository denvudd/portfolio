"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  active: boolean;
}

const CHARS =
  "!@#$%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function ScrambleText({ text, active }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }
    let iter = 0;
    const id = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < iter) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iter += 0.4;
      if (iter >= text.length) {
        setDisplay(text);
        clearInterval(id);
      }
    }, 28);
    return () => clearInterval(id);
  }, [active, text]);

  return <span>{display}</span>;
}
