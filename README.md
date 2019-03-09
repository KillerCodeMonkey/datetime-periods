# datetime-periods [![Build Status](https://travis-ci.org/KillerCodeMonkey/datetime-periods.svg?branch=master)](https://travis-ci.org/KillerCodeMonkey/datetime-periods)

Get a valid list of years down to seconds for a date and min and max date.

You ever wanted to create a simple date time picker or wanted to show the user available dates or only the days?

It is a zero dependecy lib for browser and node environments.

## Installation

  - `npm install datetime-periods`
  - `yarn add datetime-periods`

## Methods

### getDateTimeObject(date: Date)

Transforms a date in a object respresentation:

```typescript
// DateTimeObject interface
{
  year: number
  month: number // (1-12)
  day: number
  hour: number
  minute: number
  second: number
  tzOffset: number
}
```

### getDaysInMonth(year: number, month: number)

Returns the day count of a month and year.

### getDateTimePeriods(value: Date, min: Date (optional), max: Date (optional))

This method contains the main functionality of the lib. The other methods are only internally used, but maybe someone finds them useful :).

It generates a data structure of valid years, months, days, hours, minutes and seconds for a given date and an optional min and max date. In addition to that it returns all the calculation dates as object representation.

```typescript
{
  value: DateTimeObject // validated value as object
  originalValue: DateTimeObject // original value as object
  originalValueChanged: boolean // indicator if original has changed
  max: DateTimeObject // max date as object
  min: DateTimeObject // min date as object
  periods: {
    days: number[] // available days
    hours: number[] // available hours
    minutes: number[] // available minutes
    months: number[] // available months
    seconds: number[] // available seconds
    years: number[] // available years
  }
}
```

#### Default min and max

  - min: `value - 100 years`
  - max: `value + 100 years`

#### Special cases

Leading to a `console.warn`!

  - `min > max`: min and max are fall back to the default
  - `value < min`: value is set to min, sets `originalValueChanged` to `true`
  - `value > max`: value is set to max, sets `originalValueChanged` to `true`
