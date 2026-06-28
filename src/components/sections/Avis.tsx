const avis = [
  {
    id: "claire",
    quote:
      "Je n'avais jamais couru de ma vie. En quelques mois, j'ai bouclé mon premier trail. Maël rend ça simple et motivant.",
    name: "Claire",
    context: "Trail · 32 ans",
  },
  {
    id: "monique",
    quote:
      "À 67 ans, je pensais que c'était trop tard. Maël m'a prouvé le contraire. Je me sens plus légère et j'ai retrouvé de l'énergie.",
    name: "Monique",
    context: "Cap retraite · 67 ans",
  },
];

export default function Avis() {
  return (
    <section
      id="avis"
      className="bg-white"
      style={{ padding: "clamp(44px,7vh,80px) 0" }}
    >
      <div className="w-[min(1120px,90vw)] mx-auto">
        <div
          data-reveal=""
          className="text-center max-w-[760px] mx-auto mb-[clamp(26px,3.5vw,38px)]"
        >
          <p className="m-0 mb-4 font-semibold text-[clamp(13px,1.4vw,16px)] tracking-[0.02em] text-brand-green">
            Ils témoignent
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
            Des parcours, de vraies victoires
          </h2>
        </div>

        <div
          className="grid gap-[18px] items-stretch"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {avis.map((item) => (
            <figure
              key={item.id}
              data-reveal=""
              className="m-0 flex flex-col bg-neutral-bg rounded-[22px]"
              style={{ padding: "clamp(22px,2.4vw,30px)" }}
            >
              <blockquote
                className="m-0 flex-1 font-medium text-[#1d1d1f]"
                style={{
                  fontSize: "clamp(18px,1.8vw,21px)",
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                «&nbsp;{item.quote}&nbsp;»
              </blockquote>

              <figcaption className="flex items-center gap-[13px] mt-[26px]">
                {/* Avatar placeholder — remplacer par <Image> avec vraies photos */}
                <span
                  className="w-11 h-11 rounded-full flex-none bg-[#e3e3e1]"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-semibold text-[15px]">
                    {item.name}
                  </span>
                  <span className="block text-[13px] text-neutral-subtle">
                    {item.context}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
