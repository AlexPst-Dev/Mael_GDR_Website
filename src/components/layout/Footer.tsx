export default function Footer() {
  return (
    <footer className="bg-neutral-bg border-t border-black/6 py-[clamp(40px,6vh,68px)]">
      <div className="w-[min(1120px,90vw)] mx-auto flex flex-wrap gap-5 justify-between items-center">
        <div>
          <p className="m-0 text-[15px] font-semibold">
            © Maël Gdr — Coach sportif
          </p>
          <p className="mt-[5px] mb-0 text-[13px] text-neutral-subtle">
            Conçu en Bretagne · Rennes Ouest
          </p>
        </div>

        <div className="flex gap-[22px]">
          <a
            href="#"
            className="no-underline text-[14px] font-medium text-[#1d1d1f] transition-colors duration-200 hover:text-brand-green"
            aria-label="Instagram de Maël Gdr"
          >
            Instagram
          </a>
          <a
            href="#"
            className="no-underline text-[14px] font-medium text-[#1d1d1f] transition-colors duration-200 hover:text-brand-green"
            aria-label="Facebook de Maël Gdr"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
