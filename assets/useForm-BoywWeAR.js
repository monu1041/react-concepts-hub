var e=`import { useState } from "react";\r
\r
export function useForm(initialValues, validate) {\r
  const [values, setValues] = useState(initialValues);\r
  const [errors, setErrors] = useState({});\r
\r
  function handleChange(e) {\r
    const { name, value } = e.target;\r
\r
    setValues((prev) => ({\r
      ...prev,\r
      [name]: value,\r
    }));\r
  }\r
\r
  function handleSubmit(callback) {\r
    return (e) => {\r
      e.preventDefault();\r
\r
      const validationErrors = validate(values);\r
\r
      setErrors(validationErrors);\r
\r
      if (Object.keys(validationErrors).length === 0) {\r
        callback(values);\r
      }\r
    };\r
  }\r
\r
  return {\r
    values,\r
    errors,\r
    handleChange,\r
    handleSubmit,\r
  };\r
}`;export{e as default};