const tarifs = [
  {
    id: "individuel",
    label: "Le plus choisi",
    name: "Coaching individuel",
    price: "45 €",
    unit: "/séance",
    description: "Une séance sur mesure, rien que pour vous.",
    features: [
      "1h en tête-à-tête",
      "À domicile ou en extérieur",
      "Programme adapté",
    ],
    featured: true,
    cta: "Réserver une séance",
    delay: 80,
  },
  {
    id: "mensuel",
    label: null,
    name: "Suivi mensuel",
    price: "160 €",
    unit: "/mois",
    description: "L'accompagnement complet pour des résultats durables.",
    features: [
      "4 séances / mois",
      "Plan d'entraînement évolutif",
      "Suivi entre les séances",
    ],
    featured: false,
    cta: "Réserver",
    delay: 160,
  },
  {
    id: "groupe",
    label: null,
    name: "Séance en groupe",
    price: "15 €",
    unit: "/pers",
    description: "Cap retraite & collectifs : bouger ensemble, avec du lien.",
    features: [
      "Petits groupes conviviaux",
      "Séances adaptées 60+",
      "Carnet de 10 avantageux",
    ],
    featured: false,
    cta: "Réserver",
    delay: 240,
  },
];

export default function Tarifs() {
  return (
    <section
      id="tarifs"
      className="bg-neutral-bg"
      style={{ padding: "clamp(44px,7vh,80px) 0" }}
    >
      <div className="w-[min(1120px,90vw)] mx-auto">
        <div
          data-reveal=""
          className="text-center max-w-[760px] mx-auto mb-[clamp(26px,3.5vw,38px)]"
        >
          <p className="m-0 mb-4 font-semibold text-[clamp(13px,1.4vw,16px)] tracking-[0.02em] text-brand-green">
            Les tarifs
          </p>
          <h2
            className="m-0 font-bold"
            style={{
              fontSize: "clamp(30px,4.6vw,56px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            Des formules claires, sans engagement
          </h2>
        </div>

        <div
          className="grid gap-[18px] items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(232px, 1fr))",
          }}
        >
          {tarifs.map((tarif) => (
            <div
              key={tarif.id}
              data-reveal=""
              data-reveal-delay={String(tarif.delay)}
              className={`flex flex-col relative rounded-[22px] bg-white ${
                tarif.featured
                  ? "border-[1.5px] border-brand-green shadow-[0_18px_48px_rgba(31,74,55,0.14)]"
                  : "border border-black/6"
              }`}
              style={{ padding: "clamp(20px,2.2vw,26px)" }}
            >
              {tarif.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-white text-[12px] font-semibold tracking-[0.02em] px-[14px] py-[5px] rounded-full whitespace-nowrap">
                  {tarif.label}
                </span>
              )}

              <p className="m-0 mb-[14px] font-semibold text-[clamp(15px,1.5vw,17px)]">
                {tarif.name}
              </p>

              <p
                className="m-0 font-bold leading-none"
                style={{
                  fontSize: "clamp(34px,4vw,46px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {tarif.price}
                <span className="text-[0.42em] font-medium text-neutral-muted tracking-normal">
                  {" "}
                  {tarif.unit}
                </span>
              </p>

              <p className="mt-[14px] mb-0 text-[15px] leading-normal text-neutral-muted">
                {tarif.description}
              </p>

              <div className="h-px bg-black/[0.07] my-4" />

              <ul className="list-none m-0 p-0 flex flex-col gap-[11px]">
                {tarif.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-[10px] items-start text-[15px] text-neutral-text"
                  >
                    <span
                      className="text-brand-green font-bold flex-none"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-auto pt-[18px] no-underline font-semibold text-[15px] transition-colors duration-200 ${
                  tarif.featured
                    ? "inline-flex w-full items-center justify-center bg-brand-green text-white rounded-full py-[13px] px-5 hover:bg-brand-green-hover"
                    : "inline-flex items-center gap-[6px] text-brand-green hover:text-brand-green-hover"
                }`}
              >
                {tarif.cta}
                {!tarif.featured && <span>›</span>}
              </a>
            </div>
          ))}
        </div>

        <p
          data-reveal=""
          className="text-center mx-auto mt-[clamp(20px,2.5vw,28px)] mb-0 text-[14px] text-neutral-subtle max-w-[620px]"
        >
          Tarifs indicatifs, à ajuster. Des formules sur mesure sont possibles
          selon vos objectifs.
        </p>
      </div>
    </section>
  );
}
