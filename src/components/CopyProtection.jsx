"use client";
import { useEffect } from "react";

export default function CopyProtection() {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();

    const disableKeys = (e) => {
      if (
        e.ctrlKey &&
        ["c", "x", "u", "s", "a"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return null;
}
