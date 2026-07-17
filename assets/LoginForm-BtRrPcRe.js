var e=`import { useForm } from "../hooks/useForm";\r
import { validateLogin } from "../utils/validation";\r
\r
function LoginForm() {\r
  const {\r
    values,\r
    errors,\r
    handleChange,\r
    handleSubmit,\r
  } = useForm(\r
    {\r
      email: "",\r
      password: "",\r
    },\r
    validateLogin\r
  );\r
\r
  const submit = () => {\r
    alert("Login Successful!");\r
  };\r
\r
  return (\r
    <form onSubmit={handleSubmit(submit)} noValidate>\r
      <div>\r
        <label htmlFor="email">Email</label>\r
\r
        <input\r
          id="email"\r
          name="email"\r
          type="email"\r
          value={values.email}\r
          onChange={handleChange}\r
        />\r
\r
        {errors.email && (\r
          <p className="error">{errors.email}</p>\r
        )}\r
      </div>\r
\r
      <div>\r
        <label htmlFor="password">\r
          Password\r
        </label>\r
\r
        <input\r
          id="password"\r
          name="password"\r
          type="password"\r
          value={values.password}\r
          onChange={handleChange}\r
        />\r
\r
        {errors.password && (\r
          <p className="error">\r
            {errors.password}\r
          </p>\r
        )}\r
      </div>\r
\r
      <button type="submit">\r
        Login\r
      </button>\r
    </form>\r
  );\r
}\r
\r
export default LoginForm;`;export{e as default};