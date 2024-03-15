export const getCountries = async () => {
  const data = await fetch(`https://restcountries.com/v3.1/all`);

  return data.json();
};

export const getCountryByName = async (name: string) => {
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  return data.json();
};

export const getCountryByExactName = async (name: string) => {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );

  return data.json();
};
