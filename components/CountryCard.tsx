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
    <div
      className={`mx-3 mt-6 flex flex-col rounded-lg ${[theme]} ${[
        theme,
      ]}-card `}
    >
      <Link href={`/${country.name.common}`}>
        <Image
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          width={500}
          height={500}
          objectFit="contain"
        />

        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {country.name.common}{" "}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Population: <span>{country.population}</span>
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Region: <span>{country.region}</span>
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
