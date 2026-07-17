var e=`export function validateLogin(values) {\r
  const errors = {};\r
\r
  if (!values.email.trim()) {\r
    errors.email = "Email is required";\r
  } else if (\r
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)\r
  ) {\r
    errors.email = "Invalid email address";\r
  }\r
\r
  if (!values.password.trim()) {\r
    errors.password = "Password is required";\r
  } else if (values.password.length < 6) {\r
    errors.password =\r
      "Password must be at least 6 characters";\r
  }\r
\r
  return errors;\r
}`;export{e as default};