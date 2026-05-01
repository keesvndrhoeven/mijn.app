import SkillCard from "@/components/SkillCard";
import LanguageFlags from "@/components/LanguageFlags";

const chips = [
  { label: "Multicultureel", dashed: false },
  { label: "Flexibel",       dashed: false },
  { label: "Snelle aanpasser", dashed: false },
  { label: "ASL",            dashed: true  },
  { label: "NGT",            dashed: true  },
  { label: "PT-BR",          dashed: false },
];

const spokenBack = (
  <div>
    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "0.6rem" }}>
      Over deze talen
    </p>
    <p style={{ fontSize: "0.85rem", color: "#3d4039", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
      Opgegroeid in Nederland, gevormd door culturen. Nederlands als moedertaal, Engels als tweede natuur, Braziliaans Portugees als brug naar een nieuwe wereld.
    </p>
    <div style={{ marginTop: "0.75rem", fontSize: "20px", display: "flex", gap: "6px" }}>
      🇳🇱 🇬🇧 🇧🇷
    </div>
  </div>
);

const signBack = (
  <div>
    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "0.6rem" }}>
      Over gebarentaal
    </p>
    <p style={{ fontSize: "0.85rem", color: "#3d4039", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Cormorant Garamond', serif" }}>
      ASL en NGT zijn volwaardige talen met eigen grammatica en cultuur. Visuele communicatie opent een wereld die velen missen.
    </p>
    <div style={{ marginTop: "0.75rem", display: "flex", gap: "8px", alignItems: "center" }}>
      <span style={{ fontSize: "20px" }}>🤟</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#3B6D11", opacity: 0.65 }}>ASL · NGT</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#faf9f5", position: "relative" }}>

      {/* Gelinieerde achtergrond */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.18,
          backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, #97C459 39px, #97C459 40px)",
        }}
      />

      <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto", padding: "2.5rem 2rem 3.5rem" }}>

        {/* Eyebrow */}
        <p className="animate-fade-up-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "1.1rem" }}>
          Portfolio — 2026
        </p>

        {/* Naam */}
        <h1 className="animate-fade-up-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 9vw, 4.8rem)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.01em" }}>
          <em style={{ fontStyle: "italic", color: "#3B6D11" }}>Kees</em>
        </h1>

        {/* Streep */}
        <div className="animate-fade-up-3" style={{ width: "56px", height: "1px", background: "#639922", margin: "1.4rem 0" }} />

        {/* Welkomstbericht */}
        <p className="animate-fade-up-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, color: "#3d4039", maxWidth: "490px" }}>
          Welkom. Ik ben Kees — iemand die zich moeiteloos aanpast aan elke context, cultuur of uitdaging. Of het nu gaat om communicatie, technologie of samenwerking: ik vind altijd mijn weg.
        </p>

        {/* Kaartjes */}
        <div className="animate-fade-up-5" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "2rem" }}>
          <SkillCard
            index="01" numeral="I" category="Talen"
            title="Gesproken" titleLine2="Talen"
            skills={["Nederlands", "Engels", "Portugees (BR)"]}
            barWidth={95}
            backContent={spokenBack}
          />
          <SkillCard
            index="02" numeral="II" category="Gebarentaal"
            title="Visuele" titleLine2="Talen"
            skills={["ASL", "NGT", "Visuele communicatie"]}
            barWidth={82}
            backContent={signBack}
          />
        </div>

        {/* Talen met vlaggen */}
        <div className="animate-fade-up-6" style={{ marginTop: "1.75rem" }}>
          <LanguageFlags />
        </div>

        {/* Chips */}
        <div className="animate-fade-up-7" style={{ marginTop: "1.5rem" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B6D11", marginBottom: "0.65rem" }}>
            05 — Adaptiviteit
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {chips.map((chip) => (
              <span key={chip.label} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.75rem", fontWeight: 300,
                color: "#3d4039",
                background: "#EAF3DE",
                borderRadius: "2px",
                padding: "3px 11px",
                border: `0.5px ${chip.dashed ? "dashed" : "solid"} #C0DD97`,
              }}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="animate-fade-up-8" style={{ marginTop: "1.75rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "18px", height: "1px", background: "#639922" }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a9485" }}>
            Beschikbaar · NL · EN · PT-BR · ASL · NGT
          </span>
        </div>

      </div>
    </main>
  );
}
