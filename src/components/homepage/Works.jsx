import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";

export default function Works({ forwardedRef }) {
  

  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change mx-auto mt-20 overflow-hidden"
    >
      <div className="section-heading ">
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
              fill="#D1D1C7"
            />
          </svg>
          <h2 className="w-fit text-center text-heading-2 font-medium uppercase text-secondary-400">
            recent work
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
              fill="#D1D1C7"
            />
          </svg>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <a
            href="https://musical-stroopwafel-1c2327.netlify.app/landing.html"
            className="img group inline-block overflow-hidden hover:rounded-3xl duration-200 ease-linear"
          >
            <img
              className=" h-auto w-full duration-700 ease-in-out group-hover:scale-105"
              src={ibgroup}
              alt="ibgroup website mockup"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              IB Group vietnam website
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <a
            href="https://mementostudio.netlify.app/"
            className="img group inline-block overflow-hidden hover:rounded-3xl duration-200 ease-linear"
          >
            <img
              className=" h-auto w-full duration-700 ease-in-out group-hover:scale-105"
              src={memento}
              alt="memento website mockup"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              MEMENTO STUDIO LANDING PAGE
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <a href="https://realbusinessaccountants.netlify.app" className="img group inline-block overflow-hidden hover:rounded-3xl duration-200 ease-linear">
            <img
              className=" h-auto w-full duration-700 ease-in-out group-hover:scale-105"
              src={acc}
              alt="real business accountant project mockup"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              REAL BUSINESS ACCOUNTANTS
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <a href="https://godaddyuiclone.netlify.app" className="img group inline-block overflow-hidden hover:rounded-3xl duration-200 ease-linear">
            <img
              className=" h-auto w-full duration-700 ease-in-out group-hover:scale-105"
              src={daddy}
              alt="godaddy clone page mockup"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-works-title font-medium uppercase text-primary-200">
              GODADDY LANDING PAGE CLONE
            </h3>
            <p className="text-body-2 font-light text-primary-400">
              Web Design / Frontend Development
            </p>
          </div>
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <a href="https://sunnysidechallenge.netlify.app" className="img group inline-block overflow-hidden hover:rounded-3xl duration-200 ease-linear">
            <img
              className=" h-auto w-full duration-700 ease-in-out group-hover:scale-105"
              src={sunnyside}
              alt="sunnyside project mockup"
            />
          </a>
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
