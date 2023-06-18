import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef, useEffect} from "react"


export default function ServiceUi({ title, description, items }) {

  const serviceUi = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)
  const services = useRef(null)

      
  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start:"-20px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25}, 0.5),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [serviceUi])


  return (
    <div ref={serviceUi} className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 ref={heading} className="text-heading-3 font-semibold leading-tight  translate-y-10 opacity-0">
            {title}
          </h3>
          <p ref={body} className="max-w-md text-body-1  translate-y-10 opacity-0">{description}</p>
        </div>
        <div className="h-1 w-full bg-accent-100 opacity-50 md:hidden"></div>
      </div>

      <div ref={services}  className=" select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10 opacity-0">
        {items.map((item, index) => {
          return (
            <p key={index} className="font-general text-special font-extrabold ">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
