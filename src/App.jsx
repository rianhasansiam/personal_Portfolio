import { Outlet } from "react-router-dom"
import Footer from "./StaticSite/Footer"
import Navbar from "./StaticSite/Navbar"



function App() {


  return (
    <>
    <Navbar/>

    <Outlet/>


    <Footer/>
     
    </>
  )
}

export default App
