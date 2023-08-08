export default function Projects({ name, img, alt, type, link, year, tools }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        <div className="flex space-x-2 mb-3">
            <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">{year}</p>
            <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">{tools}</p>
        </div>
        <div className="2xl:space-y-3">

        <h3 className="text-works-title 2xl:text-5xl font-medium uppercase text-primary-200">
          {name}
        </h3>
        <p className="text-body-2 2xl:text-4xl font-light text-primary-400">{type}</p>
        </div>
      </div>
    </div>
  );
}
