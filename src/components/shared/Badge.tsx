type TechStyle = { bg: string; fg: string };

const TECH_COLORS: Record<string, TechStyle> = {
  javascript: { bg: "#f7df1e", fg: "#1a1a1a" },
  typescript: { bg: "#3178c6", fg: "#ffffff" },
  html: { bg: "#e34c26", fg: "#ffffff" },
  css: { bg: "#1572b6", fg: "#ffffff" },
  scss: { bg: "#cc6699", fg: "#ffffff" },
  react: { bg: "#61dafb", fg: "#0a1929" },
  "next.js": { bg: "#0a0a0a", fg: "#ffffff" },
  tailwind: { bg: "#38bdf8", fg: "#0a1929" },
  supabase: { bg: "#3ecf8e", fg: "#0a1f15" },
  redux: { bg: "#764abc", fg: "#ffffff" },
  "styled components": { bg: "#db7093", fg: "#ffffff" },
  swiper: { bg: "#0080ff", fg: "#ffffff" },
  node: { bg: "#3c873a", fg: "#ffffff" },
  rust: { bg: "#dea584", fg: "#1a1a1a" },
};

const DEFAULT_STYLE: TechStyle = { bg: "#3f3f46", fg: "#fafafa" };

export function Badge({ label }: { label: string }) {
  const style = TECH_COLORS[label.toLowerCase()] ?? DEFAULT_STYLE;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
      style={{ backgroundColor: style.bg, color: style.fg }}
    >
      {label}
    </span>
  );
}
