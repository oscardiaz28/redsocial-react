import { Outlet } from "react-router"
import Header from "./Header"

const PublicLayout = () => {
  return (
    <>
        {/* Layout */}
        <Header />

        <section className="layout__content">
            <Outlet />
        </section>

        <aside className="layout__aside">

        </aside>


    </>
  )
}

export default PublicLayout
