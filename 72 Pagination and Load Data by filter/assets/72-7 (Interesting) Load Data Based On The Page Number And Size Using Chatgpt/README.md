# 72-7 (Interesting) Load Data Based On The Page Number And Size Using Chatgpt

## Node index.js

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

## Shop.jsx

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

## Shop.jsx Pagination

```js
<select value={itemsPerPage} onChange={handleSelectChange}>
  {options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>
```
