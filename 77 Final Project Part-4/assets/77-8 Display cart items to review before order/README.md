# 77-8 Display cart items to review before order

## Delete with mongoDB with Express

```js
// Delete
app.delete("/carts/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await cardCollection.deleteOne(query);
  res.send(result);
});
```
