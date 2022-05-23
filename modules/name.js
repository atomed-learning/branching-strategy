const { getRandomNumber } = require("./number")

const firstNames = [
  "Gandalf the White",
  "Aragorn",
  "Legolas",
  "Gimli",
  "Frodo",
  "Samvel",
  "Merry",
  "Pipin",
  "Faramir",
]

const lastNames = [
  "Smith",
  "Jones",
  "Afonchenko",
  "Johnson",
]

module.exports = {
  getRandomName() {
    const firstNamesIndex = getRandomNumber(0, firstNames.length)
    const lastNamesIndex = getRandomNumber(0, lastNames.length)
    return `${firstNames[firstNamesIndex]} ${lastNames[lastNamesIndex]}`
  },
}