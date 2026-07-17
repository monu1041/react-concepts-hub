import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dashboard from "../src/components/Dashboard";

describe("Dashboard", () => {
  test("shows loading state", () => {
    render(<Dashboard />);

    expect(
      screen.getByText(/loading users/i)
    ).toBeInTheDocument();
  });

  test("renders users", async () => {
    render(<Dashboard />);

    expect(
      await screen.findByText(/alice johnson/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/bob smith/i)
    ).toBeInTheDocument();
  });

  test("filters users", async () => {
    const user = userEvent.setup();

    render(<Dashboard />);

    await screen.findByText(/alice johnson/i);

    await user.type(
      screen.getByPlaceholderText(/search users/i),
      "Bob"
    );

    expect(
      screen.getByText(/bob smith/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/alice johnson/i)
    ).not.toBeInTheDocument();
  });
});