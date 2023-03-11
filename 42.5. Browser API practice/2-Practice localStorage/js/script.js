const getElementId = (id)=>{
    return document.getElementById(id);
}
const clickME = () =>{
    const clickCounter = getElementId('clickCounter');
    const counter = parseInt(clickCounter.innerText) + 1;
    clickCounter.innerText = counter;
    SaveLocalStorage(counter);
}
const SaveLocalStorage = (data)=>{
    localStorage.setItem('counter',data);
}
const refreshPage = ()=>{
    const data = localStorage.getItem('counter');
    if (data){
        getElementId('clickCounter').innerText = data;
    } else {
        getElementId('clickCounter').innerText = 0;
    }
}
const ClearAll =()=>{
    getElementId('clickCounter').innerText = 0;
    localStorage.clear();
}
refreshPage();