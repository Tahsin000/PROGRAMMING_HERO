const express = require('express')
const app = express()
const port = 3000

const restaurants = require('./restaurants.json')
const cors = require('cors')
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res)=>{
  res.send(restaurants);
})

app.get('/chefs/:id', (req, res)=>{
  const id = req.params.id;
  // console.log(id);
  const selectedChef = restaurants.find(chef => chef._id === id);
  res.send(selectedChef);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})