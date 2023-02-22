
function loadData1(){
    data = 'https://jsonplaceholder.typicode.com/users';
    fetch(data)
    .then(x => x.json())
    .then(json => console.log(json));
}