// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())  // .json is not similar but close to JSON.parse
//     //   .then(json => console.log(json))

const url = 'https://reqres.in/api/users?page=2';
const data = document.getElementById('data');
fetch(url)
.then(x => x.json())
.then(json => data.innerText = JSON.stringify(json));


function loadData(url){
    fetch(url)
    .then(x => x.json())
    .then(json => console.log(json));
}

loadData(url);