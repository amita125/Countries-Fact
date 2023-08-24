import React from "react";
import { render } from "@testing-library/react";
import Light from "../../components/icons/Light";

describe("Light Component", () => {
  it("renders the Light component with the correct SVG attributes", () => {
    const { getByTestId } = render(<Light />);
    const lightSVG = getByTestId("light");

    // Check that the SVG element is present
    expect(lightSVG).toBeInTheDocument();

    // Check SVG attributes
    expect(lightSVG).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    expect(lightSVG).toHaveAttribute("viewBox", "0 0 24 24");
    expect(lightSVG).toHaveAttribute("stroke", "currentColor");
    expect(lightSVG).toHaveClass("w-6 h-6");
  });

  it("renders the correct SVG path", () => {
    const { getByTestId } = render(<Light />);
    const lightSVG = getByTestId("light");

    // Check that the SVG path element is present and has the correct attribute
    expect(lightSVG).toBeInTheDocument();
    expect(lightSVG.querySelector("path")).toHaveAttribute(
      "d",
      "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    );
  });
});
