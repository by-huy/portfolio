import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 overflow-hidden">
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
              fill="#8C8C73"
            />
          </svg>
          <h2 className="w-fit text-center text-heading-2 font-medium uppercase text-secondary-600">
            Contact me
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
      <div className="mt-10 grid grid-cols-6 gap-20 px-12">
        <div className="col-span-4">
          <h3 className="text-heading-3 font-semibold leading-tight max-w-lg">
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <form
            method="POST"
            name="contact"
            data-netlify="true"
            autoComplete="off"
            className="mt-10 font-grotesk"
          >
            <input
              name="contact"
              type="hidden"
            />
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="text-body-3 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-secondary-600">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="text-body-3 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-secondary-600">
                  Your email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="text-body-3 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-secondary-600">
                  Your message
                </label>
              </div>
            </div>
            <button type="submit" className="button mt-10">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-span-2 flex flex-col space-y-12 text-accent-300">
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">Contact Details</h4>
            <div className="space-y-2 text-body-2 flex flex-col">
              <a href="mailto:huyng211203@gmail.com">huyng211203@gmail.com</a>
              <a href="tel:+61 435 107 203">+61 435 107 203</a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">My Digital Spaces</h4>
            <div className="space-y-2 text-body-2">
              <a href="" className="flex items-center space-x-2">
                <Icon icon="simple-icons:bento" color="#666" />
                <span>Bento</span>
              </a>
              <a href="" className="flex items-center space-x-2">
                <Icon icon="mdi:github" color="#666" />
                <span>Github</span>
              </a>
              <a href="" className="items-cente flex space-x-2">
                <Icon icon="mdi:linkedin" color="#666" />
                <span>LinkedIn</span>
              </a>
              <a href="" className="flex items-center space-x-2">
                <Icon icon="mdi:youtube" color="#666" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">Location</h4>
            <div className="space-y-2 text-body-2">
              <p>Melbourne, Australia. 2:00pm GST10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
