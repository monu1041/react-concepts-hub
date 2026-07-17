import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "../components/LoginForm";

describe("LoginForm", () => {
  test("renders form fields", () => {
    render(<LoginForm />);

    expect(
      screen.getByLabelText(/email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation errors", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );

    expect(
      screen.getByText(/email is required/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/password is required/i)
    ).toBeInTheDocument();
  });

  test("accepts valid input", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/email/i),
      "john@test.com"
    );

    await user.type(
      screen.getByLabelText(/password/i),
      "password123"
    );

    await user.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );

    expect(
      screen.queryByText(/required/i)
    ).not.toBeInTheDocument();
  });
});