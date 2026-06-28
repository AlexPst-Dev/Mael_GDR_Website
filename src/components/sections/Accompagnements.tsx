import { accompagnements } from "@/lib/accompagnements";

export default function Accompagnements() {
  return (
    <div id="accompagnements" className="flex flex-col gap-[10px] bg-white">
      {accompagnements.map((item) => (
        <section
          key={item.id}
          aria-label={item.title}
          className="flex flex-wrap overflow-hidden bg-[#3d1019] min-h-0 transition-transform duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.03] hover:z-30 hover:relative hover:shadow-[0_0_0_4px_#fff,0_28px_80px_rgba(0,0,0,0.4)]"
        >
          {/* Bloc texte */}
          <div
            data-reveal=""
            className={`flex-[1_1_440px] aspect-square min-h-0 bg-[#3d1019] flex flex-col justify-center ${
              item.imageLeft ? "order-2" : "order-1"
            }`}
            style={{ padding: "clamp(26px,3.6vw,72px) clamp(44px,6vw,92px)" }}
          >
            <p className="m-0 mb-4 font-semibold text-[clamp(13px,1.4vw,16px)] tracking-[0.04em] uppercase text-[#e3a6ae]">
              {item.tag}
            </p>

            <h2
              className="m-0 font-bold text-white"
              style={{
                fontSize: "clamp(34px,4.4vw,64px)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                textWrap: "balance",
                maxWidth: "13ch",
              }}
            >
              {item.title}
            </h2>

            <p
              className="mt-[clamp(11px,1.5vw,22px)] mb-0 text-white/80 max-w-[540px]"
              style={{
                fontSize: "clamp(17px,1.6vw,21px)",
                lineHeight: 1.5,
                textWrap: "pretty",
              }}
            >
              {item.description}
            </p>

            <ul className="list-none m-0 p-0 flex flex-col gap-[5px] mt-[clamp(8px,1.2vw,28px)] max-w-[540px]">
              {item.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-[11px] items-start text-white/90"
                  style={{ fontSize: "clamp(15px,1.5vw,17px)" }}
                >
                  <span
                    className="text-[#e3a6ae] font-bold flex-none"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-[14px] items-center mt-[clamp(12px,1.6vw,28px)]">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#e3a6ae] text-[#3d1019] no-underline font-bold rounded-full transition-all duration-200 hover:bg-[#eec3c8] hover:-translate-y-0.5"
                style={{
                  fontSize: "clamp(15px,1.5vw,17px)",
                  padding: "14px 28px",
                }}
              >
                Ça m&apos;intéresse <span className="text-[1.15em]">›</span>
              </a>
            </div>
          </div>

          {/* Bloc image */}
          <div
            data-reveal=""
            className={`relative flex-[1_1_440px] aspect-square min-h-0 overflow-hidden ${
              item.imageLeft ? "order-1" : "order-2"
            }`}
          >
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('${item.image}')`,
                filter: "contrast(1.03) saturate(1.05) brightness(1.05)",
              }}
              role="img"
              aria-label={item.imageAlt}
            />
            {/* Dégradé de liaison avec le bloc texte */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: item.imageLeft
                  ? "linear-gradient(270deg,#3d1019 0%,rgba(61,16,25,0) 17%)"
                  : "linear-gradient(90deg,#3d1019 0%,rgba(61,16,25,0) 17%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(61,16,25,0.12)" }}
              aria-hidden="true"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
