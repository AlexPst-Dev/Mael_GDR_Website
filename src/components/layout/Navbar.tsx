"use client";

const navLinks = [
  { href: "#accompagnements", label: "Accompagnements" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#avis", label: "Avis" },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/8"
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="w-[min(1180px,92vw)] mx-auto h-[54px] flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-bold text-[clamp(15px,2vw,18px)] tracking-tight no-underline flex-none text-[#1d1d1f]"
        >
          Maël Gdr
        </a>

        <div className="flex items-center gap-[clamp(12px,2.2vw,30px)] whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline font-medium text-[clamp(12px,1.4vw,15px)] text-[#1d1d1f] transition-colors duration-200 hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center bg-brand-green text-white no-underline font-semibold text-[clamp(12px,1.4vw,15px)] px-[17px] py-2 rounded-full transition-colors duration-200 hover:bg-brand-green"
          >
            Réserver
          </a>
        </div>
      </div>
    </nav>
  );
}
