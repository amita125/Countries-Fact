import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/Header";

// Mock the ThemeContext module
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: jest.fn(),
  }),
}));

describe("Header Component", () => {
  it("renders the Header component", () => {
    const { getByText } = render(<Header />);

    // Assert that the header text is present
    expect(getByText("Countries of the world")).toBeInTheDocument();
  });

  it("toggles theme when the button is clicked", () => {
    const { getByTestId } = render(<Header />);
    const toggleButton = getByTestId("toggle-theme-button");
    expect(toggleButton).toBeInTheDocument();

    const darkIcon = getByTestId("dark");
    const lightIcon = getByTestId("dark");

    // Simulate a click on the button
    fireEvent.click(toggleButton);
    expect(toggleButton).toContainElement(darkIcon);

    fireEvent.click(toggleButton);
    expect(toggleButton).toContainElement(lightIcon);
  });
});
