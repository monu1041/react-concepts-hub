export function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password =
      "Password must be at least 6 characters";
  }

  return errors;
}