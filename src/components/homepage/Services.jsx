export default function Services() {
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
        {/* EXTRACT THIS INTO A COMPONENT */}
        <div className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-heading-3 font-semibold leading-tight">
                my expertises.
              </h3>
              <p className="max-w-md text-body-1">
                I focus on all things digital and web related. With each of my
                services, my goal is to deliver a functional and elevating
                digital experience for everyone.
              </p>
            </div>
            <div className="h-1 w-full opacity-50 bg-accent-100 md:hidden"></div>
          </div>

          <div className="leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem] select-none">
            <p className="font-general text-special font-extrabold">
              Web Development
            </p>
            <p className="font-general text-special font-extrabold">
              Web Design
            </p>
            <p className="font-general text-special font-extrabold">
              Wireframing
            </p>
            <p className="font-general text-special font-extrabold">
              UI/UX Design
            </p>
            <p className="font-general text-special font-extrabold">Branding</p>
          </div>
        </div>
        <div className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-heading-3 font-semibold leading-tight">
                my digital tool box.
              </h3>
              <p className="max-w-md text-body-1">
                These are my go to tech stack to make any projects happen. I am
                always fond of learning more about my current stack and new
                technologies that could expand my horizons.
              </p>
            </div>
            <div className="h-1 w-full opacity-50 bg-accent-100 md:hidden"></div>
          </div>
          <div className="leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem] select-none">
            <p className="font-general text-special font-extrabold">
              JavaScript
            </p>
            <p className="font-general text-special font-extrabold">HTML</p>
            <p className="font-general text-special font-extrabold">CSS</p>
            <p className="font-general text-special font-extrabold">Figma</p>
            <p className="font-general text-special font-extrabold">GSAP</p>
            <p className="font-general text-special font-extrabold">
              TailwindCSS
            </p>
            <p className="font-general text-special font-extrabold">ReactJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
