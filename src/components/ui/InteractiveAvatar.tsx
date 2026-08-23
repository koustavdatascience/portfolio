"use client";

import { useState } from "react";

interface InteractiveAvatarProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function InteractiveAvatar({ width = 122, height = 122 }: InteractiveAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`avatar-wrapper interactive-avatar avatar-placeholder${isHovered ? " avatar-placeholder--hover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width, height }}
      aria-label="Koustav Roy profile photo placeholder"
      role="img"
    >
      <span className="avatar-placeholder-letter">K</span>
      <span className="avatar-placeholder-dot" aria-hidden="true" />
    </div>
  );
}
