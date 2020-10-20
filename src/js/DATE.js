function monthDays(year, month) {
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0) {
    return 31
  } else if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return 29
    } else {
      return 28
    }
  } else {
    return 30
  }
}
module.exports = {monthDays}
