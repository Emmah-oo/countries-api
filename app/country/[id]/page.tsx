"use client";
import { getCountryByName } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type CountryType = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        common: string;
      };
    };
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string[];
  subregion: string;
  tld: string[];
};

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
    <div className="flex gap-[6rem] min-h-screen items-center justify-between w-[70%] m-auto">
      <div>
        <Image
          src={country.flags.png}
          width={400}
          height={400}
          alt={country.name.common}
        />
      </div>

      <div>
        <h1 className="mb-5 text-xl font-bold">{country.name.common}</h1>
        <div className="flex gap-[5rem]">
          <div>
            <div className="flex gap-1">
              <h1>Native Name:</h1>
              {""}
              <div className="flex gap-1">
                {Object.entries(country.name.nativeName).map(([key, value]) => (
                  <h1 key={key}>{(value as { common: string }).common}</h1>
                ))}
              </div>
            </div>

            <div className="flex gap-1">
              <h1>Population:</h1>
              {""}
              <h2>{country.population.toLocaleString()}</h2>
            </div>

            <div className="flex gap-1">
              <h1>Region:</h1>
              {""}
              <h2>{country.region}</h2>
            </div>

            <div className="flex gap-1">
              <h1>Sub Region:</h1>
              {""}
              <h2>{country.subregion}</h2>
            </div>

            <div className="flex gap-1">
              <h1>Capital:</h1>
              {""}
              <h2>{country.capital}</h2>
            </div>
          </div>

          <div>
            <div className="flex gap-1">
              <h1>Top Level Domain:</h1>
              {""}
              <h2>{country.tld}</h2>
            </div>

            <div className="flex gap-1">
              <h1>Currencies:</h1>
              {""}
              <div>
                {Object.entries(country.currencies).map(([key, value]) => (
                  <h1 key={key}>{(value as { name: string }).name}</h1>
                ))}
              </div>
            </div>
            <div className="flex gap-1">
              <h1>Languages:</h1>
              <div className="flex gap-1">
                {Object.entries(country.languages).map(([key, value]) => (
                  <h1 key={key}>{value as string}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-8 items-center">
          <h1>Border Countries:</h1>
          <div className="flex gap-5">
            {country.borders.map((border: any) => (
              <Link href={`/country/${country.name.common}`} className="px-6 py-1 shadow-md">
                <h1>{border}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
