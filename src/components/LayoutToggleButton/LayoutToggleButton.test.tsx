import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "@/context/store";
import { LayoutToggleButton } from "@/components";

describe("LayoutToggleButton component", () => {
  it("Should render properly", () => {
    render(
      <Provider store={store}>
        <LayoutToggleButton />
      </Provider>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
  it("Should change layout state when clicked", () => {
    render(
      <Provider store={store}>
        <LayoutToggleButton />
      </Provider>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const layoutState = store.getState().layout.layout;
    expect(layoutState).toBe("tiles");
  });
});
