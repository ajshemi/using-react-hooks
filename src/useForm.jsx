import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [
    values,
    handleOnChange,

    // (e) => {
    //   let { name, value } = e.target;
    //   setValues({ ...values, [name]: value });
    // },
  ];
};

export default useForm;
