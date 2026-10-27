import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("App Component", () => {
  test("renders heading correctly", () => {
    render(<Home />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
});
