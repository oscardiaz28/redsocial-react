import { Navigate, Outlet } from "react-router"
import Header from "./Header"
import useAuth from "../../../hooks/useAuth"

const PublicLayout = () => {

  const {auth} = useAuth();

  return (
    <>
        {/* Layout */}
        <Header />

        <section className="layout__content">
            {
              !auth.id ? 
              <Outlet />
              :
              <Navigate to="/social" />
            }

        </section>


    </>
  )
}

export default PublicLayout
