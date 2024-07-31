import { Navigate, Outlet } from "react-router"
import Header from "./Header"
import Sidebar from "./Sidebar"
import useAuth from "../../../hooks/useAuth"

const PrivateLayout = () => {

  const {auth, loading} = useAuth();

  if(loading){
    return <h1>Cargando...</h1>

  }else{

    return (
      <>
          {/* Layout */}
          <Header />
  
          <section className="layout__content mb-5">
              {
                auth.id ? 
                <Outlet />
                :
                <Navigate to="/login"  />
              }
          </section>
  
          {/* Sidebar */}
          <Sidebar />
  
  
      </>
    )

  }

  
}

export default PrivateLayout
