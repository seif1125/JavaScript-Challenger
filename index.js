// How to convert decimal to binary
// Conversion steps:
//  1-Divide the number by 2.
//  2-Get the integer quotient for the next iteration.
//  3-Get the remainder for the binary digit.
//  4-Repeat the steps until the quotient is equal to 0.

function binary(decimal) {
  if (decimal < 1024 && decimal > 0) {
    let processedDecimal = decimal
    let binaryBits = ''

    while (processedDecimal > 0) {
      binaryBits = (processedDecimal % 2) + binaryBits
      processedDecimal = Math.floor(processedDecimal / 2)
    }
    return binaryBits
  } else if (decimal == 0) {
    return '0'
  } else {
    return 'numbers should be less than 1024'
  }
}
module.exports = binary
