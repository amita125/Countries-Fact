import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchCountry from "../components/SearchCountry";

// Mock the setCountryName function
const mockSetCountryName = jest.fn();

jest.mock("../context/ThemeContext", () => ({
    useTheme: () => ({
      theme: "light",
      toggleTheme: jest.fn(),
    }),
  }));
  

describe("SearchCountry", () => {
  it("should render SearchCountry correctly", async () => {
    render(<SearchCountry setCountryName={mockSetCountryName} />);

    // Find the input element by its placeholder text
    const inputElement = screen.getByPlaceholderText("Search for a Country...");

    // Simulate typing a search query
    fireEvent.change(inputElement, { target: { value: "Test Country" } });

    // Simulate pressing the Enter key
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    // Expect that setCountryName was called with the search query
    expect(mockSetCountryName).toHaveBeenCalledWith("Test Country");
  });
});
