import { getDateTimeObject, getDaysInMonth, getDateTimePeriods } from "../src"

describe('index.ts', () => {
  describe('#getDaysInMonth()', () => {
    it('returns correct days in month for month and year', () => {
      expect(getDaysInMonth(1, 2019)).toBe(31)
      expect(getDaysInMonth(2, 2019)).toBe(28)
      expect(getDaysInMonth(3, 2019)).toBe(31)
      expect(getDaysInMonth(4, 2019)).toBe(30)
      expect(getDaysInMonth(5, 2019)).toBe(31)
      expect(getDaysInMonth(6, 2019)).toBe(30)
      expect(getDaysInMonth(7, 2019)).toBe(31)
      expect(getDaysInMonth(8, 2019)).toBe(31)
      expect(getDaysInMonth(9, 2019)).toBe(30)
      expect(getDaysInMonth(10, 2019)).toBe(31)
      expect(getDaysInMonth(11, 2019)).toBe(30)
      expect(getDaysInMonth(12, 2019)).toBe(31)

      expect(getDaysInMonth(2, 2020)).toBe(29)
    })
  })

  describe('#getDateTimeObject()', () => {
    it('returns date time object', () => {
      const date = new Date(2019, 4, 4, 3, 2, 1, 0)
      expect(getDateTimeObject(date)).toEqual({
        year: 2019,
        month: 5,
        day: 4,
        hour: 3,
        minute: 2,
        second: 1,
        tzOffset: date.getTimezoneOffset()
      })
    })
  })

  describe('#getDaysInMonth()', () => {
    it('returns correct days in month for month and year', () => {
      expect(getDaysInMonth(1, 2019)).toBe(31)
      expect(getDaysInMonth(2, 2019)).toBe(28)
      expect(getDaysInMonth(3, 2019)).toBe(31)
      expect(getDaysInMonth(4, 2019)).toBe(30)
      expect(getDaysInMonth(5, 2019)).toBe(31)
      expect(getDaysInMonth(6, 2019)).toBe(30)
      expect(getDaysInMonth(7, 2019)).toBe(31)
      expect(getDaysInMonth(8, 2019)).toBe(31)
      expect(getDaysInMonth(9, 2019)).toBe(30)
      expect(getDaysInMonth(10, 2019)).toBe(31)
      expect(getDaysInMonth(11, 2019)).toBe(30)
      expect(getDaysInMonth(12, 2019)).toBe(31)

      expect(getDaysInMonth(2, 2020)).toBe(29)
    })
  })

  describe('#getDateTimePeriods()', () => {
    it('returns correct current Date and valid dates and times for default max and min', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      expect(getDateTimePeriods(currentDate)).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 201 }, (_v, i: number) => 1919 + i),
          months: Array.from({ length: 12 }, (_v, i: number) => i + 1),
          days: Array.from({ length: 31 }, (_v, i: number) => i + 1),
          hours: Array.from({ length: 24 }, (_v, i: number) => i),
          minutes: Array.from({ length: 60 }, (_v, i: number) => i),
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('returns correct dates and times for value = max', () => {
      const currentDate = new Date(2019, 4, 18, 12, 30, 45, 0)
      expect(getDateTimePeriods(currentDate, undefined, currentDate)).toEqual({
        value: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: new Date(1919, 4, 18, 12, 30, 45, 0).getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 101 }, (_v, i: number) => 1919 + i),
          months: Array.from({ length: 5 }, (_v, i: number) => i + 1),
          days: Array.from({ length: 18 }, (_v, i: number) => i + 1),
          hours: Array.from({ length: 13 }, (_v, i: number) => i),
          minutes: Array.from({ length: 31 }, (_v, i: number) => i),
          seconds: Array.from({ length: 46 }, (_v, i: number) => i)
        }
      })
    })

    it('returns correct dates and times for value = min', () => {
      const currentDate = new Date(2019, 4, 18, 12, 30, 45, 0)
      expect(getDateTimePeriods(currentDate, currentDate, undefined)).toEqual({
        value: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 101 }, (_v, i: number) => 2019 + i),
          months: Array.from({ length: 8 }, (_v, i: number) => i + 5),
          days: Array.from({ length: 14 }, (_v, i: number) => i + 18),
          hours: Array.from({ length: 12 }, (_v, i: number) => i + 12),
          minutes: Array.from({ length: 30 }, (_v, i: number) => i + 30),
          seconds: Array.from({ length: 15 }, (_v, i: number) => i + 45)
        }
      })
    })

    it('returns correct dates and times for value, min, max', () => {
      const currentDate = new Date(2019, 4, 18, 12, 30, 45, 0)
      const minDate = new Date(2019, 4, 18, 11, 30, 45, 0)
      const maxDate = new Date(2019, 4, 18, 14, 30, 45, 0)
      expect(getDateTimePeriods(currentDate, minDate, maxDate)).toEqual({
        value: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 12,
          minute: 30,
          second: 45,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 14,
          minute: 30,
          second: 45,
          tzOffset: maxDate.getTimezoneOffset()
        },
        min: {
          year: 2019,
          month: 5,
          day: 18,
          hour: 11,
          minute: 30,
          second: 45,
          tzOffset: minDate.getTimezoneOffset()
        },
        periods: {
          years: [2019],
          months: [5],
          days: [18],
          hours: [11, 12, 13, 14],
          minutes: Array.from({ length: 60 }, (_v, i: number) => i),
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('uses default min and max, if min > max', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      const minDate = new Date(new Date(currentDate).setFullYear(2018))
      const maxDate = new Date(new Date(currentDate).setFullYear(2017))
      expect(getDateTimePeriods(currentDate, minDate, maxDate)).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: maxDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: minDate.getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 201 }, (_v, i: number) => 1919 + i),
          months: Array.from({ length: 12 }, (_v, i: number) => i + 1),
          days: Array.from({ length: 31 }, (_v, i: number) => i + 1),
          hours: Array.from({ length: 24 }, (_v, i: number) => i),
          minutes: Array.from({ length: 60 }, (_v, i: number) => i),
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('uses min as value if value < min', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      const minDate = new Date(new Date(currentDate).setFullYear(2020))
      const maxDate = new Date(new Date(currentDate).setFullYear(2021))
      expect(getDateTimePeriods(currentDate, minDate, maxDate)).toEqual({
        value: {
          year: 2020,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: true,
        max: {
          year: 2021,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: maxDate.getTimezoneOffset()
        },
        min: {
          year: 2020,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: minDate.getTimezoneOffset()
        },
        periods: {
          years: [2020, 2021],
          months: [12],
          days: [30, 31],
          hours: Array.from({ length: 12 }, (_v, i: number) => i + 12),
          minutes: Array.from({ length: 30 }, (_v, i: number) => i + 30),
          seconds: [59]
        }
      })
    })

    it('uses max as value if value > max', () => {
      const currentDate = new Date(2020, 11, 30, 12, 30, 59, 0)
      const minDate = new Date(new Date(currentDate).setFullYear(2018))
      const maxDate = new Date(new Date(currentDate).setFullYear(2019))
      expect(getDateTimePeriods(currentDate, minDate, maxDate)).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2020,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: true,
        max: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: maxDate.getTimezoneOffset()
        },
        min: {
          year: 2018,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: minDate.getTimezoneOffset()
        },
        periods: {
          years: [2018, 2019],
          months: Array.from({ length: 12 }, (_v, i: number) => i + 1),
          days: Array.from({ length: 30 }, (_v, i: number) => i + 1),
          hours: Array.from({ length: 13 }, (_v, i: number) => i),
          minutes: Array.from({ length: 31 }, (_v, i: number) => i),
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('returns correct current neededPeriods - no days and seconds', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      expect(getDateTimePeriods(currentDate, undefined, undefined, { days: false, seconds: false })).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 201 }, (_v, i: number) => 1919 + i),
          months: Array.from({ length: 12 }, (_v, i: number) => i + 1),
          days: [],
          hours: Array.from({ length: 24 }, (_v, i: number) => i),
          minutes: Array.from({ length: 60 }, (_v, i: number) => i),
          seconds: []
        }
      })
    })

    it('returns correct current neededPeriods - no years and months', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      expect(getDateTimePeriods(currentDate, undefined, undefined, { years: false, months: false })).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: [],
          months: [],
          days: Array.from({ length: 31 }, (_v, i: number) => i + 1),
          hours: Array.from({ length: 24 }, (_v, i: number) => i),
          minutes: Array.from({ length: 60 }, (_v, i: number) => i),
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('returns correct current neededPeriods - no minutes and hours', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      expect(getDateTimePeriods(currentDate, undefined, undefined, { minutes: false, hours: false })).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: Array.from({ length: 201 }, (_v, i: number) => 1919 + i),
          months: Array.from({ length: 12 }, (_v, i: number) => i + 1),
          days: Array.from({ length: 31 }, (_v, i: number) => i + 1),
          hours: [],
          minutes: [],
          seconds: Array.from({ length: 60 }, (_v, i: number) => i)
        }
      })
    })

    it('returns correct current neededPeriods - nothing :)', () => {
      const currentDate = new Date(2019, 11, 30, 12, 30, 59, 0)
      expect(getDateTimePeriods(currentDate, undefined, undefined, { years: false, months: false, days: false, hours: false, minutes: false, seconds: false })).toEqual({
        value: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValue: {
          year: 2019,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        originalValueChanged: false,
        max: {
          year: 2119,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        min: {
          year: 1919,
          month: 12,
          day: 30,
          hour: 12,
          minute: 30,
          second: 59,
          tzOffset: currentDate.getTimezoneOffset()
        },
        periods: {
          years: [],
          months: [],
          days: [],
          hours: [],
          minutes: [],
          seconds: []
        }
      })
    })
  })
})
