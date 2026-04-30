const languages = [
  { flag: "🇳🇱", code: "NL", name: "Nederlands", level: "Moedertaal" },
  { flag: "🇬🇧", code: "EN", name: "Engels", level: "Vloeiend" },
  { flag: "🇧🇷", code: "PT", name: "Portugees (BR)", level: "Vloeiend" },
  { flag: "🇺🇸", code: "ASL", name: "American Sign Language", level: "Gebarentaal" },
  { flag: "🇳🇱", code: "NGT", name: "Nederlandse Gebarentaal", level: "Gebarentaal" },
];

export default function LanguageFlags() {
  return (
    <div
      style={{
        background: "white",
        border: "0.5px solid #e5e7eb",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        marginTop: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "1rem",
        }}
      >
        04 — Talen & Communicatie
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {languages.map((lang) => (
          <div
            key={lang.code}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "22px", lineHeight: 1, flexShrink: 0 }}>{lang.flag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4px" }}>
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a18", fontFamily: "'Outfit', sans-serif" }}>
                  {lang.name}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    opacity: 0.7,
                  }}
                >
                  {lang.level}
                </span>
              </div>
              <div style={{ height: "1.5px", background: "#f3f4f6", borderRadius: "2px" }}>
                <div
                  style={{
                    height: "100%",
                    background: lang.level === "Gebarentaal"
                      ? "repeating-linear-gradient(90deg, var(--accent) 0, var(--accent) 6px, transparent 6px, transparent 10px)"
                      : "var(--accent)",
                    borderRadius: "2px",
                    width: lang.level === "Moedertaal" ? "100%" : lang.level === "Vloeiend" ? "88%" : "75%",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
