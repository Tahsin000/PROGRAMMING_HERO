const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(json => displayUser(json));
}

const displayUser = (data) =>{
    document.getElementById('gender').innerText = data.results[0].gender;
    document.getElementById('name').innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    document.getElementById('location').innerText = data.results[0].location.city;
    document.getElementById('img').src = data.results[0].picture.large;
    console.log(data.results[0].gender);
}
