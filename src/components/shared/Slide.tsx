import type { CSSProperties, ReactNode } from "react";

export function Slide({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style = { animationDelay: `${delay}s` } as CSSProperties;
  return (
    <div className={`slide-in ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
}
