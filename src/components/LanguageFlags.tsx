const languages = [
  { flag: "🇳🇱", name: "Nederlands",     level: "Moedertaal",  width: "100%", dashed: false },
  { flag: "🇬🇧", name: "Engels",         level: "Vloeiend",    width: "90%",  dashed: false },
  { flag: "🇧🇷", name: "Portugees (BR)", level: "Vloeiend",    width: "85%",  dashed: false },
  { flag: "🇺🇸", name: "ASL",            level: "Gebarentaal", width: "80%",  dashed: true  },
  { flag: "🇳🇱", name: "NGT",            level: "Gebarentaal", width: "78%",  dashed: true  },
];

export default function LanguageFlags() {
  return (
    <div style={{ background: "#fff", border: "0.5px solid #c8d4b8", borderRadius: "4px", padding: "1.25rem 1.4rem" }}>
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "1rem" }}>
        04 — Talen &amp; Communicatie
      </p>
      {languages.map((lang) => (
        <div key={lang.name} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
          <span style={{ fontSize: "19px", lineHeight: 1, flexShrink: 0 }}>{lang.flag}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.82rem", fontWeight: 400, color: "#1c1f1a" }}>
                {lang.name}
              </span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B6D11", opacity: 0.65 }}>
                {lang.level}
              </span>
            </div>
            <div style={{ height: "1px", background: "#dde8cc" }}>
              <div style={{
                height: "100%",
                width: lang.width,
                background: lang.dashed
                  ? "repeating-linear-gradient(90deg, #639922 0, #639922 5px, transparent 5px, transparent 9px)"
                  : "#639922",
              }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
