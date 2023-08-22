// Test.assertEquals(calcAge(10), 3650)
// Test.assertSimilar(calcAge(0), 0)
// Test.assertSimilar(calcAge(73), 26645)

const calcAge = require('./index.js')

describe('minMax', () => {
  test('find min and max number from array', () => {
    expect(calcAge(10)).toBe(3650)
  })
})
