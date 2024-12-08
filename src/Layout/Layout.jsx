import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import TopBar from "../Components/Top_Bar/Top_Bar"

const Layout = () => {
  return (
    <>
        <TopBar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout