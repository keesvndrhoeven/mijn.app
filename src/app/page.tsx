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

type AppEntry = {
  name: string;
  type: string;
  tip: string;
  tag: "Gratis" | "Freemium" | "Betaald";
};

type LangGuide = {
  flag: string[];
  label: string;
  sublabel: string;
  apps: AppEntry[];
};

const langGuide: LangGuide[] = [
  {
    flag: ["🇧🇷"],
    label: "Portugees (BR)",
    sublabel: "Onderhoud & verdieping",
    apps: [
      { name: "Duolingo", type: "Gamified oefening", tip: "Dagelijkse herhaling. Heeft een eigen Braziliaans Portugees cursus.", tag: "Gratis" },
      { name: "Anki", type: "Flashcards / SRS", tip: "Spaced repetition voor woordenschat. Zoek PT-BR decks op AnkiWeb.", tag: "Gratis" },
      { name: "italki", type: "Gespreksoefening", tip: "Spreek met native speakers. Goedkoper dan traditionele les.", tag: "Freemium" },
      { name: "Language Transfer", type: "Audio cursus", tip: "Gratis podcast-stijl cursus. Sterk voor grammatica-intuïtie.", tag: "Gratis" },
    ],
  },
  {
    flag: ["🇬🇧"],
    label: "Engels",
    sublabel: "Verfijning & nuance",
    apps: [
      { name: "BBC Learning English", type: "Nieuws & audio", tip: "Gratis content voor gevorderden met uitdrukkingen en intonatie.", tag: "Gratis" },
      { name: "Speechling", type: "Uitspraak", tip: "Stuur inspraken in, krijg feedback van native speaker coaches.", tag: "Freemium" },
      { name: "Elllo", type: "Luisteroefening", tip: "Duizenden oefeningen met transcripties in verschillende accenten.", tag: "Gratis" },
    ],
  },
  {
    flag: ["🇺🇸", "🇳🇱"],
    label: "ASL & NGT",
    sublabel: "Gebarentaal",
    apps: [
      { name: "Handspeak", type: "ASL woordenboek", tip: "Groot online ASL woordenboek met video per gebaar.", tag: "Gratis" },
      { name: "Spread the Sign", type: "Meerdere gebarentalen", tip: "Bevat zowel ASL als NGT. Zoekbaar per gebaar.", tag: "Gratis" },
      { name: "SignSchool", type: "ASL lessen", tip: "Gestructureerde ASL cursus met video. Goed voor alle niveaus.", tag: "Freemium" },
      { name: "NGT Signbank", type: "NGT woordenboek", tip: "Officieel NGT woordenboek van de Radboud Universiteit.", tag: "Gratis" },
    ],
  },
];

const tagStyle: Record<AppEntry["tag"], React.CSSProperties> = {
  Gratis: {
    background: "rgba(16,185,129,0.08)",
    color: "#059669",
    border: "0.5px solid rgba(16,185,129,0.25)",
  },
  Freemium: {
    background: "rgba(245,158,11,0.08)",
    color: "#b45309",
    border: "0.5px solid rgba(245,158,11,0.25)",
  },
  Betaald: {
    background: "rgba(107,114,128,0.08)",
    color: "#6b7280",
    border: "0.5px solid rgba(107,114,128,0.2)",
  },
};

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
            numeral="I"
            category="Talen"
            title="Gesproken"
            titleLine2="Talen"
            skills={["Nederlands", "Engels", "Portugees (BR)"]}
            barWidth={95}
            backContent={spokenBack}
          />
          <SkillCard
            index="02"
            numeral="II"
            category="Gebarentaal"
            title="Visuele"
            titleLine2="Talen"
            skills={["ASL", "NGT", "Visuele communicatie"]}
            barWidth={82}
            backContent={signBack}
          />
        </div>

        {/* Language flags section */}
        <div className="opacity-0 animate-fade-up-6">
          <LanguageFlags />
        </div>

        {/* ── App Guide ── */}
        <div className="opacity-0 animate-fade-up-6 mt-10">
          <p
            className="font-mono text-[11px] tracking-[0.13em] uppercase mb-1"
            style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace" }}
          >
            06 — Apps & Hulpmiddelen
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-0.01em",
              color: "inherit",
              margin: "0.25rem 0 0.3rem",
              lineHeight: 1.15,
            }}
          >
            Hoe leer je een taal?
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "#9ca3af",
              marginBottom: "1.75rem",
            }}
          >
            Per taal — de beste apps en tools om verder te komen.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {langGuide.map((lang, i) => (
              <div key={lang.label}>
                {/* Language header */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "16px" }}>{lang.flag.join(" ")}</span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {lang.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9ca3af",
                    }}
                  >
                    {lang.sublabel}
                  </span>
                </div>

                {/* App cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "8px",
                  }}
                >
                  {lang.apps.map((app) => (
                    <div
                      key={app.name}
                      style={{
                        background: "#ffffff",
                        border: "0.5px solid rgba(0,0,0,0.08)",
                        borderRadius: "10px",
                        padding: "0.75rem 1rem",
                        transition: "border-color 0.15s",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          padding: "2px 7px",
                          borderRadius: "20px",
                          marginBottom: "6px",
                          ...tagStyle[app.tag],
                        }}
                      >
                        {app.tag}
                      </span>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 500,
                          fontSize: "13px",
                          color: "#1f2937",
                          margin: "0 0 2px",
                        }}
                      >
                        {app.name}
                      </p>
                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          margin: "0 0 6px",
                        }}
                      >
                        {app.type}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 300,
                          fontSize: "12px",
                          color: "#6b7280",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {app.tip}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divider between languages, not after last */}
                {i < langGuide.length - 1 && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      borderTop: "0.5px solid rgba(0,0,0,0.07)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Tip box */}
          <div
            style={{
              marginTop: "1.5rem",
              background: "rgba(0,0,0,0.025)",
              borderRadius: "10px",
              padding: "1rem 1.25rem",
              border: "0.5px solid rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "6px",
              }}
            >
              Aanpak
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: "#6b7280",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Consistentie wint van intensiteit. Tien minuten per dag is effectiever
              dan twee uur in het weekend. Combineer een actieve methode (spreken,
              schrijven) met een passieve (luisteren, lezen).
            </p>
          </div>
        </div>
        {/* ── Einde App Guide ── */}

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
