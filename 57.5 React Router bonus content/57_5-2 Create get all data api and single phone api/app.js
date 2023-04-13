const express = require('express');
const app = express();
const port = 4000;
const phones = require('./phones.json');

app.get('/', (req, res)=>{
    res.send("This is phone server");
});

app.get('/phones', (req, res)=>{
    res.send(phones);
});
app.get('/phones/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    
    const phone = phones.find(phone => phone._id === id);
    res.send(phone)
})
app.listen(port, ()=>{
    console.log(port);
})