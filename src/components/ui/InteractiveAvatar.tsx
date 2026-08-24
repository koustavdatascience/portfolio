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
      className={`avatar-wrapper interactive-avatar avatar-photo-wrapper${isHovered ? " avatar-photo-wrapper--hover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width, height }}
      aria-label="Koustav Roy profile illustration"
      role="img"
    >
      <img src="/profile/koustav-avatar.webp" alt="Koustav Roy profile illustration" className="avatar-photo" />
      <span className="avatar-photo-dot" aria-hidden="true" />
    </div>
  );
}
