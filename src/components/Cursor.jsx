import { useEffect, useState } from 'react';

export default function Cursor() {
  const [cursor, setCursor] = useState({x: 0, y: 0})

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor)

    function moveCursor(e) {
        setCursor({x: e.clientX, y: e.clientY})
    }

    return () => {
        document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  const {x , y} = cursor
  
  return (
    <div
      className="top-1/2 left-1/2 rounded-full fixed w-3 h-3 bg-secondary-600 z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      style={{left: `${x}px`, top:`${y}px`}}
    ></div>
  );
}
