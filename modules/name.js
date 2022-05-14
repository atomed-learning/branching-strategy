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
    const index = Math.floor(Math.random() * names.length)
    return names[index]
  }
}