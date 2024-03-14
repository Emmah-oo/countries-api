import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  };
  return (
    <div className="w-[100%] flex items-center gap-5 shadow-md mt-8 px-6 py-3 md:w-[40%]">
      <CiSearch size={25} />
      <input
        type="search"
        placeholder="Search for a country..."
        className="w-full outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;
