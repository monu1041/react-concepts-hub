import { useState } from "react";

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(callback) {
    return (e) => {
      e.preventDefault();

      const validationErrors = validate(values);

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        callback(values);
      }
    };
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}