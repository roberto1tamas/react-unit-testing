import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should display user name", () => {
    const user: User = {
      id: 1233,
      name: "Roberto",
      isAdmin: false,
    };

    render(<UserAccount user={user} />);

    const userName = screen.getByText(user.name);
    expect(userName).toBeInTheDocument();
  });

  it("should reder edit button if user is admin", () => {
    const user: User = {
      id: 1233,
      name: "Roberto",
      isAdmin: true,
    };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should NOT reder edit button if user is admin", () => {
    const user: User = {
      id: 1233,
      name: "Roberto",
      isAdmin: false,
    };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
