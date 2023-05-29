import profileImg from "/src/assets/images/profile.webp";

export default function About() {
  return (
    // TODO: Make this responsive for mobile
    <div className=" select-none  px-10">
      <div className="flex items-center justify-center space-x-4">
        <svg
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
        <h2 className="text-heading-1 font-medium uppercase text-secondary-600">
          my profile
        </h2>
        <svg
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
      <div className="flex w-full gap-10 mt-12 items-start">
        <div>
          <img
            className="rounded-md object-cover"
            height="20px"
            src={profileImg}
            alt=""
          />
        </div>
        <div className="sticky top-32">
          <div className="w-full space-y-4">
            <h3 className="text-heading-3 font-medium leading-tight">
              A brief intro... who am I?
            </h3>
            <p className="text-body-1">
              I am a self-taught frontend developer and web designer. I am
              passionate in catering my works for emerging start ups and small
              businesses.
              <br></br>
              <br></br>
              When I am not developing or designing, I like to create videos
              that talk about frontend development, productivity and technology
              on YouTube. I also enjoy spending time distracting myself by
              playing the guitar, reading some cool books or binge anime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
