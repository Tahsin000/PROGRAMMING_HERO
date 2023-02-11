# Event bubble and Stop propagating

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubble</title>
</head>
<style>
    #item-2{
        border: 2px solid rebeccapurple;
    }
    ul{
        border:2px solid tomato;
    }
    body {
        border: 2px solid green;
    }
    section{
        border: 2px solid blue;
    }
</style>
<body id="body">
    <h1>Exploring Event Bubble</h1>
    <section id="list-container">
        <ul id="list-ul">
            <li id="item-1">Lorem, ipsum.</li>
            <li id="item-2">Id, nostrum.</li>
            <li id="item-3">Incidunt, consectetur.</li>
            <li id="item-4">Dolor, minima!</li>
            <li id="item-5">Tempore, eum.</li>
            <li id="item-6">Ullam, hic?</li>
        </ul>
    </section>
    <script>
        document.getElementById('item-2').addEventListener('click', (event)=>{
            console.log('item-2 clicked');
            event.stopPropagation();
        });
        document.getElementById('list-ul').addEventListener('click', ()=>{
            console.log('ul clicked');
        });
        document.getElementById('list-container').addEventListener('click', ()=>{
            console.log('Section clicked');
        });
        document.getElementById('body').addEventListener('click', ()=>{
            console.log('body clicked');
        });
        </script>
</body>
</html>
```