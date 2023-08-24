import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("renders footer text with correct year and author", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const footerText = screen.getByText(
      `RestCountries App © ${currentYear} Created by AmitaGhale`
    );
    expect(footerText).toBeInTheDocument();
  });
});
