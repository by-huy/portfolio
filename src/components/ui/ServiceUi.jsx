export default function ServiceUi({ title, description, items }) {
  return (
    <div className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-heading-3 font-semibold leading-tight">
            {title}
          </h3>
          <p className="max-w-md text-body-1">{description}</p>
        </div>
        <div className="h-1 w-full bg-accent-100 opacity-50 md:hidden"></div>
      </div>

      <div className="select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]">
        {items.map((item, index) => {
          return (
            <p key={index} className="font-general text-special font-extrabold">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
