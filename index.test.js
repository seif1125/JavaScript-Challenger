// Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true)
// Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true)
// Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false)
// Test.assertEquals(timeForMilkAndCookies(new Date(2010, 11, 2)), false)
// Test.assertEquals(timeForMilkAndCookies(new Date(1980, 9, 24)), false)
const timeForMilkAndCookies = require('./index.js')
describe('minMax', () => {
  test('find min and max number from array', () => {
    expect(timeForMilkAndCookies(new Date(3000, 11, 24))).toBe(true)
  })
})
