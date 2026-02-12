/**
   * Returns the days count in a month.
   *
   * @param month - The month number (1-12)
   * @param year - The full year number
   * @returns The days in a month as number
   */ const $db641dfff82f38df$export$f645ddd439eb259d = (month, year)=>{
    return new Date(new Date(`${month < 12 ? year : year + 1}-${month < 12 ? month + 1 : 1}-1`).setDate(0)).getDate();
};
const $db641dfff82f38df$export$e93a6afd6b7250cf = {
    days: true,
    hours: true,
    minutes: true,
    months: true,
    seconds: true,
    years: true
};
const $db641dfff82f38df$export$791e47ce0c2bcc18 = (date)=>{
    return {
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        month: date.getMonth() + 1,
        second: date.getSeconds(),
        tzOffset: date.getTimezoneOffset(),
        year: date.getFullYear()
    };
};
const $db641dfff82f38df$export$9382c44291245bfa = (value = new Date(), min, max, needed = $db641dfff82f38df$export$e93a6afd6b7250cf)=>{
    needed = Object.assign({}, $db641dfff82f38df$export$e93a6afd6b7250cf, needed);
    value = new Date(value.setMilliseconds(0));
    const valueOriginal = new Date(value.getTime());
    let valueChanged = false;
    const defaultMin = new Date(new Date(value).setFullYear(value.getFullYear() - 100));
    const defaultMax = new Date(new Date(value).setFullYear(value.getFullYear() + 100));
    min = min ? new Date(min.setMilliseconds(0)) : defaultMin;
    max = max ? new Date(max.setMilliseconds(0)) : defaultMax;
    let minInMs = min.getTime();
    let maxInMs = max.getTime();
    let valueInMs = value.getTime();
    if (minInMs > maxInMs) {
        console.warn('min > max, setting min and max to defaults');
        min = defaultMin;
        minInMs = defaultMin.getTime();
        max = defaultMax;
        maxInMs = defaultMax.getTime();
    }
    if (minInMs > valueInMs) {
        console.warn('min > value, setting value to min');
        value = new Date(min);
        valueInMs = minInMs;
        valueChanged = true;
    }
    if (maxInMs < valueInMs) {
        console.warn('max < value, setting value to max');
        value = new Date(max);
        valueInMs = maxInMs;
        valueChanged = true;
    }
    const minDateObject = $db641dfff82f38df$export$791e47ce0c2bcc18(min);
    const maxDateObject = $db641dfff82f38df$export$791e47ce0c2bcc18(max);
    const currentDateObject = $db641dfff82f38df$export$791e47ce0c2bcc18(value);
    let days = needed.days ? Array.from({
        length: $db641dfff82f38df$export$f645ddd439eb259d(currentDateObject.month, currentDateObject.year)
    }, (_v, i)=>i + 1) : [];
    let months = needed.months ? Array.from({
        length: 12
    }, (_v, i)=>i + 1) : [];
    let hours = needed.hours ? Array.from({
        length: 24
    }, (_v, i)=>i) : [];
    let minutes = needed.minutes ? Array.from({
        length: 60
    }, (_v, i)=>i) : [];
    let seconds = needed.seconds ? Array.from({
        length: 60
    }, (_v, i)=>i) : [];
    // filter months and days and minutes and seconds
    if (currentDateObject.year === minDateObject.year) {
        months = months.filter((month)=>month >= minDateObject.month);
        if (currentDateObject.month === minDateObject.month) {
            days = days.filter((day)=>day >= minDateObject.day);
            if (currentDateObject.day === minDateObject.day) {
                hours = hours.filter((hour)=>hour >= minDateObject.hour);
                if (currentDateObject.hour === minDateObject.hour) {
                    minutes = minutes.filter((minute)=>minute >= minDateObject.minute);
                    if (currentDateObject.minute === minDateObject.minute) seconds = seconds.filter((second)=>second >= minDateObject.second);
                }
            }
        }
    }
    if (currentDateObject.year === maxDateObject.year) {
        months = months.filter((month)=>month <= maxDateObject.month);
        if (currentDateObject.month === maxDateObject.month) {
            days = days.filter((day)=>day <= maxDateObject.day);
            if (currentDateObject.day === maxDateObject.day) {
                hours = hours.filter((hour)=>hour <= maxDateObject.hour);
                if (currentDateObject.hour === maxDateObject.hour) {
                    minutes = minutes.filter((minute)=>minute <= maxDateObject.minute);
                    if (currentDateObject.minute === maxDateObject.minute) seconds = seconds.filter((second)=>second <= maxDateObject.second);
                }
            }
        }
    }
    // filter years
    const years = needed.years ? Array.from({
        length: maxDateObject.year - minDateObject.year + 1
    }, (_v, i)=>minDateObject.year + i) : [];
    return {
        max: maxDateObject,
        min: minDateObject,
        originalValue: $db641dfff82f38df$export$791e47ce0c2bcc18(valueOriginal),
        originalValueChanged: valueChanged,
        periods: {
            days: days,
            hours: hours,
            minutes: minutes,
            months: months,
            seconds: seconds,
            years: years
        },
        value: currentDateObject
    };
};


export {$db641dfff82f38df$export$f645ddd439eb259d as getDaysInMonth, $db641dfff82f38df$export$e93a6afd6b7250cf as defaultNeededPeriods, $db641dfff82f38df$export$791e47ce0c2bcc18 as getDateTimeObject, $db641dfff82f38df$export$9382c44291245bfa as getDateTimePeriods};
//# sourceMappingURL=datetime-periods.js.map
