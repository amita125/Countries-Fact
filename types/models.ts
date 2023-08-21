export enum CountryStatus {
    OFFICIALLY_ASSIGNED = "officially-assigned",
    UNOFFICIAL = "unofficial",
    DEFACTO = "de-facto",
    TERRITORIAL_DISPUTE = "territorial-dispute",
    EXTERNALLY_TERRITORIAL_DISPUTE = "externally-territorial-dispute",
}

export type CountryName = {
    common: string;
    official: string;
    nativeName: NativeName;
}

export type NativeName = {
    [key: string]: Info;
};

export type Info = {
    official: string;
    common: string;
}

export type Currencies = {
    [code: string]: {
        name: string;
        symbol: string;
    };
}

export type Idd = {
    root: string;
    suffixes: string[];
}

export type Language = {
    [code: string]: string;
}

export type Translation = {
    [code: string]: Info;
}

export type Demonym = {
    [lang: string]: {
        f: string;
        m: string;
    };
}

export type Maps = {
    googleMaps: string;
    openStreetMaps: string;
}

export type Gini = {
    [year: string]: number;
}

export type Car = {
    signs: string[];
    side: string;
}

export type CountryFlags = {
    png: string;
    svg: string;
    alt: string;
}

export type CoatOfArms = {
    png: string;
    svg: string;
}

export type PostalCode = {
    format: string;
    regex: string;
}

export type CapitalInfo = {
    latlng: number[];
}

export type Country = {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: CountryStatus;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Language;
    translations: Translation;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonym;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: CountryFlags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;

}