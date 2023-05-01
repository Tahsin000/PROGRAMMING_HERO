const express = require('express');
const app = express();
const port = 5000;

const hotels = require('./hotels.json')
const locations = require('./locations.json')
const cors = require('cors')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Tahsin');
})

// locations
app.get('/locations', (req, res)=>{
    res.send(locations);
})

// find location
app.get('/locations/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedLocation = locations.find(location => location._id === id);
    res.send(selectedLocation);
})

// hotels
app.get('/hotels', (req, res)=>{
    res.send(hotels);
})

// filter location by location params
app.get('/locations-hotels/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedHotels = hotels.filter(hotel => hotel._location_id === id);
    res.send(selectedHotels);
})



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})