"use client";

import { useEffect, useState } from "react";

interface SkillCardProps {
  index: string;
  numeral: string;
  category: string;
  title: string;
  titleLine2: string;
  skills: string[];
  barWidth: number;
  backContent: React.ReactNode;
}

export default function SkillCard({
  index,
  numeral,
  category,
  title,
  titleLine2,
  skills,
  barWidth,
  backContent,
}: SkillCardProps) {
  const [animated, setAnimated] = useState(false);
  const [flipped, setFlipped]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{ perspective: "1000px", minHeight: "215px", cursor: "pointer" }}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "215px",
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "#fff",
            border: "0.5px solid #c8d4b8",
            borderRadius: "4px",
            padding: "1.25rem",
            overflow: "hidden",
            transition: "border-color 0.25s",
          }}
        >
          {/* Ornament */}
          <div style={{ position: "absolute", top: "10px", right: "14px", fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#C0DD97", fontStyle: "italic", userSelect: "none" }}>
            {numeral}
          </div>

          {/* Hint */}
          <div style={{ position: "absolute", bottom: "9px", right: "12px", fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.3, color: "#3B6D11" }}>
            klik ↻
          </div>

          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "0.75rem" }}>
            {index} — {category}
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.2, color: "#1c1f1a", marginBottom: "0.8rem" }}>
            {title}<br />{titleLine2}
          </h2>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
            {skills.map((s) => (
              <li key={s} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#4a4f46", fontWeight: 300 }}>
                <span style={{ display: "inline-block", width: "10px", height: "1px", background: "#639922", flexShrink: 0 }} />
                {s}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "9px", height: "1px", background: "#dde8cc", borderRadius: "1px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              background: "#639922",
              borderRadius: "1px",
              width: animated ? `${barWidth}%` : "0%",
              transition: "width 1.4s 0.1s cubic-bezier(0.4,0,0.2,1)",
            }} />
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "#EAF3DE",
            border: "0.5px solid #C0DD97",
            borderRadius: "4px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", bottom: "9px", right: "12px", fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.3, color: "#3B6D11" }}>
            klik ↺
          </div>
          {backContent}
        </div>
      </div>
    </div>
  );
}
