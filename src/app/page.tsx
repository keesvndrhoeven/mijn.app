import SkillCard from "@/components/SkillCard";
import LanguageFlags from "@/components/LanguageFlags";

const chips = [
  { label: "Multicultureel", dashed: false },
  { label: "Flexibel", dashed: false },
  { label: "Snelle aanpasser", dashed: false },
  { label: "ASL", dashed: true },
  { label: "NGT", dashed: true },
  { label: "PT-BR", dashed: false },
];

const spokenBack = (
  <div>
    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
      Over deze talen
    </p>
    <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
      Opgegroeid in Nederland, gevormd door culturen. Nederlands als moedertaal, Engels als tweede natuur, Braziliaans Portugees als brug naar een nieuwe wereld.
    </p>
    <div style={{ marginTop: "1rem", display: "flex", gap: "8px" }}>
      {["🇳🇱", "🇬🇧", "🇧🇷"].map((f) => (
        <span key={f} style={{ fontSize: "24px" }}>{f}</span>
      ))}
    </div>
  </div>
);

const signBack = (
  <div>
    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
      Over gebarentaal
    </p>
    <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
      ASL en NGT zijn volwaardige talen met eigen grammatica en cultuur. Visuele communicatie opent een wereld die velen missen.
    </p>
    <div style={{ marginTop: "1rem", display: "flex", gap: "8px", alignItems: "center" }}>
      <span style={{ fontSize: "24px" }}>🤟</span>
      <span style={{ fontSize: "13px", fontFamily: "'DM Mono', monospace", color: "var(--accent)", opacity: 0.6 }}>ASL · NGT</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#fafaf9" }}>
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-8 py-20">

        {/* Tag */}
        <p
          className="opacity-0 animate-fade-up-1 font-mono text-[11px] tracking-[0.15em] uppercase mb-5"
          style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}
        >
          Portfolio — 2026
        </p>

        {/* Name */}
        <h1
          className="opacity-0 animate-fade-up-2 leading-none tracking-tight mb-1"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Kees</em>
        </h1>

        {/* Divider */}
        <div
          className="opacity-0 animate-fade-up-3 mt-6 mb-6 h-[2px] w-12 rounded-full"
          style={{ background: "var(--accent)" }}
        />

        {/* Welcome text */}
        <p
          className="opacity-0 animate-fade-up-4 text-base leading-relaxed max-w-lg"
          style={{
            color: "#6b7280",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Welkom. Ik ben Kees — iemand die zich moeiteloos aanpast aan elke
          context, cultuur of uitdaging. Of het nu gaat om communicatie,
          technologie of samenwerking: ik vind altijd mijn weg.
        </p>

        {/* Skill cards */}
        <div className="opacity-0 animate-fade-up-5 grid grid-cols-2 gap-4 mt-10">
          <SkillCard
            index="01"
            category="Talen"
            title="Gesproken"
            titleLine2="Talen"
            skills={["Nederlands", "Engels", "Portugees (BR)"]}
            barWidth={95}
            backContent={spokenBack}
          />
          <SkillCard
            index="02"
            category="Gebarentaal"
            title="Visuele"
            titleLine2="Talen"
            skills={["ASL", "NGT", "Visuele communicatie"]}
            barWidth={82}
            dashed
            backContent={signBack}
          />
        </div>

        {/* Language flags section */}
        <div className="opacity-0 animate-fade-up-6">
          <LanguageFlags />
        </div>

        {/* Adaptivity chips */}
        <div className="opacity-0 animate-fade-up-6 mt-6">
          <p
            className="font-mono text-[11px] tracking-[0.13em] uppercase mb-3"
            style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}
          >
            05 — Adaptiviteit
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="text-xs px-3 py-1 rounded-full transition-colors duration-200 cursor-default"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  color: "#6b7280",
                  background: "var(--accent-dim)",
                  border: `0.5px ${chip.dashed ? "dashed" : "solid"} var(--accent-soft)`,
                }}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <div className="opacity-0 animate-fade-up-7 flex items-center gap-3 mt-9">
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="font-mono text-[11px] tracking-[0.1em] uppercase"
            style={{
              color: "#9ca3af",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Beschikbaar · NL · EN · PT-BR · ASL · NGT
          </span>
        </div>
      </div>
    </main>
  );
}
