const { getRandomNumber } = require("./number")

const names = [
  "Gandalf the Grey",
  "Aragorn",
  "Legolas",
  "Gimli",
  "Frodo",
  "Sam",
  "Merry",
  "Pipin",
  "Faramir",
]

module.exports = {
  getRandomName() {
    const index = getRandomNumber(0, names.length)
    return names[index]
  }
}