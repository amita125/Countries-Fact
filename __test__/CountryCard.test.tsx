import React from "react";
import { render, screen } from "@testing-library/react";
import CountryCard from "../components/CountryCard";
import { Country, CountryStatus } from "../types/models";

// Mock the ThemeContext module
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: jest.fn(),
  }),
}));

describe("CountryCard", () => {
  it("should render CountryCard correctly", async () => {
    const mockCountry: Country = {
      name: {
        common: "Nepal",
        official: "Federal Democratic Republic of Nepal",
        nativeName: {
          nep: {
            official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
            common: "नेपाल",
          },
        },
      },

      capital: ["Kathmandu"],
      altSpellings: [
        "NP",
        "Federal Democratic Republic of Nepal",
        "Loktāntrik Ganatantra Nepāl",
      ],
      region: "Asia",
      subregion: "Southern Asia",
      languages: { nep: "Nepali" },
      translations: {},
      latlng: [28.0, 84.0],
      landlocked: true,
      borders: ["CHN", "IND"],
      area: 147181.0,
      demonyms: {
        eng: { f: "Nepalese", m: "Nepalese" },
        fra: { f: "Népalaise", m: "Népalais" },
      },
      flag: "\uD83C\uDDF3\uD83C\uDDF5",
      maps: {
        googleMaps: "https://goo.gl/maps/UMj2zpbQp7B5c3yT7",
        openStreetMaps: "https://www.openstreetmap.org/relation/184633",
      },
      population: 29136808,
      tld: [],
      cca2: "",
      ccn3: "",
      cca3: "",
      cioc: "",
      independent: false,
      status: CountryStatus.OFFICIALLY_ASSIGNED,
      unMember: false,
      currencies: {},
      idd: {
        root: "",
        suffixes: [],
      },
      gini: {},
      fifa: "",
      car: {
        signs: [],
        side: "",
      },
      timezones: [],
      continents: [],
      flags: {
        png: "",
        svg: "",
        alt: "",
      },
      coatOfArms: {
        png: "",
        svg: "",
      },
      startOfWeek: "",
      capitalInfo: {
        latlng: [],
      },
      postalCode: {
        format: "",
        regex: "",
      },
    };
    const { getByText } = render(<CountryCard country={mockCountry} />);
    expect(getByText("Nepal")).toBeInTheDocument();
    const imgElement = screen.getByAltText("Nepal flag");

    expect(imgElement).toBeInTheDocument();

    expect(screen.getByText(/Population/)).toBeInTheDocument();
    expect(screen.getByText(/29136808/)).toBeInTheDocument();
    expect(screen.getByText(/Region/)).toBeInTheDocument();
    expect(screen.getByText(/Asia/)).toBeInTheDocument();
    expect(screen.getByText(/Capital/)).toBeInTheDocument();
    expect(screen.getByText(/Kathmandu/)).toBeInTheDocument();
  });
});
