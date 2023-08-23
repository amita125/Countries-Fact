import React from "react";
import Image from "next/image";
import { Country } from "@/types/models";
import "../styles/globals.scss";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const { theme } = useTheme();

  return (
    <Link href={`/${country.cca3}`}>
      <div
        className={`mx-3 mt-6 flex flex-col rounded-lg ${[theme]}-card ${[theme]}-text`}
      >
        <picture>
          <img
            className="object-scale-down h-48 w-full"
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
          />
        </picture>

        <div className="p-4 md:p-5">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {country.name.common}{" "}
          </h5>
          <br />
          <p className="mb-4 text-base ">
            Population: <span>{country.population} </span>
          </p>
          <p className="mb-4 text-base ">
            Region: <span>{country.region}</span>
          </p>
          <p className="mb-4 text-base ">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
