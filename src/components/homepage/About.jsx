import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export default function About() {
  const profile = useRef(null)
  const aboutSection = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)


  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      scrub: true,
      animation: gsap
        .timeline()
        .to(profile.current, { scale: 1, ease: "power4.out", duration: 2.5 })
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [aboutSection])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(profile.current, { scale: 1, ease: "power4.out", duration: 2.5 }),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [aboutSection])

  return (
    <section  aria-label="about me">
      <div className="section-heading select-none">
        <div className="heading flex translate-y-28 items-center justify-center space-x-3">
        <svg
            className="scale-90 sm:scale-125"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#8C8C73"
            />
          </svg>
          <h2 className="w-fit text-heading-2 font-medium uppercase text-secondary-600">
            about me
          </h2>
          <svg
            className="scale-90 sm:scale-125"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#8C8C73"
            />
          </svg>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col items-start gap-8 sm:flex-row lg:gap-10 ">
        <div className="top-28 sm:sticky overflow-hidden rounded-md">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center sm:aspect-auto scale-150"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div  ref={aboutSection} className="top-20 sm:sticky md:top-28 lg:top-32">
          <div className="w-full space-y-4">
            <h3 ref={heading} className="text-heading-3 font-semibold leading-tight translate-y-10 opacity-0">
              A brief intro, who am I?
            </h3>
            <p ref={body} className="text-body-1 translate-y-10 opacity-0">
              I am a self-taught creative frontend developer, web designer, and
              UI/UX designer based in Melbourne, Australia. I am passionate in
              catering my works for emerging start ups and small businesses that
              make an impact, inspire and connect with people 😎.
              <br></br>
              <br></br>
              When I am not developing or designing, I like to create videos
              that talk about frontend development, productivity and technology
              on{" "}
              <a
                className="underline hover:text-secondary-700 duration-300 ease-in-out"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                YouTube 📸
              </a>
              . I also enjoy spending time distracting myself by playing the
              guitar, reading some cool books or binge anime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
