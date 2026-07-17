var e=`import { render, screen } from "@testing-library/react";\r
import userEvent from "@testing-library/user-event";\r
\r
import LoginForm from "../components/LoginForm";\r
\r
describe("LoginForm", () => {\r
  test("renders form fields", () => {\r
    render(<LoginForm />);\r
\r
    expect(\r
      screen.getByLabelText(/email/i)\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.getByLabelText(/password/i)\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.getByRole("button", {\r
        name: /login/i,\r
      })\r
    ).toBeInTheDocument();\r
  });\r
\r
  test("shows validation errors", async () => {\r
    const user = userEvent.setup();\r
\r
    render(<LoginForm />);\r
\r
    await user.click(\r
      screen.getByRole("button", {\r
        name: /login/i,\r
      })\r
    );\r
\r
    expect(\r
      screen.getByText(/email is required/i)\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.getByText(/password is required/i)\r
    ).toBeInTheDocument();\r
  });\r
\r
  test("accepts valid input", async () => {\r
    const user = userEvent.setup();\r
\r
    render(<LoginForm />);\r
\r
    await user.type(\r
      screen.getByLabelText(/email/i),\r
      "john@test.com"\r
    );\r
\r
    await user.type(\r
      screen.getByLabelText(/password/i),\r
      "password123"\r
    );\r
\r
    await user.click(\r
      screen.getByRole("button", {\r
        name: /login/i,\r
      })\r
    );\r
\r
    expect(\r
      screen.queryByText(/required/i)\r
    ).not.toBeInTheDocument();\r
  });\r
});`;export{e as default};