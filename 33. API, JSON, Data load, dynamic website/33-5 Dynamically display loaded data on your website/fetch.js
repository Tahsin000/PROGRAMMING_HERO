// const data = document.getElementById('data');
// fetch(url)
// .then(x => x.json())
// .then(json => data.innerText = JSON.stringify(json));


function loadData2(){
    url = 'https://reqres.in/api/users?page=2';
    fetch(url)
    .then(x => x.json())
    .then(json => console.log(json));
}