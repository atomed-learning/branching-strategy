const { getRandomNumber } = require("./number")

const names = [
  "Gandalf the White",
  "Aragorn",
  "Legolas",
  "Gimli",
  "Frodo",
  "Sam",
  "Merry",
  "Pipin",
]

module.exports = {
  getRandomName() {
    const index = getRandomNumber(0, names.length)
    return names[index]
  }
}