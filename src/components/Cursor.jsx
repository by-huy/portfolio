// import { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";


// export default function Cursor() {
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });
//   const curs = useRef(null)
//   const svg = useRef(null)
  
//   // !CURSOR IS VERY GIMMICKY
//   useEffect(() => {
//     // TODO Learn useContext and useRef here
//   const images = document.querySelectorAll('.img')
    
//     console.log(svg)
//     const tl = gsap.timeline()

//     images.forEach((img) => {
//       img.addEventListener('mouseenter', function() {
//         tl.to(curs.current, {scale: 10, duration: .25}).to(svg.current, {opacity: 1, duration:.5}, 0)
//       })

//       img.addEventListener('mouseleave', function() {
//         tl.to(curs.current, {scale: 1}).to(svg.current, {opacity: 0}, 0)
//       })
//     })

//     document.addEventListener("mousemove", moveCursor);
//     function moveCursor(e) {
//       setCursor({ x: e.clientX, y: e.clientY });
//     }
//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   const { x, y } = cursor;

//   return (
//     <div
//       ref={curs}
//       className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-600 flex justify-center items-center"
//       style={{ left: `${x}px`, top: `${y}px` }}
//     >
//       <svg ref={svg} xmlns="http://www.w3.org/2000/svg" className="scale-50 opacity-0" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52"/></svg>
//     </div>
//   );
// }
