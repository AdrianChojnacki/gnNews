import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Clock } from "@/components";

describe("Clock component", () => {
  jest.useFakeTimers();

  it("Should render properly", () => {
    render(<Clock />);

    const clock = screen.getByTestId("clock");

    expect(clock).toBeInTheDocument();
    expect(clock).toBeVisible();
  });

  it("Should unmount properly", () => {
    const { unmount } = render(<Clock />);

    expect(jest.getTimerCount()).toBe(1);
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });
});
