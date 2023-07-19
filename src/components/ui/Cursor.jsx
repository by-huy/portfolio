import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const curs = useRef(null);
  const svg = useRef(null);

  useEffect(() => {
    // TODO Learn useContext and useRef here
    const images = document.querySelectorAll(".img");

    const tl = gsap.timeline({ paused: true });

    tl.to(curs.current, { height: "112px", width:"112px", ease: "expo.inout" }).to(
      svg.current,
      { opacity: 1, width: "96px", height:"96px" },
      0
    );

    images.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        tl.play();
      });

      img.addEventListener("mouseleave", function () {
        tl.reverse();
        tl.eventCallback("onReverseComplete", function () {
          gsap.set(svg.current, { opacity: 0 }); // Hide the SVG element
          gsap.set(curs.current, { height: "12px", width:"12px" }); // Hide the SVG element
        });
      });
    });

    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={curs}
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <svg
        ref={svg}
        xmlns="http://www.w3.org/2000/svg"
        className="scale-50 opacity-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 19L19 6m0 0v12.48M19 6H6.52"
        />
      </svg>
    </div>
  );
}
