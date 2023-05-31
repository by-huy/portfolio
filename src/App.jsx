import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Role from "./components/Role";
import About from "./components/About";
import Services from "./components/Services";
import { useEffect } from "react";



const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");

    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: individualHeading,
          start: "top 550px",
          end: "bottom 100px",
          scrub: true,
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 2,
          }),
          toggleActions: "none none none none",
        });
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
