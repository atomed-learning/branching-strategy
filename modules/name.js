const { getRandomNumber } = require("./number")

const names = [
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
  "Frodo",
  "Sam",
  "Merry",
  "Pipin",
  "Boromir",
]

module.exports = {
  getRandomName() {
    const index = getRandomNumber(names.length)
    return names[index]
  }
}