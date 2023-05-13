
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const app = express()
const port =  process.env.PORT || 5000;
const cors = require('cors');   
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

const user = [
    {_id:1, name:"Tahsin", email:"tahsin@gmail.com"},
    {_id:2, name:"Abrar", email:"abrar@gmail.com"},
    {_id:3, name:"towaha", email:"towaha@gmail.com"},
]

app.get('/', (req, res) => {
    res.send('SIMPLE CORD IS RUNNING')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rtoc8do.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // const database = client.db('usersDb');
    const coffeeCollection = client.db('chocolateDB').collection('chocolates');


    /* ===============
    DISPLAY CODE
    ===============*/ 
    app.get('/chocolate', async(req, res)=>{
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });


    /* ===============
    INSERT CODE
    ===============*/ 
    app.post('/chocolate', async(req, res)=>{
      const user = req.body;
      console.log('new user', user);
      const result = await coffeeCollection.insertOne(user);
      res.send(result);
    });


    /* ===============
    DELETE CODE
    ===============*/ 
    app.delete('/chocolate/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    
    /* ===============
    FIND DISPLAY CODE
    ===============*/ 
    app.get('/chocolate/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });

    
    /* ===============
    UPDATE CODE
    ===============*/ 
    app.put('/chocolate/:id', async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedChocolate = req.body;
      const coffee = {
        $set:{
          name: updatedChocolate.name,
          country: updatedChocolate.country,
          category: updatedChocolate.category,
          photo: updatedChocolate.photo,
        }
      }
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send(result);
    });

    app.get('/coffee', async(req, res)=>{
      res.send(user);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})