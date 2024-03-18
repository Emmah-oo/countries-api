"use server";
import { getCountryByName } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";
import Header from "@/components/Header";
import Backbutton from "@/components/Backbutton";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getCountryByName(params.id);
  const country = data[0];
  console.log(data);
  console.log(
    Object.entries(country.currencies).map(
      ([key, value]) => (value as { name: string }).name
    )
  );

  return (
    <div className="min-h-screen">
      <Header />
      <Backbutton />
      <div className="grid grid-cols-1 gap-[1rem] items-center justify-between w-[90%] m-auto sm:place-items-center md:grid-cols-2 md:h-[70vh]">
        <div>
          <Image
            src={country.flags.png}
            width={500}
            height={500}
            alt={country.name.common}
            layout="fixed"
            quality={100}
          />
        </div>

        <div className="">
          <h1 className="mb-5 text-xl font-bold">{country.name.common}</h1>
          <div className="grid gap-[1rem] sm:flex sm:gap-[5rem] md:flex-col md:gap-[2rem] lg:flex-row lg:gap-[3rem]">
            <div>
              <div className="flex gap-1">
                <h1 className="">Native Name:</h1>
                {""}
                <div className="flex gap-1">
                  {Object.entries(country.name.nativeName).map(
                    ([key, value]) => (
                      <h1 key={key} className="text-slate-700 font-thin">
                        {(value as { common: string }).common}
                      </h1>
                    )
                  )}
                </div>
              </div>

              <div className="flex gap-1">
                <h1>Population:</h1>
                {""}
                <h2 className="text-slate-700 font-thin">
                  {country.population.toLocaleString()}
                </h2>
              </div>

              <div className="flex gap-1">
                <h1>Region:</h1>
                {""}
                <h2 className="text-slate-700 font-thin">{country.region}</h2>
              </div>

              <div className="flex gap-1">
                <h1>Sub Region:</h1>
                {""}
                <h2 className="text-slate-700 font-thin">
                  {country.subregion}
                </h2>
              </div>

              <div className="flex gap-1">
                <h1>Capital:</h1>
                {""}
                <h2 className="text-slate-700 font-thin">{country.capital}</h2>
              </div>
            </div>

            <div>
              <div className="flex gap-1">
                <h1>Top Level Domain:</h1>
                {""}
                <h2 className="text-slate-700 font-thin">{country.tld}</h2>
              </div>

              <div className="flex gap-1">
                <h1>Currencies:</h1>
                {""}
                <div>
                  {Object.entries(country.currencies).map(([key, value]) => (
                    <h1 key={key} className="text-slate-700 font-thin">
                      {(value as { name: string }).name}
                    </h1>
                  ))}
                </div>
              </div>
              <div className="flex gap-1">
                <h1>Languages:</h1>
                <div className="flex gap-1">
                  {Object.entries(country.languages).map(([key, value]) => (
                    <h1 key={key} className="text-slate-700 font-thin">
                      {value as string}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {country.borders && (
            <div className="flex gap-2 mt-8 items-center">
              <h1>Border Countries:</h1>
              <div className="flex gap-5">
                {country.borders?.map((border: any) => (
                  <div className="px-6 py-1 shadow-md">
                    <h1>{border}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
