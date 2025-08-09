"use client";

import { useState } from "react";

export default function FlashlightBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Overlay gelap dengan "spotlight" */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(
            circle 450px at ${pos.x}px ${pos.y}px,
            transparent 0%,
            rgba(0,0,0,0.05) 10%,
            rgba(0,0,0,0.2) 20%,
            rgba(0,0,0,0.3) 30%,
            rgba(0,0,0,0.4) 40%,
            rgba(0,0,0,0.5) 50%,
            rgba(0,0,0,0.6) 60%,
            rgba(0,0,0,0.7) 70%,
            rgba(0,0,0,0.8) 80%,
            rgba(0,0,0,0.9) 90%,
            rgba(0,0,0,0.95) 100%
          )`,
        }}
      />
      {/* Konten */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
