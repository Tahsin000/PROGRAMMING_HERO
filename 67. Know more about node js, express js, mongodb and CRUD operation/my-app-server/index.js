const express = require('express');
const cors = require('cors');   
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('SIMPLE CORD IS RUNNING')
})


const uri = "mongodb+srv://towahatahsin01:Wj5meZ2fmjDfnC3R@cluster0.rtoc8do.mongodb.net/?retryWrites=true&w=majority";

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
    const usersCollection = client.db('usersDb').collection('users');

    app.get('/users', async(req, res)=>{
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const user = await usersCollection.findOne(query);
      res.send(user);
    })

    app.post('/users', async(req, res)=>{
      const user = req.body;
      console.log('new user', user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.put('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);
      
      const filter = {_id: new ObjectId(id)}
      const option = {upsert: true};
      const updatedUser = {
        $set:{
          name: user.name,
          email: user.email
        }
      }
      const result = await usersCollection.updateOne(filter, updatedUser, option)
    })

    app.delete('/users/:id', async(req, res) =>{
      const id = req.params.id;
      console.log('please delete from database', id);
      const query = { _id: new ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
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

// towahatahsin01
// Wj5meZ2fmjDfnC3R

app.listen(port, ()=>{
    console.log(`SIMPLE CRUD IS RUNNING ON PROT, ${port}`);
})