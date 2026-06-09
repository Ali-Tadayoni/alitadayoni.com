"use client";

import { useEffect, useState, type ReactNode } from "react";

export function Slide({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
      }}
    >
      <div className={className}>{children}</div>
    </div>
  );
}
