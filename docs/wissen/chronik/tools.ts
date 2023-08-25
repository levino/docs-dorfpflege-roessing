import { ifElse } from 'fp-ts-std/Function'
import { constant, flow } from 'fp-ts/function'
import { equals } from 'fp-ts/Ord'
import { Ord as StringOrd } from 'fp-ts/string'
export const getYear = (date: Date): string =>
  date.toLocaleString('de-DE', {
    year: 'numeric',
  })

export const dateAndTimeAsString = (date: Date): string =>
  date.toLocaleString('en', {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  })

const specifiesYearOnly: (date: Date) => boolean = flow(
  dateAndTimeAsString,
  equals(StringOrd)('1/1, 12:00:00 AM')
)

export const getDate = ifElse<Date, string>(constant(''))(
  (date: Date): string =>
    date.toLocaleString('de-DE', {
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
)(specifiesYearOnly)
