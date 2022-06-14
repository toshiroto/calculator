//jshint-esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
app.post('/', (req, res) => {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

res.send("The result of the calculation is" +" "+ result)
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req, res) => {

  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);


let bmi = weight / (height * height);

res.send("Your BMI is" +" "+ bmi)
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
