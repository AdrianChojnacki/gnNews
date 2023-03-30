import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/context/store";
import { NewsAmount } from "@/components";

describe("NewsAmount component", () => {
  it("Should render properly", () => {
    render(
      <Provider store={store}>
        <NewsAmount />
      </Provider>
    );

    const text = screen.getByText(/Number of news:/i);

    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });
});
