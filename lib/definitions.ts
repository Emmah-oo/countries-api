export type CountryType = {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
    };
    population: number;
    region: string;
    capital: string[];
  };