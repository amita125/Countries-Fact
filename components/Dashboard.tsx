"use client";
import React, { useState, useEffect } from "react";
import { Country } from "@/types/models";
import { CountryCard } from ".";

const Dashboard = () => {
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [region, setRegion] = useState<string>("all");
  const [error, setError] = useState<boolean>(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 12;

  const fetchAndSortCountries = (url: string) => {
    setError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data: Country[]) => {
        const sortedCountries = data.sort((countryA: any, countryB: any) =>
          countryA.name.common.localeCompare(countryB.name.common)
        );
        setCountriesList(sortedCountries);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const url =
      region === "all"
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/region/${region}`;
    fetchAndSortCountries(url);
  }, [region]);

  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5  mx-auto w-full  ">
      {countriesList.map((country, index) => (
        <div key={index} className="flex justify-center">
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
