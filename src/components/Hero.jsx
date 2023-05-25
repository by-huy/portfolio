import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl
    .from(imgContainer.current, {scale: 1.4, duration:2.25, ease:"power4.out"})
    .from(img.current, { scale: 2, duration: 1.25}, '-=1.95')
    .to(img.current, { scale: 1, ease:"power4.out" });
  });

  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col text-title font-semibold uppercase leading-[1.1em] text-accent-300">
        <h1>Hey, I&apos;m Huy</h1>
        <h1 className="font-outline-4 text-transparent">Hey, I&apos;m Huy</h1>
        <h1>Hey, I&apos;m Huy</h1>
      </div>
      <div ref={imgContainer} className="absolute mx-auto w-1/2 rounded-md overflow-hidden">
        <img
          ref={img}
          className="rounded-md opacity-50 scale-1"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
    </div>
  );
}
