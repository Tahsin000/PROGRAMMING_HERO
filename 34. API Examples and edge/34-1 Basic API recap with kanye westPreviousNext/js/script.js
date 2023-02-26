// console.log('kanye famous Quotes');

const loadQuotes = () =>{
    const LoadData = 'https://api.kanye.rest/'
    fetch(LoadData)
    .then(res => res.json())
    .then(json => displayQuotes(json));
}
const displayQuotes = (data) => {
    document.getElementById('quotes').innerText = data.quote;
}
