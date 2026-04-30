"use client";

import { useEffect, useState } from "react";

interface SkillCardProps {
  index: string;
  category: string;
  title: string;
  titleLine2: string;
  skills: string[];
  barWidth: number;
  dashed?: boolean;
  backContent: React.ReactNode;
}

export default function SkillCard({
  index,
  category,
  title,
  titleLine2,
  skills,
  barWidth,
  dashed = false,
  backContent,
}: SkillCardProps) {
  const [animated, setAnimated] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: "1000px", minHeight: "220px" }}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-pressed={flipped}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "220px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "white",
            borderRadius: "12px",
            border: "0.5px solid #e5e7eb",
            padding: "1.5rem 1.25rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0, right: 0,
              width: "64px", height: "64px",
              borderRadius: "0 12px 0 100%",
              background: "var(--accent-dim)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px", right: "16px",
              fontSize: "10px",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.3,
              color: "var(--accent)",
            }}
          >
            klik ↻
          </div>

          <p style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {index} — {category}
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.2, color: "#1a1a18", marginBottom: "0.9rem" }}>
            {title}<br />{titleLine2}
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
            {skills.map((skill) => (
              <li key={skill} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#6b7280" }}>
                <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                {skill}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "10px", height: "2px", background: "#f3f4f6", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              background: "var(--accent)",
              borderRadius: "2px",
              width: animated ? `${barWidth}%` : "0%",
              transition: "width 1.3s 0.1s cubic-bezier(0.4,0,0.2,1)",
            }} />
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--accent-dim)",
            border: "0.5px solid var(--accent-soft)",
            borderRadius: "12px",
            padding: "1.5rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "12px", right: "16px",
              fontSize: "10px",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: 0.3,
              color: "var(--accent)",
            }}
          >
            klik ↺
          </div>
          {backContent}
        </div>
      </div>
    </div>
  );
}
