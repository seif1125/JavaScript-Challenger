// Test.assertEquals(convert(6), 360)
// Test.assertEquals(convert(4), 240)
// Test.assertEquals(convert(8), 480)
// Test.assertEquals(convert(60), 3600)

const minMax = require('./index.js')
const convert = require('./index.js')
let expected = '[8, 11]'
describe('minMax', () => {
  test('find min and max number from array', () => {
    expect(minMax([11, 8])).toBe(expected)
  })
})
