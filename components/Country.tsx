import { CountryType } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

const Country = ({ country }: { country: CountryType }) => {
  return (
    <Link href={`/country/${country.name.common}`}>
      <div className="w-[80%] m-auto flex flex-col gap-4 shadow-md mt-10 lg:w-[100%]">
        <div className="image-container">
          <Image
            src={country.flags.png}
            alt={country.name.common}
            height={300}
            width={300}
            priority
            className="w-full aspect-video"
          />
        </div>
        <div className="px-4 py-8">
          <h1 className="mb-5 font-bold text-[1.2rem]">
            {country.name.common}
          </h1>
          <p className=" text-slate-600">
            {" "}
            <span className="font-medium text-black">Population</span>:{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="text-slate-600">
            {" "}
            <span className="font-medium text-black">Region:</span>{" "}
            {country.region}
          </p>
          <p className="text-slate-600">
            {" "}
            <span className="font-medium text-black">Capital:</span>{" "}
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;
