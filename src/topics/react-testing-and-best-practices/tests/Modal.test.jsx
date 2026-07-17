import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../src/components/Modal";

describe("Modal", () => {
  test("renders when open", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Test Modal"
      >
        <p>Hello World</p>
      </Modal>
    );

    expect(
      screen.getByRole("dialog")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/hello world/i)
    ).toBeInTheDocument();
  });

  test("calls onClose when Close button clicked", async () => {
    const user = userEvent.setup();

    const onClose = vi.fn();

    render(
      <Modal
        isOpen={true}
        onClose={onClose}
        title="Modal"
      >
        Content
      </Modal>
    );

    await user.click(
      screen.getByRole("button", {
        name: /close/i,
      })
    );

    expect(onClose).toHaveBeenCalled();
  });

  test("closes on Escape key", async () => {
    const user = userEvent.setup();

    const onClose = vi.fn();

    render(
      <Modal
        isOpen={true}
        onClose={onClose}
        title="Modal"
      >
        Content
      </Modal>
    );

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalled();
  });
});