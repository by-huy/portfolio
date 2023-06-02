import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";

export default function Works({forwardedRef}) {
  return (
    <section ref={forwardedRef} id="works" className="nav-change mx-auto mt-20 overflow-hidden">
      <div className="section-heading ">
        <div className="heading flex translate-y-28 items-center justify-center space-x-3">
          <svg
            className="scale-75 sm:scale-100"
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#D1D1C7"
            />
          </svg>
          <h2 className="w-fit text-center text-heading-2 font-medium uppercase text-secondary-400">
            recent work
          </h2>
          <svg
            className="scale-75 sm:scale-100"
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#D1D1C7"
            />
          </svg>
        </div>
      </div>
      {/* Make this responsive and dynamically render this instead */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-16 gap-y-10">
          <div className="col-span-1 md:col-span-12">
            <img className="h-auto w-full" src={ibgroup} alt="ibgroup website mockup" />
            <div className="mt-4">
              <h3 className="text-works-title font-medium uppercase text-primary-200">
                IB Group vietnam website
              </h3>
              <p className="text-body-2 font-light text-primary-400">
                Web Design / Frontend Development
              </p>
            </div>
          </div>
        <div className="col-span-1 md:col-span-7 pt-0 md:pt-16">
          <img className="h-auto w-full" src={memento} alt="memento website mockup" />
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              MEMENTO STUDIO LANDING PAGE
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 pt-0 md:pt-80">
          <img className="h-auto w-full" src={acc} alt="real business accountant project mockup" />
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              REAL BUSINESS ACCOUNTANTS
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-8 h-fit pt-0 md:pt-20">
          <img className="h-auto w-full" src={daddy} alt="godaddy clone page mockup" />
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              GODADDY LANDING PAGE CLONE
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 h-fit">
          <img className="h-auto w-full" src={sunnyside} alt="sunnyside project mockup" />
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              SUNNYSIDE LANDING PAGE
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
