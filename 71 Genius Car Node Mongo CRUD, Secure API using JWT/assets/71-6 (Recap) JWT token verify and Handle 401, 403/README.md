# 71-6 (Recap) JWT token verify and Handle 401, 403.

## Node index **VERIFYJWT FUNCTION**

```js
const verifyJWT = (req, res, next) => {
  console.log("HELLO");
  console.log(req.headers.authorization);
  authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  console.log("token inside verify JWT", token);
  jwt.verify(token, process.env.ACCESS_TOLEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};
```

## Node index **JWT ROUTE**

```js
app.post("/jwt", (req, res) => {
  const user = req.body;
  console.log(user);
  const token = jwt.sign(user, process.env.ACCESS_TOLEN_SECRET, {
    expiresIn: "1h",
  });
  console.log(token);
  res.send({ token });
});
```

## Node index **BOOKING ROUTE**

```js
app.get("/bookings", verifyJWT, async (req, res) => {
  const decoded = req.decoded;
  console.log("come back after verify", decoded);

  if (decoded.email !== req.query.email) {
    return res.status.send({ error: 1, message: "forbidden access" });
  }

  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await bookingCollection.find().toArray();
  res.send(result);
});
```
