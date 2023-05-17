# 72-9 (Conceptual) How Pagination Works

## Shop.jsx

```js
useEffect(() => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);

  fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  })
    .then((res) => res.json())
    .then((cartProduct) => {
      console.log("Only Product in teh shopping ", cartProduct);
      const savedCart = [];
      // step 1: get id of the addedProduct
      for (const id in storedCart) {
        // step 2: get product from products state by using id
        const addedProduct = cartProduct.find((product) => product._id === id);
        if (addedProduct) {
          // step 3: add quantity
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          // step 4: add the added product to the saved cart
          savedCart.push(addedProduct);
        }
        // console.log('added Product', addedProduct)
      }
      // step 5: set the cart
      setCart(savedCart);
    });
}, []);
```

## Node index.js _productsByIds route_

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

## Node index.js _products route_

```js
app.get("/products", async (req, res) => {
  console.log(req.query);
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const skip = page * limit;
  const result = await productCollection
    .find()
    .skip(skip)
    .limit(limit)
    .toArray();
  res.send(result);
});
```
