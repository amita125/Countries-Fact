import React, { useState } from "react";
import { Search } from "./icons";
import { useTheme } from "@/context/ThemeContext";

type SearchCountryProps = {
  setCountryName: (countryName: string) => void;
};
const SearchCountry = ({ setCountryName }: SearchCountryProps) => {
  const { theme } = useTheme();

  const [searchName, setSearchName] = useState<string>("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // When the Enter key is pressed, call setCountryName with the searchName
      setCountryName(searchName);
    }
  };

  return (
    <div className="relative mb-3">
      <label className="relative block">
        <input
          className={`w-full placeholder:font-italitc ${[theme]}-text ${[theme]}-border rounded-md py-2 pl-3 pr-10 focus:outline-none`}
          placeholder="Search for a Country..."
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Search />
        </span>
      </label>
    </div>
  );
};

export default SearchCountry;
