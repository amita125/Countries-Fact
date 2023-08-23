// countryUtils.ts

export const getNativeName = (nativeNames: { [language: string]: { official: string; common: string } }) => {

    const languages = Object.keys(nativeNames);
    if (languages.length > 0) {
        return nativeNames[languages[0]].common;
    }

    return null;
}

export const getOfficialNativeName = (nativeNames: { [language: string]: { official: string; common: string } }) => {

    const languages = Object.keys(nativeNames);
    if (languages.length > 0) {
        return nativeNames[languages[0]].official;
    }

    return null;
}
