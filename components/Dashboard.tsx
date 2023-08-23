"use client";
import React, { useState, useEffect } from "react";
import { Country } from "@/types/models";
import { CountryCard, FilterRegion, Pagination, SearchCountry } from ".";

const Dashboard = () => {
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [region, setRegion] = useState<string>("all");
  const [countryName, setCountryName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 10;

  const fetchAndSortCountries = (url: string) => {
    setError(false);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            const errorMessage = errorData.message || "An error occurred.";
            setError(true);
            return Promise.reject({
              message: errorMessage,
              status: response.status,
            });
          });
        }
        return response.json();
      })

      .then((data: Country[]) => {
        if (data.length > 1) {
          const sortedCountries = data.sort((countryA: any, countryB: any) =>
            countryA.name.common.localeCompare(countryB.name.common)
          );
          setCountriesList(sortedCountries);
        } else {
          setCountriesList(data);
        }
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  };

  useEffect(() => {
    setCurrentPage(1)

    const url =
      region === "all"
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/region/${region}`;
    fetchAndSortCountries(url);
  }, [region]);

  useEffect(() => {
    setCurrentPage(1)
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    if (countryName !== "") {
      fetchAndSortCountries(url);
    } else {
      setRegion("all");
    }

  }, [countryName]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesList.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className=" m-1 ">
      <div className="flex justify-between items-center p-1 h-20">
        <SearchCountry setCountryName={setCountryName} />
        <FilterRegion setRegion={setRegion} region={region} />
      </div>

      <div className="h-[78vh] overflow-y-scroll">
        <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  mx-auto w-full ">
          {error ? (
            <p className="error">No Match Found</p>
          ) : (
            <>
              {currentCountries.map((country, index) => (
                <div key={index} className="flex justify-center">
                  <CountryCard country={country} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex justify-center items-center m-5">
          <Pagination
            currentPage={currentPage}
            pageSize={countriesPerPage}
            totalCount={countriesList.length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
