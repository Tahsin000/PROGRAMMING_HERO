const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries)=>{
    console.log(countries);
    const contriesHTML = countries.map(countrie => getContriesinfo(countrie));
    document.getElementById('section').innerHTML = contriesHTML.join(' ');
    console.log(contriesHTML[0]);
}
const getContriesinfo = ({name, flags, area, region}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
            <div>    
                <p >Area: ${area}</p>
                <p >Region: ${region}</p>
            </div>
        </div>
    ` 
} 
loadCountries();