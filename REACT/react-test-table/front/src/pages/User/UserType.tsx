import { ICountries } from "./../../shared/components/CountrySelect/CountrySelectInterface";

export type IUser = {
    id?: number;
    firstName: string; 
    lastName: string;
    mail: string; 
    country?: ICountries;
}