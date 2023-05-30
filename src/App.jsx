import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Role from "./components/Role";
import About from "./components/About";
import Services from "./components/Services";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    
    window.onload = scrollTo(0,0)
  }, [])

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


  },);

  return (
    <div className="bg-secondary-100">
      <NavBar />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section id="about" className="nav-change">
          <Role />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Services />
        </section>
      </main>
    </div>
  );
};

export default App;
