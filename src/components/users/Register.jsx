import { useState } from "react";
import useForm from "../../hooks/useForm";
import Constants from "../../helpers/Constants";
import { Bounce, toast } from "react-toastify";
import { showMessage } from "../../helpers/Utils";


const Register = () => {
  
  const { form, changed} = useForm();
  // const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit =  async (event) => {
    event.preventDefault();

    let newForm = form;

    setIsSubmitting(true);

    setTimeout( async () => {

      try{
        const url = Constants.BASE_URL + Constants.ENDPOINTS.REGISTER_USER;
        const options = {
          method: "POST",
          body: JSON.stringify(newForm),
          headers: {
            "Content-Type": "application/json"
          }
        }
        const response = await fetch(url, options);
        const data = await response.json();

        if(data.status == "success"){
          toast.success("Usuario creado correctamente!", {
            position: 'top-right',
            closeOnClick: true,
            theme: 'light',
            autoClose: 2500,
            pauseOnHover: false,
            transition: Bounce
          })
          document.querySelector('.errors').innerHTML = "";
          event.target.reset();

        }else{
          showMessage( { container: event.target, data: data.message } );
        }

      }catch( error ){
        showMessage( { container: event.target, msg: "Error, datos inválidos" } )

      }finally{
        setIsSubmitting(false)
      }
      

    }, 3000);

  }

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title ">Registro</h1>
      </header>

      <div className="content__posts" >

        <div className="errors">
        </div>

        <form action="" method="POSt" className="register-form" onSubmit={ handleSubmit } >

          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onBlur={ changed } onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input type="text" name="surname" onBlur={ changed } onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onBlur={ changed } onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" onBlur={ changed } onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onBlur={ changed } onChange={changed} />
          </div>

          <button type="submit" className={ isSubmitting ? "btn btn-sucess btn-submit-disabled" : "btn btn-sucess" }>
            {
              isSubmitting ? (
                <>
                  <span className="loader"></span>
                  Registrate
                </>
              ): 
                <>
                  Regístrate
                </>
            }
          </button>

        </form>

      </div>

    </>
  );
};

export default Register;
