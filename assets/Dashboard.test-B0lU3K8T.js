var e=`import { render, screen } from "@testing-library/react";\r
import userEvent from "@testing-library/user-event";\r
\r
import Dashboard from "../components/Dashboard";\r
\r
describe("Dashboard", () => {\r
  test("shows loading state", () => {\r
    render(<Dashboard />);\r
\r
    expect(\r
      screen.getByText(/loading users/i)\r
    ).toBeInTheDocument();\r
  });\r
\r
  test("renders users", async () => {\r
    render(<Dashboard />);\r
\r
    expect(\r
      await screen.findByText(/alice johnson/i)\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.getByText(/bob smith/i)\r
    ).toBeInTheDocument();\r
  });\r
\r
  test("filters users", async () => {\r
    const user = userEvent.setup();\r
\r
    render(<Dashboard />);\r
\r
    await screen.findByText(/alice johnson/i);\r
\r
    await user.type(\r
      screen.getByPlaceholderText(/search users/i),\r
      "Bob"\r
    );\r
\r
    expect(\r
      screen.getByText(/bob smith/i)\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.queryByText(/alice johnson/i)\r
    ).not.toBeInTheDocument();\r
  });\r
});`;export{e as default};