import { useTheme } from "@/context/ThemeContext";
import React from "react";

type FilterRegionProps = {
  setRegion: (region: string) => void;
  region: string;
};

const FilterRegion = ({ setRegion, region }: FilterRegionProps) => {
  const { theme } = useTheme();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selected = e.target.value;
    setRegion(selected);
  };

  return (
    <div className="relative mb-3">
      <select
        id="large"
        className={` w-full rounded-md py-2 pl-3 pr-10 text-base ${[theme]}-border rounded-lg`}
        onChange={handleSelectChange}
        value={region}
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterRegion;
