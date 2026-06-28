export default function About() {
  return (
    <section
      id="profil"
      className="bg-white"
      style={{ padding: "clamp(40px,5vh,64px) 0" }}
    >
      <div className="w-[min(1120px,90vw)] mx-auto flex flex-wrap items-center gap-[clamp(40px,5vw,80px)]">
        {/* Photo */}
        <div
          data-reveal=""
          className="flex-[1_1_380px] relative rounded-[26px] overflow-hidden bg-neutral-bg"
          style={{ height: "clamp(300px,38vh,440px)" }}
        >
          {/* Remplacer par <Image> Next.js une fois les vraies photos disponibles */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/mael-profil.jpg')" }}
            role="img"
            aria-label="Photo de Maël Gdr, coach sportif"
          />
        </div>

        {/* Texte */}
        <div
          data-reveal=""
          data-reveal-delay="120"
          className="flex-[1_1_420px]"
        >
          <p className="m-0 mb-[18px] font-semibold text-[clamp(13px,1.4vw,16px)] tracking-[0.02em] text-brand-green">
            À propos
          </p>

          <h2
            className="m-0 font-bold"
            style={{
              fontSize: "clamp(28px,3.8vw,46px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            Maël, 24 ans, coach de terrain près de chez vous
          </h2>

          <p
            className="mt-[clamp(12px,1.6vw,18px)] mb-0 text-neutral-text"
            style={{
              fontSize: "clamp(15px,1.2vw,17px)",
              lineHeight: 1.5,
              textWrap: "pretty",
            }}
          >
            Diplômé STAPS spécialité Activité Physique Adaptée et certifié
            Personal Trainer, j&apos;ai fait du mouvement bien plus qu&apos;un
            métier : une manière d&apos;accompagner les gens, vraiment. Je crois
            aux séances qui ont du sens, qui s&apos;adaptent à votre vie et à
            votre rythme — pas l&apos;inverse. Que vous vouliez perdre du poids
            durablement, courir vos premiers kilomètres en trail, ou rester en
            forme et entouré après la retraite : on construit un parcours qui
            vous ressemble, à deux pas de Rennes.
          </p>

          <div className="flex flex-wrap gap-[14px] mt-[clamp(18px,2.4vw,26px)]">
            <div className="flex-[1_1_220px] bg-neutral-bg rounded-2xl p-[20px_22px]">
              <p className="m-0 mb-2 text-[12px] tracking-[0.04em] uppercase font-semibold text-brand-green">
                Diplôme universitaire
              </p>
              <p className="m-0 text-[clamp(15px,1.5vw,17px)] font-semibold leading-[1.35]">
                STAPS — EAPA
                <br />
                <span className="font-medium text-neutral-muted">
                  Activité Physique Adaptée
                </span>
              </p>
            </div>

            <div className="flex-[1_1_220px] bg-neutral-bg rounded-2xl p-[20px_22px]">
              <p className="m-0 mb-2 text-[12px] tracking-[0.04em] uppercase font-semibold text-brand-green">
                Certification
              </p>
              <p className="m-0 text-[clamp(15px,1.5vw,17px)] font-semibold leading-[1.35]">
                CQP Personal Trainer
                <br />
                <span className="font-medium text-neutral-muted">
                  Coaching individuel certifié
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
