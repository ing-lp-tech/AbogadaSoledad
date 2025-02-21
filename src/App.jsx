import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-0 px-6">
        <WhatsAppButton />
        <HeroSection id="inicio" />
        <FeatureSection id="servicios" />
        <Workflow id="como-trabajamos" />
        <AboutMeSection id="sobre-mi" />
        <Footer id="contacto" />
      </div>
    </>
  );
};

export default App;
