import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="navbar__container-lists">

        <ul className="container-lists__menu-list">
            <li className="menu-list__item">
                <NavLink to="/login" className="menu-list__link" >
                    <i className="fa-solid fa-person"></i>
                    <span className="menu-list__title">Iniciar Sesión</span>
                </NavLink>
            </li>

            <li className="menu-list__item">
                <NavLink to="/register" className="menu-list__link">
                    <i className="fas fa-users"></i>
                    <span className="menu-list__title">Registro</span>
                </NavLink>
            </li>
        </ul>

    </nav>
  )
}

export default Nav
