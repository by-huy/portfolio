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

  gsap.registerPlugin(ScrollTrigger);

  const sectionHeadings = document.querySelectorAll(".section-heading");
  const headings = document.querySelectorAll(".heading")

  useEffect(() => {
    sectionHeadings.forEach((heading) => {
      ScrollTrigger.create({
        trigger: heading,
        start: "top 550px",
        end: "bottom 100px",
        markers: true,
        scrub: true,
        animation: gsap.to(headings, {
          opacity: 1,
          y: 0,
          ease: "power4.out",
          duration: 1.25,
        }),
        toggleActions: "none none none none",
      });
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  });

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
        <section id="services">
          <Services />
        </section>
      </main>
    </div>
  );
};

export default App;
