import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { StarsCanvas } from "./components/canvas";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("preloader-lock", !showContent);
    document.body.classList.toggle("preloader-lock", !showContent);

    return () => {
      document.documentElement.classList.remove("preloader-lock");
      document.body.classList.remove("preloader-lock");
    };
  }, [showContent]);

  return (
    <>
      <Preloader isLoading={isLoading} onComplete={() => setShowContent(true)} />
      {showContent && (
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className="main-content ">
              <Header />
              <HeroSection />
              <About />
              <TechStack />
              <Projects />
              <Experience />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
