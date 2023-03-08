const getData = new Promise((resolve , reject) =>{
    reject('No data available');
});

getData
    .then(data => console.log(data + 22))
    .catch(err => console.error('ERR: ', err));