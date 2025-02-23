import { render, screen } from "@testing-library/react";
import { Toaster } from "react-hot-toast";
import ToastDemo from "../../src/components/ToastDemo";
import userEvent from "@testing-library/user-event";

describe("ToastDemo", () => {
  it("should render a toast", async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    const toast = await screen.findByText(/succes/i);
    expect(toast).toBeInTheDocument();
  });
});
