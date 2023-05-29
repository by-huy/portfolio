import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Role from "./components/Role";
import About from "./components/About";

// Initialize the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top of the page on initial load

  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0); // Scroll to the top of the page before it unloads
  //   };

  //   window.onbeforeunload = handleBeforeUnload;

  //   return () => {
  //     window.onbeforeunload = null; 
  //   };
  // }, []);

  return (
    <div className="bg-secondary-100">
      <NavBar />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="nav-change">
          <Role />
        </section>
        <section>
          <About />
        </section>
      </main>
    </div>
  );
};

export default App;
