const loadUser = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(json => displayUser(json));
}
const displayUser = (data) =>{
    const all_countries = document.getElementById('all_countries');
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Name: ${element.name.common}</h3>
            <p>capital: ${element.capital ? element.capital[0] : 'no capital' }</p>
        `
        document.getElementById('all_countries').appendChild(div);
        console.log(element.capital);
    });
}