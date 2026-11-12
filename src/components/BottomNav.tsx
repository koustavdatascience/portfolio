"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems: { name: string; path: string; download?: boolean }[] = [
  { name: "projects", path: "/projects" },
  { name: "photography", path: "/photography" },
  { name: "resume", path: "/resume.pdf", download: true },
  { name: "contact", path: "/contact" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav className={`bottom-capsule ${pathname === "/" ? "animate-on-home" : ""}`} onMouseLeave={() => setHoveredPath(null)} aria-label="Portfolio sections">
      {navItems.map((item) => {
        const isActive = item.path === pathname || pathname.startsWith(`${item.path}/`);
        const showIndicator = hoveredPath === item.path || (isActive && !hoveredPath);
        const linkContent = (
          <>
            <span style={{ position: "relative", zIndex: 10 }}>{item.name}</span>
            {showIndicator && (
              <motion.div layoutId="bottom-nav-indicator" className="nav-indicator" initial={false} transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.8 }} />
            )}
          </>
        );
        return item.download ? (
          <a key={item.path} href={item.path} download="Koustav_Roy_Resume.pdf" className="capsule-link" onMouseEnter={() => setHoveredPath(item.path)}>
            {linkContent}
          </a>
        ) : (
          <Link key={item.path} href={item.path} className={`capsule-link ${isActive ? "active" : ""}`} onMouseEnter={() => setHoveredPath(item.path)}>
            {linkContent}
          </Link>
        );
      })}
    </nav>
  );
}
