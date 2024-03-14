"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { getCountries } from "@/lib/data";
import Country from "@/components/Country";
// import Button from "@/components/Button";
import { CountryType } from "@/lib/definitions";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [countries, setCountries] = useState<CountryType[]>([]);
  // const countries = await getCountries()
  // console.log(countries)

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

  return (
    <main className="">
      <Header />

      <div className="w-[90%] m-auto">
        <div className="w-[100%] flex items-center gap-5 shadow-md mt-8 px-6 py-3">
          <CiSearch size={25} />
          <input
            type="search"
            placeholder="Search for a country..."
            className="w-full outline-none"
          />
        </div>
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
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Africa
                </h1>
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  America
                </h1>
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Asia
                </h1>
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Europe
                </h1>
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Oceanic
                </h1>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {countries &&
            countries.map((country) => (
              <Country key={country.name.official} country={country} />
            ))}
        </div>
      </div>
    </main>
  );
}
