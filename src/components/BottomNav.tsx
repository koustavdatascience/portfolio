"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "projects", path: "/projects" },
  { name: "photography", path: "/photography" },
  { name: "about", path: "/about" },
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
        return (
          <Link key={item.path} href={item.path} className={`capsule-link ${isActive ? "active" : ""}`} onMouseEnter={() => setHoveredPath(item.path)}>
            <span style={{ position: "relative", zIndex: 10 }}>{item.name}</span>
            {showIndicator && (
              <motion.div layoutId="bottom-nav-indicator" className="nav-indicator" initial={false} transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.8 }} />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
