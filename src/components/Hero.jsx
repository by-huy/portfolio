import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Hero() {
  const img = useRef(null);
  const scrollLine = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl;
  });

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      height: 0,
    }).to(scrollLine.current, {
      height: 45,
      duration: 2,
      opacity: 0,
      ease: "expo.out",
    });
  });

  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col text-title font-semibold uppercase leading-[1.1em] text-accent-300">
        <h1>Hey, I&apos;m Huy</h1>
        <h1 className="font-outline-4 text-transparent">Hey, I&apos;m Huy</h1>
        <h1>Hey, I&apos;m Huy</h1>
      </div>
      <div className="absolute mx-auto w-1/2 rounded-md">
        <img
          ref={img}
          className="  rounded-md opacity-50 "
          src="src/assets/images/heroimg.webp"
          alt=""
        />
      </div>

      <div className="overflow absolute bottom-16 right-2 flex flex-col space-y-3">
        <span className="flex rotate-90 items-center text-body-3">scroll</span>
        <div className="inset-0 mx-auto h-full overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute w-[0.08em] bg-accent-300"
          ></span>
        </div>
      </div>
    </div>
  );
}
