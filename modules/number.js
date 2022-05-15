module.exports = {
  getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min))
  }
}