const ftoc = function(num) {
  return Math.round(((num - 32) * 5 / 9) * 10) / 10;
}

const ctof = function(num) {
  return Math.round((num * 9 / 5 + 32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
