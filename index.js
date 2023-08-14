function timeForMilkAndCookies(date) {
  if (date) {
    if (date.getMonth() == 11 && date.getDate() == 24) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
module.exports = timeForMilkAndCookies
