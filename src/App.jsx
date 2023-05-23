import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import NavBar from "./components/NavBar"

function App() {
  const title = useRef(null)

  useEffect(() => {
    gsap.to(title.current, {opacity: 1, y: -20, duration: .8})
  }, [])

  return (
    <div className="">
      <NavBar />
      
    </div>
  )
}

export default App
