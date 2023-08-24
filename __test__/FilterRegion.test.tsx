import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FilterRegion from "../components/FilterRegion";

jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: jest.fn(),
  }),
}));

const mockSetRegion = jest.fn();

describe("FilterRegion", () => {
  it("should render FilterRegion correctly", async () => {
    render(<FilterRegion setRegion={mockSetRegion} region="all" />);

    // Find the select element
    const selectElement = screen.getByTestId('filter-region'); 
    // Simulate selecting a region from the dropdown
    fireEvent.change(selectElement, { target: { value: "Asia" } });

    // Expect that setRegion was called with the selected region
    expect(mockSetRegion).toHaveBeenCalledWith("Asia");
  });
});
