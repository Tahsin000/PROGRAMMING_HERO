# 71-4 Create JWT Token on server, Get jwt token on client side

## login file

```jsx
fetch("http://localhost:5000/jwt", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(loggedUser),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("jwt response", data);
    // Warning: Local storage is not the best (second best place) to store access token
    localStorage.setItem("car-access-token", data.token);
    navigate(from, { replace: true });
  });
```

## Node index.js

```jsx
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
