import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: "power3.inOut",
    }).from(
      img.current,
      { scale: 2, duration: 3.2, ease: "power4.inOut" },
      "-=3.1"
    ).to(titles.current, {y: 0, duration: 2, ease: "power4.inOut"})

  }, []);

  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col text-title font-semibold uppercase leading-[1.1em] text-accent-300">
        <div className="title">
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-36">
            Hey, I&apos;m Huy
          </h1>
        </div>
        <div className="title">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="title font-outline-4 translate-y-36 text-transparent"
          >
            Hey, I&apos;m Huy
          </h1>
        </div>
        <div className="title">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-36">
            Hey, I&apos;m Huy
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute mx-auto w-1/2 overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className="scale-1 rounded-md opacity-50"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
    </div>
  );
}
