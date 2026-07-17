var e=`import { render, screen } from "@testing-library/react";\r
import userEvent from "@testing-library/user-event";\r
\r
import Modal from "../components/Modal";\r
\r
describe("Modal", () => {\r
  test("renders when open", () => {\r
    render(\r
      <Modal\r
        isOpen={true}\r
        onClose={() => {}}\r
        title="Test Modal"\r
      >\r
        <p>Hello World</p>\r
      </Modal>\r
    );\r
\r
    expect(\r
      screen.getByRole("dialog")\r
    ).toBeInTheDocument();\r
\r
    expect(\r
      screen.getByText(/hello world/i)\r
    ).toBeInTheDocument();\r
  });\r
\r
  test("calls onClose when Close button clicked", async () => {\r
    const user = userEvent.setup();\r
\r
    const onClose = vi.fn();\r
\r
    render(\r
      <Modal\r
        isOpen={true}\r
        onClose={onClose}\r
        title="Modal"\r
      >\r
        Content\r
      </Modal>\r
    );\r
\r
    await user.click(\r
      screen.getByRole("button", {\r
        name: /close/i,\r
      })\r
    );\r
\r
    expect(onClose).toHaveBeenCalled();\r
  });\r
\r
  test("closes on Escape key", async () => {\r
    const user = userEvent.setup();\r
\r
    const onClose = vi.fn();\r
\r
    render(\r
      <Modal\r
        isOpen={true}\r
        onClose={onClose}\r
        title="Modal"\r
      >\r
        Content\r
      </Modal>\r
    );\r
\r
    await user.keyboard("{Escape}");\r
\r
    expect(onClose).toHaveBeenCalled();\r
  });\r
});`;export{e as default};