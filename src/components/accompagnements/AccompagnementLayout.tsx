import type { Accompagnement } from "@/lib/accompagnements";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";

interface Props {
  data: Accompagnement;
}

/**
 * Template partagé par les 3 pages d'accompagnement.
 * Chaque page lui passe ses données — le layout est identique,
 * seul le contenu change.
 */
export default function AccompagnementLayout({ data }: Props) {
  const { title, page } = data;

  return (
    <>
      <ScrollRevealInit />
      <Navbar />

      <main className="bg-brand-dark-card text-white overflow-x-hidden">
        {/* ── Header ── */}
        <header
          className="relative overflow-hidden"
          style={{ padding: "clamp(110px,18vw,220px) 0 clamp(40px,6vw,72px)" }}
        >
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${page.headerImage}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #000 0%, rgba(0,0,0,0.85) 18%, rgba(0,0,0,0.45) 42%, rgba(0,0,0,0) 62%)",
            }}
            aria-hidden="true"
          />

          <div className="relative w-[min(1080px,90vw)] mx-auto">
            <a
              href="/#accompagnements"
              className="inline-flex items-center gap-2 no-underline text-white/60 font-semibold text-[15px] mb-[clamp(32px,5vw,56px)] transition-colors duration-200 hover:text-brand-pink"
            >
              <span className="text-[1.2em]">←</span> Revenir aux activités
            </a>

            <h1
              className="m-0 font-extrabold text-white"
              style={{
                fontSize: "clamp(38px,6.4vw,76px)",
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                maxWidth: "14ch",
              }}
            >
              {title}
            </h1>

            <p
              className="mt-[clamp(22px,3vw,30px)] mb-0 text-white/78 max-w-[46ch] font-normal"
              style={{ fontSize: "clamp(18px,2.1vw,23px)", lineHeight: 1.5 }}
            >
              {data.description}
            </p>
          </div>
        </header>

        {/* ── Philosophie ── */}
        <section className="relative bg-white text-[#1a1a1a]">
          <div
            className="w-[min(760px,90vw)] mx-auto text-center flex flex-col items-center gap-[clamp(16px,1.8vw,22px)]"
            style={{ padding: "clamp(48px,7vw,96px) 0" }}
          >
            <p
              className="m-0 font-bold tracking-[0.14em] uppercase text-[#9a6b72]"
              style={{ fontSize: "clamp(12px,1.4vw,14px)" }}
            >
              Ma philosophie
            </p>

            <h2
              className="m-0 mb-1 font-bold text-[#1a1a1a]"
              style={{
                fontSize: "clamp(26px,3.4vw,42px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                textWrap: "balance",
              }}
            >
              {page.philosophieTitle}
            </h2>

            {page.philosophieParagraphs.map((p, i) => (
              <p
                key={i}
                className="m-0 text-[#4a4a4a] font-normal"
                style={{
                  fontSize: "clamp(16px,1.7vw,19px)",
                  lineHeight: 1.62,
                  textWrap: "pretty",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ── Ce que je propose ── */}
        <section
          className="relative w-[min(1080px,90vw)] mx-auto"
          style={{
            padding: "clamp(36px,5vw,60px) 0",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Image masquée en arrière-plan droite */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none bg-center bg-cover bg-no-repeat"
            style={{
              left: "42%",
              right: "calc((min(1080px,90vw) - 100vw) / 2)",
              backgroundImage: `url('${data.image}')`,
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.85) 66%, #000 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, transparent 30%, rgba(0,0,0,0.85) 66%, #000 100%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-[520px]">
            <h2
              className="m-0 mb-[clamp(28px,4vw,44px)] font-bold"
              style={{
                fontSize: "clamp(26px,3.2vw,38px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
              }}
            >
              Ce que je vous propose
            </h2>

            <ul className="list-none m-0 p-0 flex flex-col">
              {page.propositions.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-[18px] items-start text-white/90"
                  style={{
                    padding: "clamp(16px,2.2vw,22px) 0",
                    borderBottom:
                      i < page.propositions.length - 1
                        ? "1px solid rgba(255,255,255,0.1)"
                        : "none",
                    fontSize: "clamp(17px,1.8vw,21px)",
                  }}
                >
                  <span
                    className="flex-none text-brand-pink font-bold text-[1.05em] mt-[0.05em]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Pourquoi un coach ── */}
        <section className="relative bg-white text-[#1a1a1a]">
          <div
            className="w-[min(1080px,90vw)] mx-auto"
            style={{ padding: "clamp(48px,7vw,96px) 0" }}
          >
            <h2
              className="m-0 mb-[clamp(28px,4vw,44px)] font-bold text-[#1a1a1a]"
              style={{
                fontSize: "clamp(26px,3.2vw,38px)",
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
              }}
            >
              Pourquoi choisir un coach ?
            </h2>

            <div
              className="grid gap-[clamp(16px,2vw,24px)]"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {page.whyCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-[#f6f6f6] border border-black/8 rounded-[20px]"
                  style={{ padding: "clamp(26px,3vw,34px)" }}
                >
                  <p
                    className="m-0 mb-3 text-[34px] leading-none"
                    aria-hidden="true"
                  >
                    {card.emoji}
                  </p>
                  <p
                    className="m-0 font-bold text-[#1a1a1a]"
                    style={{
                      fontSize: "clamp(19px,2vw,23px)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {card.title}
                  </p>
                  <p className="mt-3 mb-0 text-[15.5px] leading-[1.55] text-[#6b6b6b]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section
          className="relative w-[min(1080px,90vw)] mx-auto"
          style={{ padding: "clamp(48px,7vw,90px) 0 clamp(64px,9vw,120px)" }}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-pink text-brand-dark-card no-underline font-bold rounded-full transition-all duration-200 hover:bg-brand-pink-hover hover:-translate-y-0.5"
              style={{
                fontSize: "clamp(16px,1.6vw,18px)",
                padding: "16px 32px",
              }}
            >
              Ça m&apos;intéresse <span className="text-[1.15em]">›</span>
            </a>

            <a
              href="/#accompagnements"
              className="inline-flex items-center gap-2 text-white no-underline font-semibold rounded-full border border-white/28 transition-all duration-200 hover:bg-white/8 hover:border-white/50"
              style={{
                fontSize: "clamp(16px,1.6vw,18px)",
                padding: "16px 28px",
              }}
            >
              <span className="text-[1.15em]">←</span> Revenir aux activités
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
