const loadPhone = async(searchText, dataLimite) =>{
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimite);
}   
const displayPhone = (phones, dataLimite)=>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    // 10 items
    if (dataLimite && phones.length > 10){
        phones = phones.slice(0, 10);
        document.getElementById('show-all').classList.remove('d-none')
    } else {
        document.getElementById('show-all').classList.add('d-none')
    }

    // noPhone Message
    const noPhone = document.getElementById('no-phone-message');
    if (phones.length === 0){
        noPhone.classList.remove('d-none');
    } else {
        noPhone.classList.add('d-none');
    }
    // bug(phones.length);
    phones.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = 
        `
        <div class="card p-4">
            <img src="${element.image}" class="img-fluid card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
                <button onclick="PhoneDetails('${element.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModelDetail">
                    Phone Details
                </button> 
            </div>
        </div>
        `
        phoneContainer.appendChild(div);
        // console.log(phones['0'].phone_name);
    });
    // stop spinner ro loader
    toggleSpinner(false);
}
const PhoneDetails = async(code)=>{
    const url = `https://openapi.programming-hero.com/api/phone/${code}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoenDetail(data.data);
    // bug(data.data);
}
const displayPhoenDetail = (data) =>{
    bug(data);
    document.getElementById('releaseDate').innerHTML = `Release Date: ${data.releaseDate ? data.releaseDate: 'not found release date information'}`;

    document.getElementById('phoneModelDetailLabel').innerText = data.name;
    document.getElementById('phoneImg').src = data.image;
    document.getElementById('storage').innerText = `Storage: ${data.mainFeatures.storage}`;
    document.getElementById('Bluetooth').innerText = `Bluetooth: ${data.others.Bluetooth}`;
}
const processData = (dataLimite)=>{
    // start loader
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    loadPhone(searchField.value, dataLimite);
    // bug(searchField.value);
}
// handle search button click
document.getElementById('btn-search').addEventListener('click', ()=>{
    processData(10);
});
document.getElementById('search-field').addEventListener('keypress', (event)=>{
    if (event.key==='Enter');
        processData(10);
    // bug(event.key==='Enter');
});
// 
const bug = (x) =>{console.log(x)};

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    } else{
        loaderSection.classList.add('d-none');
    }
}
document.getElementById('show-all-btn').addEventListener('click', ()=>{
    processData();
});

loadPhone('iPhone');