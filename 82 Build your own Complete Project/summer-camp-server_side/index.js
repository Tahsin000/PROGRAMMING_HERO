const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const jwt = require('jsonwebtoken');

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("summer-camp start");
});


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
    const classesCollection = client.db("summerCamp").collection("classes");
    const userCollection = client.db("summerCamp").collection("users");
    const cardCollection = client.db("summerCamp").collection("card");
    const enrollCollection = client.db("summerCamp").collection("enroll");

    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

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
    }
    
    /*========== CARD ========== */
    app.get("/enroll/:email",verifyJWT, async (req, res) => {
      const email = req.params.email;
      const query = {email: email};
        const result = await enrollCollection.find(query).toArray();
        res.send(result);
      });
    
    /*========== CARD ========== */
    app.get("/carts", async (req, res) => {
      const email = req.query.email;
      // console.log(email);
      if (!email) {
        req.send([]);
      }
      const query = {email: email};
      const result = await cardCollection.find(query).toArray();
      res.send(result);
    });
    app.post("/carts", async (req, res) => {
      const items = req.body;
      // console.log(items);
      const result = await cardCollection.insertOne(items);
      res.send(result);
    });
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cardCollection.deleteOne(query);
      res.send(result);
    });

    /*========== USERS ========== */

    app.get('/users/admin/:email', async (req, res) =>{
      const email = req.params.email;

      // if(req.decoded.email !== email){
      //   return send({admin: false})
      // }

      const query = {email: email}
      const user = await userCollection.findOne(query);
      const result = {admin: (user?.role === "admin") ? "admin" : (user?.role === "instructor") ? "instructor" : "student"}
      res.send(result);
    })
    
    app.get("/users",verifyJWT, async (req, res) => { // verifyJWT, verifyAdmin,
      const result = await userCollection.find().toArray();
      res.send(result);
    });
    app.get("/users/frontend_view", async (req, res) => {
      
      const query = { role:"instructor" };
      const projection = { _id: 0, gender: 0, phone: 0, address: 0, role: 0 };
      const result = await userCollection.find(query).project(projection).toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newItem = req.body;

      //   console.log(newItem);
      const query = { email: newItem.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists" });
      }
      const result = await userCollection.insertOne(newItem);
      res.send(result);
    });

    app.patch("/users/user_update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const userRole = req.body;
      // console.log(userRole);
      const updateDoc = {
        $set: {
          name: userRole.name,
          email: userRole.email,
          photoUrl: userRole.photoUrl,
          gender: userRole.gender,
          phone: userRole.phone,
          address: userRole.address,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(userRole);
    });

    app.patch("/users/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const userRole = req.body;
      const updateDoc = {
        $set: {
          role: userRole.role,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    /* ========== CLASSES ========== */
    app.get("/add_class", verifyJWT, async (req, res) => { // verifyJWT, verifyAdmin,
      
      const result = await classesCollection.find().toArray();
      res.send(result);
    });
    app.get("/add_class/frontend_view", async (req, res) => {
      const query = { status:"approved" };
      const projection = {instructorEmail: 0, feedBack: 0 };
      const result = await classesCollection.find(query).project(projection).toArray();
      res.send(result);
    });

    app.post("/add_class", async (req, res) => {
      const newItem = req.body;
      newItem.availableSeats = parseInt(newItem.availableSeats);
      // console.log(newItem);
      const result = await classesCollection.insertOne(newItem);
      res.send(result);
    });

    app.delete("/add_class/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await classesCollection.deleteOne(query);
      res.send(result);
    });

    app.patch("/add_class/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const classesStatus = req.body;
      const updateDoc = {
        $set: {
          status: classesStatus.status,
          feedBack: classesStatus.feedBack,
        },
      };
      const result = await classesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });


    /*========== INSTRUCTOR CLASSES ========== */
    app.get("/instructor_classes", async (req, res) => {
        const email = req.query.email;
        // console.log(email);
        const query = {instructorEmail: email};
        const result = await classesCollection.find(query).toArray();
        res.send(result);
      });

      app.delete("/instructor_classes/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await classesCollection.deleteOne(query);
        res.send(result);
      });

      app.get("/instructor_classes/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await classesCollection.find(query).toArray();
        res.send(result);
      })

      app.patch("/instructor_classes/:id", async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const userRole = req.body;
        const updateDoc = {
            $set: {
                name: userRole.name,
                instructorName: userRole.instructorName,
                instructorEmail: userRole.instructorEmail,
                availableSeats: parseInt(userRole.availableSeats),
                price: userRole.price,
                image: userRole.image,
                status: userRole.status,
            },
        };
        const result = await classesCollection.updateOne(filter, updateDoc, options);
        res.send(result);
      })

      app.get('/instructor_classes_count/:email', async (req, res) =>{
        const email = req.params.email;
        console.log(email);
  
        // if(req.decoded.email !== email){
        //   return send({admin: false})
        // }
  
        const query = {instructorEmail: email, status: "approved" }
        const result = await classesCollection.find(query).toArray();
        // const result = {admin: (user?.role === "admin") ? "admin" : (user?.role === "instructor") ? "instructor" : "student"}
        res.send(result);
      })

// -----------------------------
  //create payment intent
  app.post('/create-payment-intent', async(req, res)=> {
    const {price} = req.body;
    const amount = parseInt(price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount,
      currency: "usd",
      payment_method_types: ['card']
    })
    res.send({
      clientSecret: paymentIntent.client_secret,
    })

  })

  // Payment related api
  app.post('/payments', async(req, res)=>{
    const payment = req.body;
    const insertResult = await enrollCollection.insertOne(payment);
    const query = {_id: {$in: payment.cartItems.map(id=> new ObjectId(id))}};
    const deleteResult = await cardCollection.deleteMany(query);

    // --------------------------------

      const filter = {_id: {$in: payment.classesItemId.map(id=> new ObjectId(id))}};
      // const classesStatus = req.body;
      const updateDoc = {
        $inc: { availableSeats: -1 }
      };
      const updateResult = await classesCollection.updateMany(filter, updateDoc);
      console.log(updateResult);

      // const seats = (classesStatus.availableSeats - 1).toString()
      // const updateDoc = {
      //   $set: {
      //     availableSeats: seats,
      //   },
      // };
      // const updateResult = await classesCollection.updateMany(
      //   filter,
      //   updateDoc
      // );
    res.send({insertResult, deleteResult});
  })
  // app.patch('/payments_availableSeats', async(req, res)=> {
  //   const classesStatus = req.body;
  //   console.log(classesStatus.classesItemId);
  // })

// ===================================================

  app.get("/admin-stats", verifyJWT, async(req, res)=>{ //verifyAdmin, verifyJWT

    const user = await userCollection.estimatedDocumentCount();
    const classes = await classesCollection.estimatedDocumentCount();
    const orders = await enrollCollection.estimatedDocumentCount();

    // ----------------------- alternative solution
    // const payment = await paymentCollection.find().toArray();
    // const revenue = payment.reduce((sum , payment) => sum + payment.price, 0)
    const pipeline = [
      {
        $group: {
          _id: null,
          total: { $sum: '$price' } // $round: ['$totalPrice', 2]
        }
      },
      {
        $project:{
          _id: 0,
          total: {$round: ['$total', 2]}
        }
      }
    ]
    const payment = await enrollCollection.aggregate(pipeline).toArray()
    const revenue = payment[0]?.total;

    res.send({
      revenue,
      user,
      classes,
      orders
    });
  })

  app.get("/orders-stats",verifyJWT,  async (req, res)=>{ // verifyJWT, verifyAdmin,

    const result = await enrollCollection.find().toArray();
    res.send(result);
  })


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

app.listen(port, () => {
  console.log(`summer-camp is on port ${port}`);
});
