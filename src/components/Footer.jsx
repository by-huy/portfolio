export default function Footer() {
  return (
    <div className="mt-14 flex items-end justify-between px-5 py-4 sm:flex">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1" >
          <span>&copy;</span>
          <span>2023</span>
          <span className="font-extrabold uppercase">Huy Nguyen</span>
        </div>
        <div>
          <span>Site designed and coded with ❤️‍🔥</span>
          <span></span>
        </div>
      </div>
      <button className="col-span-2 flex items-center space-x-2 w-fit">
        <span className="font-extrabold uppercase">BACK TO TOP</span>
        <span>
          <svg
            className="-rotate-90"
            width="20"
            height="20"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_238_1313)">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.37114e-06 2.76541e-06L7.54022e-06 50L100 100L2.18557e-06 150L0 200L100 150L100 200L200 150V100V50L100 0V50L4.37114e-06 2.76541e-06ZM100 50L100 100L100 150L200 100L100 50Z"
                fill="url(#paint0_linear_238_1313)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_238_1313"
                x1="14"
                y1="26"
                x2="179"
                y2="179.5"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#D1D1C7" />{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
        </span>
      </button>
    </div>
  );
}
