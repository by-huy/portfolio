import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";

const App = () => {
 
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  

  return (
    <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />{" "}
      {/* passing sectionRefs props to give access to Navbar, Navbar can then access the props which have access to the array of sectionRef and loop over it */}
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
        {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
