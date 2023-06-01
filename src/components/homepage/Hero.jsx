import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "/src/assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: "power4.inOut" },
        "-=3.1"
      )
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5")
      .from(scroll.current, {opacity: 0, duration: 1, ease:"out"}, "-=2")
  }, []);

  return (
    <section className="hero relative flex h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col overflow-hidden w-full items-center text-title font-bold uppercase text-accent-300">
        <div className="title">
          {/* Learn more about useRef */}
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-36">
            Hey, I&apos;m Huy
          </h1>
        </div>
        <div className=" title">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="title font-outline-3 md:font-outline-4 translate-y-36 text-transparent"
          >
            Hey, I&apos;m Huy
          </h1>
        </div>
        <div className=" title">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-36">
            Hey, I&apos;m Huy
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className=" scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[6/7] rounded-md opacity-50 lg:aspect-[1/1]"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div ref={scroll} className="absolute bottom-12 -right-6 flex flex-col items-center justify-center space-y-8">
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
}
