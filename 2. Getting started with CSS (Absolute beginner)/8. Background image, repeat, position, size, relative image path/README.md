# 8. Background image, repeat, position, size, relative image path

## Keyword

- Background image
- Background image position

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <style>
   header{
    height:15rem;
    background-color:red;
    background-image: url('https://i.pinimg.com/736x/6f/59/d0/6f59d0412dbe92bfd341e61370a4e041.jpg');
    background-color: lightgreen;
    color:white;
    font-size:3rem;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
   }
   *{
     margin:0;
   }
  </style>
  <body>
  <header>
    Hello BABY !
  </header>

  </body>
</html>
```