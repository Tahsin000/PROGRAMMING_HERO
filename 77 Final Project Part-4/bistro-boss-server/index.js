const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    
    // await client.connect();
    const menuCollection = client.db("bistroDB").collection("menu")
    const reviewsCollection = client.db("bistroDB").collection("reviews")
    const cardCollection = client.db("bistroDB").collection("card")

    app.get('/menu', async(req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    })

    app.get('/reviews', async(req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    })

    // cart collection API

    app.get("/carts", async(req, res)=>{
      const email = req.query.email;
      if (!email){
        req.send([]);
      }
      const query = {email: email};
      const result = await cardCollection.find(query).toArray();
      res.send(result);
    })

    // cart collection 
    app.post('/carts', async (req, res)=>{
      const items = req.body;
      console.log(items);
      const result = await cardCollection.insertOne(items);
      res.send(result);
    })

    // Delete
    app.delete('/carts/:id', async (req, res)=>{
      const id = req.params.id;
      console.log(id);
      const query = {_id: new ObjectId(id)};
      const result = await cardCollection.deleteOne(query);
      res.send(result);
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




app.get('/', (req, res) =>{
    res.send('boss is sitting');
})

app.listen(port, ()=>{
    console.log(`bistro boss is on port ${port}`);
})

/*
* 
NAMING CONVENTION
users: userCollection
app.get('/users')
app.get('/users/:id')
app.post('/users
app.patch('/users/:id')
app.put('/users/:id')
app.delete('/users/:id')

* 
*/