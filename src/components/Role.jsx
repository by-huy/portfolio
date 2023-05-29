import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Role() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({});

  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden border border-blue-500">
      <div className="flex w-full items-center justify-center space-x-20 px-10">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-tight">
          I am a self-taught frontend developer web designer and ui/ux designer.
        </h1>
      </div>
    </div>
  );
}
