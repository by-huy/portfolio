import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../assets/images/heroimg.webp";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl
    .from(imgContainer.current, {scale: 1.3, duration:3.25, ease:"power3.inOut"})
    .from(img.current, { scale: 2, duration: 3.2, ease:"power4.inOut"}, '-=3.1')
  });

  return (
    <div className="relative flex h-screen select-none items-center justify-center">
      <div className="flex flex-col text-title font-semibold uppercase leading-[1.1em] text-accent-300">
        <h1 className="title translate-y-32">Hey, I&apos;m Huy</h1>
        <h1 className="title font-outline-4 text-transparent">Hey, I&apos;m Huy</h1>
        <h1 className="title">Hey, I&apos;m Huy</h1>
      </div>
      <div ref={imgContainer} className="-z-10 absolute mx-auto w-1/2 rounded-md overflow-hidden">
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
