# 72-8 (Advanced) Use Post To Load Some Products Using Keys

## node index.js _productsByIds route_

```js
app.post("/productsByIds", async (req, res) => {
  const ids = req.body;
  const objectIds = ids.map((id) => new ObjectId(id));
  const query = { _id: { $in: objectIds } };
  console.log(ids);
  const result = await productCollection.find(query).toArray();
  res.send(result);
});
```

## Card_Product.jsx

```js
const storedCart = getShoppingCart();
const ids = Object.keys(storedCart);
console.log(ids);

const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(ids),
});
const products = await loadedProducts.json(ids);
```
