import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("renders heading correctly", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
