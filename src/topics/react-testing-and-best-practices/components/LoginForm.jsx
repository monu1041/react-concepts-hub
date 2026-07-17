import { useForm } from "../hooks/useForm";
import { validateLogin } from "../utils/validation";

function LoginForm() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  const submit = () => {
    alert("Login Successful!");
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <div>
        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />

        {errors.password && (
          <p className="error">
            {errors.password}
          </p>
        )}
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;