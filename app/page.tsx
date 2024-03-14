"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";

import { getCountries, getCountryByName } from "@/lib/data";
import Country from "@/components/Country";
// import Button from "@/components/Button";
import { CountryType } from "@/lib/definitions";
import { filterData } from "@/lib/utils";
import Search from "@/components/Search";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [filteredResult, setFilteredResult] = useState<CountryType[]>([]);
  const query = searchParams?.query || "";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: CountryType[] = await getCountries();
        const limit = data.slice(0, 30);
        console.log(limit);
        setCountries(limit);
      } catch (error) {
        throw new Error(`Error getting data for countries`);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (query) {
      const fetchCountriesByName = async () => {
        try {
          const data: CountryType[] = await getCountryByName(query);
          console.log(data);
          setCountries(data);
        } catch (error: any) {
          throw new Error(`Error getting countries ${error.message}`);
        }
      };

      fetchCountriesByName();
    }
  }, [query]);

  const filterByRegion = async (region: string) => {
    try {
      setFilteredResult(countries);
      const limit = filteredResult.slice(0, 30);
      const filteredData = limit.filter((country) => country.region === region);
      setCountries(filteredData);
      console.log("filtered data", filteredResult);
      setIsOpen(!isOpen);
    } catch (error) {
      throw new Error(`Error getting data for countries`);
    }
  };

  return (
    <main className="">
      <Header />

      <div className="w-[90%] m-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <Search />
          <div className="relative inline-block text-left mt-10">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-10 text-black px-9 py-4 rounded focus:outline-none focus:shadow-outline shadow-md"
              >
                Filter By Region
                <SlArrowRight
                  size={12}
                  className={`transition-all ${isOpen ? "rotate-90" : ""}`}
                />
              </button>
            </div>
            {isOpen && (
              <div className="origin-top-right absolute mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {filterData.map((data) => (
                    <h1
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      key={data}
                      onClick={() => filterByRegion(data)}
                    >
                      {data}
                    </h1>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {countries &&
            countries?.map((country) => (
              <Country key={country.name.official} country={country} />
            ))}
        </div>
      </div>
    </main>
  );
}
