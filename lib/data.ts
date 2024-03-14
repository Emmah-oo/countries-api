export const getCountries = async () => {
  const data = await fetch(`https://restcountries.com/v3.1/all`);

  return data.json();
};

export const getCountriesByRegion = async (region: string) => {
  const data = await fetch(`https://restcountries.com/v3.1/region/{region}`);

  return data.json();
};
