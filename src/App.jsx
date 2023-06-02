import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Cursor from "./components/Cursor";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  
  const sectionRefs = useRef([]) // Creating a sectionRefs array
  useEffect(() => {
    console.log(sectionRefs.current)
  }, [])

  // Scrub animation of section headings
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
      <Cursor/>
      <NavBar sectionRefs={sectionRefs.current}/> 
      <Hero />
      <main className="px-5 md:px-10">
        <Role forwardedRef={el => (sectionRefs.current[0] = el)}/> {/* creating  */}
        <About />
        <Services />
        <Works forwardedRef={el => (sectionRefs.current[1] = el)}/>
        <Contact />
      </main>
    </div>
  );
};

export default App;
