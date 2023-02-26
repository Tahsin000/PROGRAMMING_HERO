# **Handle Random user with nested API dataPreviousNext**

1. random name generator - [click ME](https://randomuser.me/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>O go Bideshini</title>
    <style>
      img {
        width: 200px;
        border-radius: 50%;
      }
      .flex_center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    </style>
  </head>
  <body>
    <h1>Looking For bideshini</h1>
    <button onclick="loadUser()">random user</button>
    <div class="flex_center">
      <img id="img" src="" alt="" />
      <h1>Name: <span id="name"></span></h1>
      <h3>Gender: <span id="gender"></span></h3>
      <h3>Location: <span id="location"></span></h3>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```
