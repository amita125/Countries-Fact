import React from "react";
import { render, screen } from "@testing-library/react";
import CountryDetails from "../components/CountryDetails"; // Import your component
import { Country, CountryStatus } from "@/types/models";

// Mock the theme context
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    theme: "light", // Mock the theme as needed for your test
  }),
}));

describe("CountryDetails", () => {
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

  it("should render CountryDetails correctly", () => {
    render(<CountryDetails countryDetails={mockCountry} />);

    expect(screen.getByText("Nepal")).toBeInTheDocument();
    expect(
      screen.getByText((content) => {
        return /Official Name :/.test(content);
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Nepal Country Flag")).toBeInTheDocument();
    expect(screen.getByText("Nepal Coat of Arms")).toBeInTheDocument();
    expect(screen.getByText("Official Name :")).toBeInTheDocument();
    expect(screen.getByText("Native Name :")).toBeInTheDocument();
    expect(screen.getByText("Currencies :")).toBeInTheDocument();
  });
});
