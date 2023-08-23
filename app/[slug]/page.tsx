"use client";
import { CountryDetails, Footer, Header } from "@/components";
import { Country } from "@/types/models";
import React, { useEffect, useState } from "react";

export default function CountryDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const countryName = params.slug;
  const [countryDetails, setCountryDetails] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data for ${countryName}`);
        }
        return res.json();
      })
      .then((data: Country[]) => {
        setCountryDetails(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [countryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="h-[88vh] mx-auto overflow-y-auto">
      <div className="flex">
        {countryDetails ? (
          <CountryDetails countryDetails={countryDetails} />
        ) : null}
      </div>
    </div>
  );
}
