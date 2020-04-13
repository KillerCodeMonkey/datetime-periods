# datetime-periods
[![Build Status](https://github.com/KillerCodeMonkey/datetime-periods/workflows/CI/badge.svg)](https://github.com/KillerCodeMonkey/datetime-periods/actions/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5482e078bde544daba23ffb14ab11699)](https://www.codacy.com/app/KillerCodeMonkey/datetime-periods?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=KillerCodeMonkey/datetime-periods&amp;utm_campaign=Badge_Grade)[![codecov](https://codecov.io/gh/KillerCodeMonkey/datetime-periods/branch/master/graph/badge.svg)](https://codecov.io/gh/KillerCodeMonkey/datetime-periods)

Get a valid list of years down to seconds for a date and min and max date.

You ever wanted to create a simple date time picker or wanted to show the user available dates or only the days?

It is a zero dependecy lib for browser and node environments.

## Donate/Support

If you like my work, feel free to support it. Donations to the project are always welcomed :)

PayPal: [PayPal.Me/bengtler](https://paypal.me/bengtler)

<a href="https://www.buymeacoffee.com/bengtler" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

BTC Wallet Address:
`3QVyr2tpRLBCw1kBQ59sTDraV6DTswq8Li`

ETH Wallet Address:
`0x394d44f3b6e3a4f7b4d44991e7654b0cab4af68f`

LTC Wallet Address:
`MFif769WSZ1g7ReAzzDE7TJVqtkFpmoTyT`

XRP Wallet Address:
`rXieaAC3nevTKgVu2SYoShjTCS2Tfczqx?dt=159046833`

## Installation

-   `npm install datetime-periods`
-   `yarn add datetime-periods`

## Usage

### Script tag

If you want to use datetime-periods via script tag, you should use the `datetime-periods.umd.js`. After the script is loaded you can access the methods through the global `datetimePeriods`.

```html
<html>
  <head>
    <script src="../lib/datetime-periods.umd.js"></script>
    <script>
      // functions are stored globally on the window object
      console.log('window.datetimePeriods:', window.datetimePeriods)
    </script>
  </head>
  <body>
  </body>
</html>
```

### ESModules or Typescript

Just import the methods you need from the package.

```typescript
import { getDateTimeObject } from 'datetime-periods'
import * as dateTimePeriods from 'datetime-periods'

```

### Node and require

Just `require` the methods you need from the package.

```typescript
const getDateTimeObject = require('datetime-periods').getDateTimeObject
const dateTimePeriods = require('datetime-periods')
```

### Example

Some simple and easy to use examples can be found in the `example` folder in the repo.

There is also a plain JavaScript [example page](https://killercodemonkey.github.io/datetime-periods/example).

Or use [RunKit](https://npm.runkit.com/datetime-periods) to try it out!

## Methods

### getDateTimeObject(date: Date)

Transforms a date in an object respresentation.

**Result value**:

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

Example:

```typescript
import { getDateTimeObject } from 'datetime-periods'

const dateTimeObject = getDateTimeObject(new Date())

console.log(dateTimeObject)
```

Output:

```json
{
  "day": 14,
  "hour": 13,​
  "minute": 15,
  "month": 3​,
  "second": 15,
  "tzOffset": -60​,
  "year": 2019
}
```

### getDaysInMonth(year: number, month: number)

Returns the day count of a month and year. The month is based on numbers from 1 (january) to 12 (december).

Example:
```typescript
import { getDaysInMonth } from 'datetime-periods'

const daysInFebruary2019 = getDaysInMonth(2, 2019)

console.log(daysInFebruary2019)
```
Output:
```typescript
28
```

### getDateTimePeriods(value: Date, min: Date (optional), max: Date (optional), needed: NeededPeriods (optional))

This method contains the main functionality of the lib. The other methods are only internally used, but maybe someone finds them useful :).

It generates a data structure of valid years, months, days, hours, minutes and seconds for a given date and an optional min and max date. In addition to that it returns all the calculation dates as object representation.

If only some period values are interesting, it is possible to only retrieve, years, months, ... . Therefore use the `needed` parameter and pass an object of the values you do not need. This periods keys will be an empty array.

```typescript
getDateTimePeriods(new Date(), undefined, undefined, {
  days: false
  years: false
})
```

**Result value**
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

Example:

```typescript
import { getDateTimePeriods } from 'datetime-periods'

const value = new Date()

const min = new Date()
min.setFullYear(value.getFullYear() - 5)

const max = new Date()
max.setFullYear(value.getFullYear() + 5)

const result = getDateTimePeriods(value, min, max)

console.log(result)
```

Output:
```json
{
  "value": {
    "year": 2019,
    "month": 3,
    "day": 14,
    "hour": 14,
    "minute": 40,
    "second": 21,
    "tzOffset": -60
  },
  "originalValue": {
    "year": 2019,
    "month": 3,
    "day": 14,
    "hour": 14,
    "minute": 40,
    "second": 21,
    "tzOffset": -60
  },
  "originalValueChanged": false,
  "max": {
    "year": 2024,
    "month": 1,
    "day": 1,
    "hour": 1,
    "minute": 0,
    "second": 2,
    "tzOffset": -60
  },
  "min": {
    "year": 2014,
    "month": 3,
    "day": 14,
    "hour": 14,
    "minute": 40,
    "second": 21,
    "tzOffset": -60
  },
  "periods": {
    "days": [
      1,
      2,
      3,
      ...
      28,
      29,
      30,
      31
    ],
    "hours": [
      0,
      1,
      2,
      ...
      21,
      22,
      23
    ],
    "minutes": [
      0,
      1,
      2,
      3,
      ...
      56,
      57,
      58,
      59
    ],
    "months": [
      1,
      2,
      3,
      ...
      10,
      11,
      12
    ],
    "seconds": [
      0,
      1,
      2,
      ...
      57,
      58,
      59
    ],
    "years": [
      2014,
      2015,
      2016,
      ...
      2022,
      2023,
      2024
    ]
  }
}
```

#### Default min and max values

-   min: `value - 100 years`
-   max: `value + 100 years`

#### Special cases

Leading to a `console.warn`!

-   `min > max`: min and max are fall back to the default
-   `value < min`: value is set to min, sets `originalValueChanged` to `true`
-   `value > max`: value is set to max, sets `originalValueChanged` to `true`
