const express = require("express")
const Name = require("./modules/name")

const app = express()

app.get('/get-name', (req, res) => {
  const name = Name.getRandomName()
  res.json({ name, source: 'express' });
})

app.listen(3000, () => {
  console.log("Server is running on 3000")
})