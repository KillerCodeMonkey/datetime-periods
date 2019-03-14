/**
   * Returns the days count in a month.
   *
   * @param month - The month number (1-12)
   * @param year - The full year number
   * @returns The days in a month as number
   */
export function getDaysInMonth(month: number, year: number): number {
  return new Date(new Date(`${month < 12 ? year : year + 1}-${month < 12 ? month + 1 : 1}-1`).setDate(0)).getDate()
}

export interface DateTimeObject {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  tzOffset: number
}

export interface GetValidDatesResult {
  value: DateTimeObject
  originalValue: DateTimeObject
  originalValueChanged: boolean
  max: DateTimeObject
  min: DateTimeObject
  periods: {
    days: number[]
    hours: number[]
    minutes: number[]
    months: number[]
    seconds: number[]
    years: number[]
  }
}

/**
   * Returns a date object based on a JS date.
   *
   * @param date - A javascript date
   * @returns The date as a plain old javascript object representation
   */
export function getDateTimeObject(date: Date): DateTimeObject {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    tzOffset: date.getTimezoneOffset()
  }
}

/**
   * Returns a valid list of years down to seconds for a date and min and max date.
   *
   * @param value - A javascript date
   * @param min - The optional min date
   * @param max - The optional max date
   * @returns The date params as object representation and the valid periods
   */
export function getDateTimePeriods(value: Date = new Date(), min?: Date, max?: Date): GetValidDatesResult {
  value = new Date(value.setMilliseconds(0))
  const valueOriginal = new Date(value)
  let valueChanged = false
  const defaultMin = new Date(new Date(value).setFullYear(value.getFullYear() - 100))
  const defaultMax = new Date(new Date(value).setFullYear(value.getFullYear() + 100))

  min = min ? new Date(min.setMilliseconds(0)) : defaultMin
  max = max ? new Date(max.setMilliseconds(0)) : defaultMax

  let minInMs = min.getTime()
  let maxInMs = max.getTime()
  let valueInMs = value.getTime()

  if (minInMs > maxInMs) {
    console.warn('min > max, setting min and max to defaults')
    min = defaultMin
    minInMs = defaultMin.getTime()
    max = defaultMax
    maxInMs = defaultMax.getTime()
  }

  if (minInMs > valueInMs) {
    console.warn('min > value, setting value to min')
    value = new Date(min)
    valueInMs = minInMs
    valueChanged = true
  }

  if (maxInMs < valueInMs) {
    console.warn('max < value, setting value to max')
    value = new Date(max)
    valueInMs = maxInMs
    valueChanged = true
  }

  const minDateObject = getDateTimeObject(min)
  const maxDateObject = getDateTimeObject(max)
  const currentDateObject = getDateTimeObject(value)

  let days = Array.from({ length: getDaysInMonth(currentDateObject.month, currentDateObject.year) }, (_v, i: number) => i + 1)
  let months = Array.from({ length: 12 }, ( _v, i: number) => i + 1)
  let hours = Array.from({ length: 24 }, ( _v, i: number) => i)
  let minutes = Array.from({ length: 60 }, ( _v, i: number) => i)
  let seconds = Array.from({ length: 60 }, ( _v, i: number) => i)

  // filter months and days and minutes and seconds
  if (currentDateObject.year === minDateObject.year) {
    months = months.filter((month: number) => month >= minDateObject.month)

    if (currentDateObject.month === minDateObject.month) {
      days = days.filter((day: number) => day >= minDateObject.day)

      if (currentDateObject.day === minDateObject.day) {
        hours = hours.filter((hour: number) => hour >= minDateObject.hour)

        if (currentDateObject.hour === minDateObject.hour) {
          minutes = minutes.filter((minute: number) => minute >= minDateObject.minute)

          if (currentDateObject.minute === minDateObject.minute) {
            seconds = seconds.filter((second: number) => second >= minDateObject.second)
          }
        }
      }
    }
  }
  if (currentDateObject.year === maxDateObject.year) {
    months = months.filter((month: number) => month <= maxDateObject.month)

    if (currentDateObject.month === maxDateObject.month) {
      days = days.filter((day: number) => day <= maxDateObject.day)

      if (currentDateObject.day === maxDateObject.day) {
        hours = hours.filter((hour: number) => hour <= maxDateObject.hour)

        if (currentDateObject.hour === maxDateObject.hour) {
          minutes = minutes.filter((minute: number) => minute <= maxDateObject.minute)

          if (currentDateObject.minute === maxDateObject.minute) {
            seconds = seconds.filter((second: number) => second <= maxDateObject.second)
          }
        }
      }
    }
  }

  // filter years
  const years = Array.from({ length: maxDateObject.year - minDateObject.year + 1 }, (_v, i: number) => minDateObject.year + i)

  return {
    value: currentDateObject,
    originalValue: getDateTimeObject(valueOriginal),
    originalValueChanged: valueChanged,
    max: maxDateObject,
    min: minDateObject,
    periods: {
      days,
      hours,
      minutes,
      months,
      seconds,
      years
    }
  }
}
