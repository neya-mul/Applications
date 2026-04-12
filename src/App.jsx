import { Outlet, useLocation } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useEffect } from "react"

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default App
