export interface ICountries {
    index: number;
    name: string;
    id: string;
}

export interface ICountryProps {
    open?: boolean;
    sendCountry?: (c: ICountries) => void;
}