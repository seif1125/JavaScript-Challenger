// Test.assertEquals(matchHouses(1), 6)
// Test.assertEquals(matchHouses(0), 0)
// Test.assertEquals(matchHouses(17), 86)
// Test.assertEquals(matchHouses(36), 181)
// Test.assertEquals(matchHouses(15), 76)
// Test.assertEquals(matchHouses(99), 496)
// Test.assertEquals(matchHouses(3), 16)
// Test.assertEquals(matchHouses(87), 436)

const matchHouses = require('./index.js');

describe("matchstick houses", () => {
    test('MATXHSTICK HOUSES FOR  N STEPS result (6*N)-(N-1)', () => {
   expect(matchHouses(1)).toBe(6);
   expect(matchHouses(0)).toBe(0);
   expect(matchHouses(15)).toBe(76);

    })})