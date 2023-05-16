# 71-5 (advanced) Send jwt token in the server, verify and decode jwt token

## Node index.js _VERIFYJWT FUNCTION_

```js
const verifyJWT = (req, res, next) => {
  console.log("Hitting verity jwt");
  console.log(req.headers.authorization);
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  console.log("token inside verify JWT", token);
  jwt.verify(token, process.env.ACCESS_TOLEN_SECRET, (error, decoded) => {
    if (error) {
      return res
        .status(403)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};
```

## Node index.js _JWT ROUTE_

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

## Node index.js _BOOKINGS ROUTE_

```js
app.get("/bookings", verifyJWT, async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await bookingCollection.find().toArray();
  res.send(result);
});
```
