# 72-4 (Interesting) Pagination Concept And Create Dynamic Pagination Buttons

## Node index.js _totalProducts route_

```js
app.get("/totalProducts", async (req, res) => {
  const result = await productCollection.estimatedDocumentCount();
  res.send({ totalProducts: result });
});
```

## Shop.jsx

```js
{
  /* Pagination */
}
<div className="pagination">
  {pageNumbers.map((number) => (
    <button key={number}>{number}</button>
  ))}
</div>;
```

## Pagination css

```css
.pagination {
  text-align: center;
  margin-bottom: 20px;
}
```
