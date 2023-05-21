const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rtoc8do.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const toyCollection = client.db("toyDb").collection("products");

    app.get("/products", async (req, res) => {
      const cursor = toyCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
    //   const options = {
    //     projection: { name: 1, sellerName: 1, sellerEmail: 1, subCategory: 1 },
    //   };
      const result = await toyCollection.findOne(query);
      res.send(result);
      //   res.send(id);
    });
    
    app.get("/my_products/:email", async (req, res) => {
        const email = req.params.email;
        const query = { sellerEmail: { $eq: email }};
        const cursor = toyCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
    });

// ============= DELETE ==================
    app.delete("/my_products/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await toyCollection.deleteOne(query);
        res.send(result);
      });

// ================= UPDATE =======================

    app.put('/my_products/:id', async(req, res)=>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const options = {upsert: true};
    const updatedProduct = req.body;
    const updateDoc = {
      $set:{
        category: updatedProduct.ToyCategory,
        availableQuantity: updatedProduct.availableQuantity,
        detailDescription: updatedProduct.detailDescription,
        picture: updatedProduct.picture,
        price: updatedProduct.price,
        rating: updatedProduct.rating,
        sellerName: updatedProduct.sellerName,
        name: updatedProduct.toyName,
      }
    }
    const result = await toyCollection.updateOne(filter, updateDoc, options);
    res.send(result);
  });

    app.post("/products", async (req, res) => {
      const product = req.body;
      console.log(product);
      const result = await toyCollection.insertOne(product);
      res.send(result);
    });
 
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Ami Hotash");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
