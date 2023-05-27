import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null)

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
      .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5");
  }, []);

  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      {/* Make leading also fluid along with the fluid typography */}
      <div className="z-10 flex h-fit flex-col px-3 text-title  font-semibold uppercase text-accent-300 overflow-hidden">
        <div className="title h-fit min-w-full ">
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
          className="scale-1 aspect-[5/6] lg:aspect-auto rounded-md opacity-50"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div className="absolute bottom-16 right-2 flex flex-col space-y-3 overflow">
        <span className="flex rotate-90 items-center text-body-3">scroll</span>
        <div className="relative overflow-hidden h-full">
          <span
            ref={scrollLine}
            className="absolute w-4 h-1 bg-accent-300"
          ></span>
        </div>
      </div>
    </div>
  );
}
