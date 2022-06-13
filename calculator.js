//jshint-esversion:6
const express = require('express');
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
