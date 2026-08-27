import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Stats from "./components/Stats";
import Narrative from "./components/Narrative";
import Platform from "./components/Platform";
import Results from "./components/Results";
import Compatible from "./components/Compatible";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import DemoCta from "./components/DemoCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-paper text-ink min-h-screen overflow-x-hidden antialiased">
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Stats />
        <Narrative />
        <Platform />
        <Results />
        <Compatible />
        <Pricing />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
    </div>
  );
}
