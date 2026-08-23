"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Star {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function Navigation() {
  const pathname = usePathname();
  const [stars, setStars] = useState<Star[]>([]);

  const triggerStars = useCallback(() => {
    const newStars = Array.from({ length: 35 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 0.5,
      color: Math.random() > 0.5 ? "var(--text-primary)" : "var(--capsule-bg)",
    }));
    setStars((prev) => [...prev, ...newStars]);
    setTimeout(() => setStars((prev) => prev.filter((star) => !newStars.some((item) => item.id === star.id))), 4500);
  }, []);

  return (
    <>
      <div className="raining-stars-container" aria-hidden="true">
        {stars.map((star) => <div key={star.id} className="falling-star" style={{ left: `${star.left}%`, fontSize: `${star.size}rem`, animationDuration: `${star.duration}s`, animationDelay: `${star.delay}s`, color: star.color }}>✦</div>)}
      </div>
      <header className="top-nav">
        <nav>
          <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>home</Link>
          <a href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>about</a>
          <div className="nav-logo" onClick={triggerStars} style={{ cursor: "pointer" }} aria-label="Make it sparkle" role="button">✦</div>
          <a href="/projects" className={`nav-link ${pathname.startsWith("/projects") ? "active" : ""}`}>projects</a>
          <a href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>contact</a>
        </nav>
      </header>
    </>
  );
}
