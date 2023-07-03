# SUMMER-CAMP-SERVER_SIDE

## Package

1. cors: 2.8.5
2. dotenv: 16.1.4
3. express: 4.18.2
4. jsonwebtoken: 9.0.0
5. mongodb: 5.6.0
6. stripe: 12.10.0

## DATABASE ( All collection)

```js
const classesCollection = client.db("summerCamp").collection("classes");
const userCollection = client.db("summerCamp").collection("users");
const cardCollection = client.db("summerCamp").collection("card");
const enrollCollection = client.db("summerCamp").collection("enroll");
```

## DATABASE ( Jsonwebtoken generator )

```js
app.post("/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res.send({ token });
});
```

## Express Require

```js
const express = require("express");
const app = express();

app.use(express.json());
```

## CORS Require

```js
const cors = require("cors");
app.use(cors());
```

## Dotenv Config

```js
require("dotenv").config();
```

## Stripe require

```js
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
```
