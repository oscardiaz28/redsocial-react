import { useState } from "react"

const Login = () => {

  const [isSubmitting] = useState(false);

  return (
    <>
        <header className="content__header content__header--public">
        <h1 className="content__title ">Iniciar Sesión</h1>
      </header>

      <div className="content__posts" >

        <div className="errors">
        </div>

        <form action="" method="POSt" className="login-form"  >

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
          </div>

          <button type="submit" className={ isSubmitting ? "btn btn-sucess btn-submit-disabled" : "btn btn-sucess" }>
            {
              isSubmitting ? (
                <>
                  <span className="loader"></span>
                  Inicia Sesión
                </>
              ): 
                <>
                  Inicia Sesión
                </>
            }
          </button>

        </form>

      </div>
    </>
  )
}

export default Login
