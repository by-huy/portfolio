import { useEffect, useState } from "react";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      className="fixed left-1/2 top-1/2 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-600 mix-blend-difference"
      style={{ left: `${x}px`, top: `${y}px` }}
    ></div>
  );
}
