# 72-3 How To Deal With Unknown Feature Using Chatgpt And Google

## Node Index.js _TotalProducts Route_

```js
app.get("/totalProducts", async (req, res) => {
  const result = await productCollection.estimatedDocumentCount();
  res.send({ totalProducts: result });
});
```
