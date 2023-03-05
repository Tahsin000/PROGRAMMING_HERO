function dd(x){
    console.log(x);
}
const loadData = async (dataLimite, dateSort)=>{
    try{
        const url = `https://openapi.programming-hero.com/api/ai/tools`
        const ref = await fetch(url);
        const data = await ref.json();
        if (dateSort){
            displayData(data.data.tools, dataLimite);   
        } else{
            displayData(data.data.tools, dataLimite);   
        }

    } catch(error) {
        dd(error);
    }
}

const displayData = (data, dataLimite, dateSort)=>{
    dd(data);
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    // 10 items
    if (dataLimite && data.length > 6){
        data = data.slice(0, 6);
        document.getElementById('show-all').classList.remove('d-none')
    } else {
        document.getElementById('show-all').classList.add('d-none')
    }
    
    data.forEach(element => {
        
        const div = document.createElement('div');
        const d = new Date(element.published_in);
        const newDate = `${("0"+(d.getDate())).slice(-2)}/${("0"+(d.getMonth() + 1)).slice(-2)}/${d.getUTCFullYear()}`;


        div.classList.add('col');
        div.innerHTML =`
        <div class="card p-3" id="${element.features}">
            <img src="${element.image}" class="img-fluid img-thumbnail rounded-4" alt="...">
            <div class="card-body">
            <h5 class="card-title fw-bold">Features</h5>
            <ol class="text-muted">
                <li>${element.features[0]}</li>
                <li>${element.features[1]}</li> 
                <li>${element.features[2] ? element.features[2] : 'No Feature'}</li>
            </ol>
            <hr>
            <h5 class="card-title fw-bold">${element.name}</h5>
            <div class="d-flex justify-content-between">
                <div class="d-flex justify-content-between align-items-center">
                    <i class="text-muted bi bi-calendar-week-fill"></i>
                    <small class="ms-3 text-muted">
                        ${newDate ? newDate:'No Date Found'}
                    </small>
                </div>
                <button onclick="showDetails('${element.id}')" type="button" data-bs-toggle="modal" data-bs-target="#aiModel" class="btn border rounded-full rounded-pill"><i class="text-muted bi bi-arrow-right"></i></button>
            </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
    });

    toggleSpinner(false);
}
const processData = (dataLimite)=>{
    toggleSpinner(true);
    loadData(dataLimite);
}
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

const showDetails = async (id)=>{
    try{
        const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
        const res = await fetch(url);
        const data = await res.json();
        displayAllItems(data.data);
    } catch(error){
        dd(error);
    }
}
const displayAllItems = (data)=>{
    
    const modalImg = document.getElementById('modalImg');
    
    accuracyBtnShow(data.accuracy.score);
    innerSetText('modalTitle', data.description);
    modalImg.src = data.image_link[0];
    // accuracy.innerHTML = `${data.accuracy.score ? (data.accuracy.score * 100 +'% accuracy') : 'Accuracy score has not been calculated yet'}`

    // Features
    innerSetText('Features1', data.features['1'].feature_name);
    innerSetText('Features2', data.features['2'].feature_name);
    innerSetText('Features3', data.features['3'].feature_name);

//  Integrations1
    innerSetText('Integrations1', data.integrations[0]);
    innerSetText('Integrations2', data.integrations[1]);
    innerSetText('Integrations3', data.integrations[2]);

//  pricing
    innerSetText('pricingBasicPrice', data.pricing['0'].price);
    innerSetText('pricingBasicPlan', data.pricing['0'].plan);
    
    innerSetText('pricingProPrice', data.pricing['1'].price);
    innerSetText('pricingProPlan', data.pricing['1'].plan);
    
    innerSetText('pricingEnterprisePrice', data.pricing['2'].price);
    innerSetText('pricingEnterprisePlan', data.pricing['2'].plan);

    // input_Output_Examples
    inputOutputExamples('exampleTitle', data.input_output_examples[0].input);
    inputOutputExamples('exampleSubtitle', data.input_output_examples[0].output);

    dd(data);
    

}
const innerSetText = (idName, innerValue = 'not found')=>{
    innerValue = (innerValue === '0') ? 'Free of Cost/' : (innerValue == 'Contact us for pricing') ? 'Free of Cost/' : (innerValue === 'Free') ? 'Basic' : innerValue ;
    const variable = document.getElementById(idName);
    variable.innerText = innerValue;
}

const accuracyBtnShow = (data)=>{
    const accuracy = document.getElementById('accuracy');
    if(data){
        accuracy.classList.remove('d-none');
        accuracy.innerText = data * 100 +'% accuracy'
    } else {
        accuracy.classList.add('d-none');
    }
}
const inputOutputExamples = (idName, innerValue = 'Can you give any example?')=>{
    const variable = document.getElementById(idName);
    variable.innerText = innerValue;
}
const dateSort = ()=>{

}
processData(6);