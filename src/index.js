const uniqueRandomArray = require('unique-random-array')
const spiderManNames = require('./spider-man-names.json')

module.exports = {
  all: spiderManNames,
  random: uniqueRandomArray(spiderManNames),
}
