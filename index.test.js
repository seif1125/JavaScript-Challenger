// Test.assertEquals(binary(100), "1100100")
// Test.assertEquals(binary(1), "1")
// Test.assertEquals(binary(0), "0")
// Test.assertEquals(binary(69), "1000101")
// Test.assertEquals(binary(1023), "1111111111")
// Test.assertEquals(binary(511), "111111111")
// Test.assertEquals(binary(666), "1010011010")
// Test.assertEquals(binary(123), "1111011")

const binary = require('./index.js')

describe('binary', () => {
  test('convert decimal to binary', () => {
    expect(binary(10)).toBe('1010')
    expect(binary(100)).toBe('1100100')
    expect(binary(0)).toBe('0')
    expect(binary(1024)).toBe('numbers should be less than 1024')
  })
})
