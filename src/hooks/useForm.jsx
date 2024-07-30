import { useState } from "react";

const useForm = (initialObj = {}) => {
  const [form, setForm] = useState(initialObj);

  const changed = ({target}) => {
    const {name, value} = target;
    setForm({
        ...form, //spread operator
        [name]: value
    })
  }

  return {
    form,
    changed
  };

};

export default useForm;
