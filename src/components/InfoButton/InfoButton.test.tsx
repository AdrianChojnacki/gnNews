import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { InfoButton } from "@/components";

describe("InfoButton component", () => {
  it("Should render properly", () => {
    render(<InfoButton />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});
