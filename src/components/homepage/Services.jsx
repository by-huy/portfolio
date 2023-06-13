import ServiceUi from "../ui/ServiceUi";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web Design",
    "Wireframing",
    "UI/UX Design",
    "Branding",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Webflow",
    "GSAP",
    "TailwindCSS",
    "ReactJS",

  ];

  return (
    <section id="services" className="my-20" aria-label="services">
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
          <h2 className="w-fit text-center text-heading-2 font-medium uppercase text-secondary-600">
            Services
          </h2>
          <svg
            className="scale-75 sm:scale-125"
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
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things digital and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always fond of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
        
      </div>
    </section>
  );
}
