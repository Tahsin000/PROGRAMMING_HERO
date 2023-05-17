# 72-6 Set Page Size State And Send Search Query To Server

## Node index.js

```js
app.get("/products", async (req, res) => {
  console.log(req.query);
  const result = await productCollection.find().toArray();
  res.send(result);
});
```

## Node Shop.jsx

```js
const pageNumbers = [...Array(totalPages).keys()];
useEffect(() => {
  async function fetchData() {
    const response = await fetch(
      `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
    );
    const data = await response.json();
    setProducts(data);
  }
  fetchData();
}, [currentPage, itemsPerPage]);
```
