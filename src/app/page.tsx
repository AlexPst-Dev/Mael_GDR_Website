import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Accompagnements from "@/components/sections/Accompagnements";
import Tarifs from "@/components/sections/Tarifs";
import Avis from "@/components/sections/Avis";
import Contact from "@/components/sections/Contact";
import ScrollRevealInit from "@/components/ui/ScrollRevealInit";

export default function Home() {
  return (
    <>
      {/* Initialise les animations au scroll sans passer toute la page en Client Component */}
      <ScrollRevealInit />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Accompagnements />
        <Tarifs />
        <Avis />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
