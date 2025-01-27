import { BigintIsh, Rounding } from '@pandaswap/sdk/dist/constants';
import { Currency } from '@pandaswap/sdk/dist/entities/currency';
import { Route } from '@pandaswap/sdk/dist/entities/route';
import { Fraction } from '@pandaswap/sdk/dist/entities/fractions/fraction';
import { CurrencyAmount } from '@pandaswap/sdk/dist/entities/fractions/currencyAmount';
export declare class Price extends Fraction {
    readonly baseCurrency: Currency;
    readonly quoteCurrency: Currency;
    readonly scalar: Fraction;
    static fromRoute(route: Route): Price;
    constructor(baseCurrency: Currency, quoteCurrency: Currency, denominator: BigintIsh, numerator: BigintIsh);
    get raw(): Fraction;
    get adjusted(): Fraction;
    invert(): Price;
    multiply(other: Price): Price;
    quote(currencyAmount: CurrencyAmount): CurrencyAmount;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}
