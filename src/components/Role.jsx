import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Role() {
  const role = useRef(null);

  useEffect(() => {
    gsap.to(role.current, {
      scrollTrigger: ".section", // start the animation when ".section" enters the viewport (once)
      backgroundColor: "red",
    });
  });

  return <div ref={role} className="h-screen bg-blue-50"></div>;
}
