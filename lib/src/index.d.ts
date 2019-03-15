/**
   * Returns the days count in a month.
   *
   * @param month - The month number (1-12)
   * @param year - The full year number
   * @returns The days in a month as number
   */
export declare function getDaysInMonth(month: number, year: number): number;
export interface DateTimeObject {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    tzOffset: number;
}
export interface GetDateTimePeriods {
    value: DateTimeObject;
    originalValue: DateTimeObject;
    originalValueChanged: boolean;
    max: DateTimeObject;
    min: DateTimeObject;
    periods: {
        days: number[];
        hours: number[];
        minutes: number[];
        months: number[];
        seconds: number[];
        years: number[];
    };
}
export interface NeededPeriods {
    days?: boolean;
    hours?: boolean;
    minutes?: boolean;
    months?: boolean;
    seconds?: boolean;
    years?: boolean;
}
export declare const defaultNeededPeriods: {
    days: boolean;
    hours: boolean;
    minutes: boolean;
    months: boolean;
    seconds: boolean;
    years: boolean;
};
/**
   * Returns a date object based on a JS date.
   *
   * @param date - A javascript date
   * @returns The date as a plain old javascript object representation
   */
export declare function getDateTimeObject(date: Date): DateTimeObject;
/**
   * Returns a valid list of years down to seconds for a date and min and max date.
   *
   * @param value - A javascript date
   * @param min - The optional min date
   * @param max - The optional max date
   * @param needed - The optional needed object where it is possible to define the needed periods
   * @returns The date params as object representation and the valid periods
   */
export declare function getDateTimePeriods(value?: Date, min?: Date, max?: Date, needed?: NeededPeriods): GetDateTimePeriods;
