const clearAll = ()=>{
    localStorage.clear();
}
const getElementId = (id)=>{
    return document.getElementById(id);
}

const singleLocalStorageSave = ()=>{
    const key = getElementId('userInputKay').value;
    const value = getElementId('userInputValue').value;
    localStorage.setItem(key, value);
    getElementId('userInputKay').value = '';
    getElementId('userInputValue').value = '';
}
const singleLocalStorageGet = ()=>{
    const SelectId = getElementId('ShowItems');
    const SearchItem = getElementId('userInputSearch').value;
    SelectId.innerText = localStorage.getItem(SearchItem);
    getElementId('userInputSearch').value = '';
}
const RemoveItemsWithKey= ()=>{
    const searchItem = getElementId('removeSearchItem').value;
    const check = localStorage.getItem(searchItem)
    localStorage.removeItem(searchItem);
    const notifi = getElementId('warningText');
    notifi.classList.remove('alert-success', 'alert-warning');
    if (check){
        notifi.classList.add('alert','alert-success');
        notifi.innerText = 'successfully removed!!!';
    } else {
        notifi.classList.add('alert','alert-warning');
        notifi.innerText = 'Not Found 404';
    }
    getElementId('removeSearchItem').value = '';
}