import { render } from "@testing-library/react";
import { Clock } from "@/components";

describe("Clock component", () => {
  jest.useFakeTimers();

  it("Should unmount properly", () => {
    const { unmount } = render(<Clock />);

    expect(jest.getTimerCount()).toBe(1);

    unmount();

    expect(jest.getTimerCount()).toBe(0);
  });
});
