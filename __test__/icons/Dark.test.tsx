import React from "react";
import { render } from "@testing-library/react";
import Dark from "../../components/icons/Dark";

describe("Dark Component", () => {
  it("renders the Dark component with the correct SVG attributes", () => {
    const { getByTestId } = render(<Dark />);
    const darkSVG = getByTestId("dark");

    // Check that the SVG element is present
    expect(darkSVG).toBeInTheDocument();

    // Check SVG attributes
    expect(darkSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    expect(darkSVG).toHaveAttribute("viewBox", "0 0 20 20");
    expect(darkSVG).toHaveAttribute("fill", "currentColor");
    expect(darkSVG).toHaveClass("w-5 h-5");
  });

  it("renders the correct SVG path", () => {
    const { getByTestId } = render(<Dark />);
    const darkSVG = getByTestId("dark");

    // Check that the SVG path element is present and has the correct attribute
    expect(darkSVG).toBeInTheDocument();
    expect(darkSVG.querySelector("path")).toHaveAttribute(
      "d",
      "M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
    );
  });
});
