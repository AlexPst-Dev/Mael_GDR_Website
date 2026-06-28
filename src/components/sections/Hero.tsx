export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark"
      style={{ padding: "clamp(96px,15vh,140px) 0 clamp(54px,8vh,96px)" }}
    >
      {/* Image de fond — remplacer le src par la vraie photo */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-mael.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dégradé sombre en bas pour la lisibilité du texte */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 22%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,1) 86%)",
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 w-[min(1120px,90vw)] mx-auto text-center flex flex-col items-center gap-0">
        <p
          data-reveal=""
          className="m-0 mb-[clamp(14px,2vw,20px)] font-semibold text-[clamp(12px,1.4vw,15px)] tracking-wider uppercase text-brand-pink"
        >
          Coach diplômé · STAPS EAPA · CQP Personal Trainer
        </p>

        <h1
          data-reveal=""
          data-reveal-delay="80"
          className="m-0 font-extrabold text-white"
          style={{
            fontSize: "clamp(48px,7vw,88px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Maël Gdr
        </h1>

        <p
          data-reveal=""
          data-reveal-delay="150"
          className="mt-[clamp(16px,2.4vw,24px)] mb-0 mx-auto font-medium text-white"
          style={{
            fontSize: "clamp(17px,2vw,22px)",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            textWrap: "balance",
          }}
        >
          Coach sportif &amp; Enseignant en activité physique adaptée diplômé
          d&apos;État
        </p>

        <p
          data-reveal=""
          data-reveal-delay="220"
          className="mt-[clamp(16px,2vw,22px)] mb-0 mx-auto text-white/75 max-w-[640px] font-normal"
          style={{
            fontSize: "clamp(16px,1.8vw,20px)",
            lineHeight: 1.5,
            textWrap: "pretty",
          }}
        >
          Avancez sur votre parcours, accompagné à chaque étape — des séances
          qui ont du sens, autour de Rennes et de Montfort-sur-Meu.
        </p>

        <div
          data-reveal=""
          data-reveal-delay="300"
          className="flex flex-wrap gap-[14px] justify-center mt-[clamp(20px,2.8vw,32px)]"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-brand-green text-white no-underline font-semibold rounded-full transition-all duration-200 hover:bg-brand-green hover:-translate-y-0.5"
            style={{ fontSize: "clamp(15px,1.7vw,18px)", padding: "15px 30px" }}
          >
            Réserver un premier échange
          </a>

          <a
            href="#accompagnements"
            className="inline-flex items-center gap-[7px] text-white no-underline font-semibold rounded-full border border-white/35 transition-all duration-200 hover:bg-white/10 hover:border-white/60"
            style={{ fontSize: "clamp(15px,1.7vw,18px)", padding: "15px 22px" }}
          >
            Voir les accompagnements <span className="text-[1.1em]">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
