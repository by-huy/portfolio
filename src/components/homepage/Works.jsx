import ibgroup from "/src/assets/images/ib-group-desktop.webp"
import memento from "/src/assets/images/memento-desktop.webp"
import acc from "/src/assets/images/acc-square.webp"
import daddy from "/src/assets/images/godaddy-desktop.webp"
import sunnyside from "/src/assets/images/sunnyside-desktop.webp"

export default function Works() {
  return (
    <div className="mt-20 px-10 mx-auto">
      <div className="section-heading px-5">
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
              fill="#8C8C73"
            />
          </svg>
          <h2 className="w-fit text-center text-heading-1 font-medium uppercase text-secondary-600">
            Selected works
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
              fill="#8C8C73"
            />
          </svg>
        </div>
      </div>
      {/* Make this responsive and dynamically render this instead */}
      <div className="grid grid-cols-12 gap-y-2 gap-16 mt-10">
        <div className="col-span-12">
            <img src={ibgroup} alt="" />
            <div className="mt-4">
                <h4 className="uppercase text-works-title text-primary-200 font-medium">IB Group vietnam website</h4>
                <p className="text-primary-400 font-light text-body-1">Web Design / Frontend Development</p>
            </div>
        </div>
        <div className="col-span-7 pt-16">
            <img src={memento} alt="" />
            <div className="mt-4">
                <h4 className="uppercase text-works-title text-primary-200 font-medium">MEMENTO STUDIO LANDING PAGE</h4>
                <p className="text-primary-400 font-light text-body-1">Web Design / Frontend Development</p>
            </div>
        </div>
        <div className="col-span-5 pt-80">
            <img src={acc} alt="" />
            <div className="mt-4">
                <h4 className="uppercase text-works-title text-primary-200 font-medium">REAL BUSINESS ACCOUNTANTS PROJECT</h4>
                <p className="text-primary-400 font-light text-body-1">Web Design / Frontend Development</p>
            </div>
        </div>
        <div className="col-span-8 h-fit pt-20">
            <img src={daddy} alt="" />
            <div className="mt-4">
                <h4 className="uppercase text-works-title text-primary-200 font-medium">GODADDY LANDING PAGE CLONE</h4>
                <p className="text-primary-400 font-light text-body-1">Web Design / Frontend Development</p>
            </div>
        </div>
        <div className="col-span-4 h-fit">
            <img src={sunnyside} alt="" />
            <div className="mt-4">
                <h4 className="uppercase text-works-title text-primary-200 font-medium">SUNNYSIDE LANDING PAGE</h4>
                <p className="text-primary-400 font-light text-body-1">Web Design / Frontend Development</p>
            </div>
        </div>
      </div>
    </div>
  );
}
