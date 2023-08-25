import { describe, test, expect } from 'vitest'
import { dateAndTimeAsString, getDate } from './tools'

describe('tools', () => {
  describe('dateAndTimeAsString', () => {
    test('Renders date to string', () =>
      expect(dateAndTimeAsString(new Date('0822-01-01'))).toEqual(
        '1/1, 12:00:00 AM'
      ))
  })
  describe('getDate', () => {
    test('Returns day and month for date that reflects a specific day', () => {
      expect(getDate(new Date('0222-01-02'))).toEqual('2. Januar')
    })
    test('Recognizes date which reflect only a year', () => {
      expect(getDate(new Date('0729-01-01'))).toEqual('')
    })
  })
})
