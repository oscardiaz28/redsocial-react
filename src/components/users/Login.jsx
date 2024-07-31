import { useState } from "react"
import useForm from "../../hooks/useForm";
import { showMessage } from "../../helpers/Utils";
import Constants from "../../helpers/Constants";
import { Navigate, useNavigate } from "react-router";

const Login = () => {

  const {form, changed} = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true)

    setTimeout( async () => {

      try{
        const url = Constants.BASE_URL+Constants.ENDPOINTS.LOGIN_USER;
        const options = {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json"
          }
        }
        const response = await fetch(url, options);
        const data = await response.json();
  
        if(data.status == "success"){

          document.querySelector('.errors').innerHTML = "";
          event.target.reset();

          const { message: user, token} = data;

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user))
          // event.target.reset();

          // navigate("/social" , {replace: true})
          window.location.reload();

        }else{
          showMessage({container: event.target, msg: data.message })
        }
  
      }catch( error ){
        showMessage({container: event.target, msg: "Error, datos invalidos" })
      }finally{
        setIsSubmitting(false);
      }
      
      
    }, 3000);
  
  }

  return (
    <>
        <header className="content__header content__header--public">
        <h1 className="content__title ">Iniciar Sesión</h1>
      </header>

      <div className="content__posts" >

        <div className="errors">
        </div>

        <form action="" method="POSt" className="login-form" onSubmit={ handleSubmit }  >

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" onChange={ changed } />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
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
