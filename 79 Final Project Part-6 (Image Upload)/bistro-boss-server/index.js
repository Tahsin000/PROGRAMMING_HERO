const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const jwt = require('jsonwebtoken');

// middleware
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({error: true, message: 'unauthorized access'});
  }
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err){
      return res.status(401).send({error: true, message: 'unauthorized access'})
    }
    req.decoded = decoded;
    next();
  })

}




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
    const userCollection = client.db("bistroDB").collection("users")
    const menuCollection = client.db("bistroDB").collection("menu")
    const reviewsCollection = client.db("bistroDB").collection("reviews")
    const cardCollection = client.db("bistroDB").collection("card")

    

    app.post('/jwt', (req, res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
      res.send({token});
    })

    
    const verifyAdmin = async(req, res, next) => {
      const email = req.decoded.email;
      const query = {email: email};
      const user = await userCollection.findOne(query);

      if (user?.role !== "admin"){
        return res.status(403).send({error: true, message: "forbidden message"})
      }
      next();

      // const authorization = req.headers.authorization;
      // if (!authorization) {
      //   return res.status(401).send({error: true, message: 'unauthorized access'});
      // }
      // const token = authorization.split(' ')[1];
    
      // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      //   if (err){
      //     return res.status(401).send({error: true, message: 'unauthorized access'})
      //   }
      //   req.decoded = decoded;
      //   next();
      // })
    
    }

    // 0. do not show secure links to those who should not see the links
    // 1. use jwt token: verifyJWT
    // 2. use verifyAdmin middleware

    // User related API
    app.get('/users', verifyJWT, verifyAdmin, async(req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      
      const query = {email: user.email }
      const existingUser = await userCollection.findOne(query);
      if (existingUser){
        return res.send({message: "user already exists"});
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    })


    // security layer verifyJWT
    // email same
    // check admin
    app.get('/users/admin/:email', verifyJWT, async (req, res) =>{
      const email = req.params.email;

      if(req.decoded.email !== email){
        return send({admin: false})
      }

      const query = {email: email}
      const user = await userCollection.findOne(query);
      const result = {admin: user?.role === "admin"}
      res.send(result);
    })

    app.patch('/users/admin/:id', async (req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateDoc = {
        $set: {
          role: "admin"
        },
      };

      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    })

    // Menu related API
    app.get('/menu', async(req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    })
    
    app.post('/menu', verifyJWT, verifyAdmin, async(req, res) => {
      const newItem = req.body;

      const result = await menuCollection.insertOne(newItem);
      res.send(result);
    })

    app.delete('/menu/:id', verifyJWT, verifyAdmin, async (req, res)=>{
      const id = req.params.id;
      // console.log(id);
      const query = {_id: new ObjectId(id)};
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    })

    // reviews Related API
    app.get('/reviews', async(req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    })

    // cart collection API

    app.get("/carts", verifyJWT, async(req, res)=>{
      const email = req.query.email;
      if (!email){
        req.send([]);
      }

      const decodedEmail = req.decoded.email;
      if (email !== decodedEmail){
        return res.status(401).send({error: true, message: 'forbidden access'})
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