import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Role() {

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({});

  return (
    <section id="about" className="flex h-screen flex-col items-center justify-center overflow-hidden nav-change">
      <div className="flex w-full items-center justify-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.08em]">
        I create elevating digital experiences that connect and inspire with people through development and design.
        </h1>
      </div>
    </section>
  );
}
