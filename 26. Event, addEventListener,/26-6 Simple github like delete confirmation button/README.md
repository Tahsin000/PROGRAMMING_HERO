# 26-6 Simple github like delete confirmation button

### mouse click :: ‘click’

### mouse enter :: ‘mouseenter’

### mouse move :: ‘mousemove’

### key-down :: ‘keydown'

### key-press :: ‘keypress'

### key-up :: ‘keyup’

## github.html

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="userTitle">My Secret info</h1>
    <input type="text" placeholder="user input" id="userInput">
    <button id="Delete-Btn" disabled>Delete</button>
    <script>
        document.getElementById('userInput').addEventListener("keyup", ()=>{
            const userInput = document.getElementById('userInput').value;
            const userBtn = document.getElementById('Delete-Btn');
            if (userInput === 'Delete') userBtn.removeAttribute('disabled');
            else userBtn.setAttribute('disabled', true);
        });
        document.getElementById('Delete-Btn').addEventListener("click", ()=>{
            document.getElementById('userTitle').innerText = '';
            document.getElementById('userInput').value = '';

        });
    </script>
</body>
</html>
```

## more-events.html

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Events</title>
</head>
<body>
    <h1>Explore More events</h1>
    <input type="text" id="text-field">
    <button id="btn-more">Events</button>
    <script>
        // document.getElementById('text-field').addEventListener("focus", ()=>{
        //     console.log('Event triggered inside the input field');
        // });
        // document.getElementById('text-field').addEventListener("blur", ()=>{
        //     console.log('Event triggered inside the input field blur');
        // });
        // document.getElementById('text-field').addEventListener("keydown", (event)=>{
        //     console.log(event.target.value);
        // });
        // document.getElementById('text-field').addEventListener("keypress", (event)=>{
        //     console.log(event.target.value);
        // });
        document.getElementById('text-field').addEventListener("keyup", (event)=>{
            console.log(event.target.value);
        });
        document.getElementById('btn-more').addEventListener("mousemove", ()=>{
            console.log('Event Triggered');
        });
    </script>
</body>
</html>
```
