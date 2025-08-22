"use client";

import { useEffect, useRef, useState } from "react";

export function SimpleCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isOnMenu, setIsOnMenu] = useState(false);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let rafId = 0;
    let lastX = 0;
    let lastY = 0;
    let needsUpdate = false;

    const apply = () => {
      needsUpdate = false;
      el.style.setProperty("--cursor-x", `${lastX - 10}px`);
      el.style.setProperty("--cursor-y", `${lastY - 10}px`);
    };

    const tick = () => {
      if (needsUpdate) apply();
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      needsUpdate = true;
    };

    const onInteractiveEnter = () => setIsHovering(true);
    const onInteractiveLeave = () => setIsHovering(false);

    const onMenuEnter = () => setIsOnMenu(true);
    const onMenuLeave = () => setIsOnMenu(false);

    document.addEventListener("mousemove", onMove);

    const interactive = Array.from(
      document.querySelectorAll(
        'a, button, input, textarea, select, summary, [role="button"], [tabindex]:not([tabindex="-1"])'
      )
    );
    interactive.forEach((node) => {
      node.addEventListener("mouseenter", onInteractiveEnter);
      node.addEventListener("mouseleave", onInteractiveLeave);
    });

    const menus = Array.from(
      document.querySelectorAll("nav, .navigation, [role='navigation']")
    );
    menus.forEach((node) => {
      node.addEventListener("mouseenter", onMenuEnter);
      node.addEventListener("mouseleave", onMenuLeave);
    });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      interactive.forEach((node) => {
        node.removeEventListener("mouseenter", onInteractiveEnter);
        node.removeEventListener("mouseleave", onInteractiveLeave);
      });
      menus.forEach((node) => {
        node.removeEventListener("mouseenter", onMenuEnter);
        node.removeEventListener("mouseleave", onMenuLeave);
      });
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`cursor-crosshair${isHovering ? " hover" : ""}${
        isOnMenu ? " menu-hover" : ""
      }`}
    />
  );
}
