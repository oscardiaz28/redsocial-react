/* eslint-disable react/prop-types */

const Input = ( {type, name, placeholder = "", validations = {} } ) => {

  // <Input name="email" type="email" validations={ {require: true, email: true} }  />

  return (
        <input type={type} name={name} placeholder={placeholder} />
    )

};

export default Input;
