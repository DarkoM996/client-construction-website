import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroAboutSection from "./components/HeroAboutSection";
import HoverImageLinks from "./components/HoverImageLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <HoverImageLinks />
      <HeroAboutSection />
      <Footer />
    </>
  );
}
