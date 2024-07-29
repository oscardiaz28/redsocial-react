import { Outlet } from "react-router"
import Header from "./Header"
import Sidebar from "./Sidebar"

const PrivateLayout = () => {
  return (
    <>
        {/* Layout */}
        <Header />

        <section className="layout__content mb-5">
            <Outlet />
        </section>

        {/* Sidebar */}
        <Sidebar />


    </>
  )
}

export default PrivateLayout
