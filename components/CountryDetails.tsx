import { Country } from "@/types/models";
import {
  getCurrencyName,
  getCurrencySymbol,
} from "@/utils/getCountryCurrencies";
import { getNativeName, getOfficialNativeName } from "@/utils/getCountryNative";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { NULL } from "sass";

type CountryDetailsProps = {
  countryDetails: Country;
};

function CountryDetails({ countryDetails }: CountryDetailsProps) {
  const { theme } = useTheme();

  return (
    <div className="container m-2 p-5">
      {" "}
      <Link href="/">
        <button
          type="button"
          className={`${[theme]} ${[theme]}-text ${[
            theme,
          ]}-border font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 `}
        >
          Home
        </button>
      </Link>
      <div className="flex flex-wrap mx-5 justify-center items-center">
        <div className="flex flex-col">
          <figure className="mb-4 inline-block max-w-sm">
            <Image
              src={countryDetails.flags.svg}
              alt={`${countryDetails.name.common} flag`}
              width={800}
              height={600}
              objectFit="contain"
            />
            <figcaption className="text-sm  text-neutral-600 dark:text-neutral-400">
              {countryDetails.name.common} Country Flag
            </figcaption>
          </figure>
          {Object.keys(countryDetails.coatOfArms).length === 0 ? null : (
            <>
              <figure className="mb-4 inline-block max-w-sm">
                <Image
                  src={countryDetails.coatOfArms.svg}
                  alt={`${countryDetails.name.common} Coat of arms`}
                  width={200}
                  height={200}
                  objectFit="contain"
                />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
                  {countryDetails.name.common} Coat of Arms
                </figcaption>
              </figure>
            </>
          )}
        </div>

        <div className="flex flex-col m-5">
          <h2 className="text-3xl font-bold m-4">
            {countryDetails.name.common}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
            <p className="mb-4 text-base ">
              Official Name :<span> {countryDetails.name?.official} </span>
            </p>

            {!countryDetails.name.hasOwnProperty("nativeName") ? null : (
              <>
                <p className="mb-4 text-base ">
                  Native Name :
                  <span>{getNativeName(countryDetails.name.nativeName)}</span>
                </p>
                <p className="mb-4 text-base ">
                  Official Native Name :
                  <span>
                    {getOfficialNativeName(countryDetails.name.nativeName)}
                  </span>
                </p>
              </>
            )}

            <p className="mb-4 text-base ">
              Capital :<span>{countryDetails.capital}</span>
            </p>
            <p className="mb-4 text-base ">
              Area :
              <span>
                {countryDetails.area} km<sup>2</sup>
              </span>
            </p>
            <p className="mb-4 text-base ">
              Region :<span>{countryDetails.region}</span>
            </p>
            <p className="mb-4 text-base ">
              Sub Region :<span>{countryDetails.subregion}</span>
            </p>
            <p className="mb-4 text-base ">
              Population :<span>{countryDetails.population}</span>
            </p>
            {!countryDetails.hasOwnProperty("languages") ? null : (
              <p className="mb-4 text-base ">
                Languages:
                {Object.entries(countryDetails.languages || {}).map(
                  ([code, name]) => <span key={code}>{name},</span>
                ) || "N/A"}
              </p>
            )}

            <p className="mb-4 text-base ">
              {" "}
              Top Level Domain :<span>{countryDetails.tld?.join(", ")}</span>
            </p>

            {!countryDetails.hasOwnProperty("currencies") ? null : (
              <>
                <p className="mb-4 text-base ">
                  Currencies :
                  <span>
                    {getCurrencyName(countryDetails.currencies)},{" "}
                    {getCurrencySymbol(countryDetails.currencies)}{" "}
                  </span>
                </p>
              </>
            )}

            <p className="mb-4 text-base ">
              Land-locked :
              <span>
                {countryDetails.landlocked == Boolean("true") ? "Yes" : "No"}
              </span>
            </p>

            <p className="mb-4 text-base ">
              UN Member :
              <span>
                {countryDetails.unMember == Boolean("true") ? "Yes" : "No"}
              </span>
            </p>

            <p className="mb-4 text-base ">
              Start of week :<span>{countryDetails.startOfWeek}</span>
            </p>

            <p className="mb-4 text-base ">
              Status :<span>{countryDetails.status}</span>
            </p>

            <p className="mb-4 text-base ">
              Independent :
              <span>
                {countryDetails.independent == Boolean("true") ? "Yes" : "No"}
              </span>
            </p>

            <p className="mb-4 text-base ">
              Continents :<span>{countryDetails.continents}</span>
            </p>

            <p className="mb-4 text-base ">
              Demonyms
              <p>Male : {countryDetails.demonyms?.eng.m}</p>
              <p>Female : {countryDetails.demonyms?.eng.f}</p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3>Border Countries : </h3>
        <div className="flex flex-wrap gap-2 ">
          {!countryDetails.hasOwnProperty("borders")
            ? "NONE"
            : countryDetails.borders?.map((border, index) => (
                <h3 key={index}>
                  {" "}
                  <Link href={`/${border}`}>
                    <button
                      type="button"
                      className={`${[theme]} ${[theme]}-text ${[
                        theme,
                      ]}-border font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 `}
                    >
                      {border}
                    </button>
                  </Link>
                </h3>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
