# 71 Genius Car Node Mongo CRUD, Secure API using JWT

## Live View - [Click ME](https://car-doctor-70a24.web.app/)

## Code View - [Click ME](./my-app/src/routes/Routes.jsx)

## vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/",
      "methods": ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
    }
  ]
}
```
