const loadData = async() =>{
    try{
        const url = `https://restcountries.com/v3.1/all`
        const res = await fetch(url);
        const data = await res.json();
        innerHTMLData(data);
    } catch(error){
        console.log(error);
    }
}
const innerHTMLData = (data) =>{
    // bug(data);
    const DataSelection = document.getElementById('DataSelection');
    data.forEach(element => {
        const op = document.createElement('option');
        op.value = element.cca2;

        op.innerHTML = `${element.name.common}`
        // bug(element.cca2);
        DataSelection.appendChild(op);
    });

} 
document.getElementById('DataSelection').addEventListener('mouseout', async(event)=>{
    try{
        const url = `https://restcountries.com/v3.1/alpha/${event.target.value}`
        const res = await fetch(url);
        const data = await res.json();
        DisplayData(data[0]);
    } catch(error){
        bug(error);
    }
    // bug(url);
    // console.log(event.target.value);
});

const DisplayData = (data) =>{
    const div = document.createElement('div');
    div.classList.add('p-3')
    const InfoContainer = document.getElementById('InfoContainer');
    InfoContainer.innerHTML = '';
    const localTime = getTimeOffset(`${data.name.common}/${data.capital[0]}`);
    bug(localTime);
    div.innerHTML = 
    `
        <img src="${data.flags.png}">
        <h3 class="mt-4">${data.name.common}</h3>
        <h4>${data.region}</h4>
        <h5>${data.timezones[0]}</h5>


    `

    InfoContainer.appendChild(div);
    bug(data);
}




function getTimeOffset(country = 'America/New_York', summerTime = false) {
    let date = new Date(new Date().getFullYear(), summerTime ? 6 : 11, 1);
    let wordTime = new Date(date.toISOString().substr(0, 19)).getTime();
    let localTime = new Date(date.toLocaleString('en', { timeZone: country })).getTime();

    return (wordTime - localTime) / 1000 / 60;
}
loadData();
function bug(x) {console.log(x)}; 
