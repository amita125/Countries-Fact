
export const getCurrencyName = (currencies: { [code: string]: { name: string; symbol: string } }) => {

    const code = Object.keys(currencies);
    if (code.length > 0) {
        return currencies[code[0]].name;
    }

    return null;
}

export const getCurrencySymbol = (currencies: { [code: string]: { name: string; symbol: string } }) => {

    const code = Object.keys(currencies);
    if (code.length > 0) {
        return currencies[code[0]].symbol;
    }

    return null;
}
