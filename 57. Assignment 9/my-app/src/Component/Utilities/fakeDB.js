// use local storage to manage cart data
const addToDb = id => {
    let StorageJob = getStorageJob();
    // add quantity
    const quantity = StorageJob[id];
    if (!quantity) {
        StorageJob[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     StorageJob[id] = newQuantity;
    // }
    localStorage.setItem('job_id', JSON.stringify(StorageJob));
}

const removeFromDb = id => {
    const StorageJob = getStorageJob();
    if (id in StorageJob) {
        delete StorageJob[id];
        localStorage.setItem('job_id', JSON.stringify(StorageJob));
    }
}

const getStorageJob = () => {
    let StorageJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job_id');
    if (storedCart) {
        StorageJob = JSON.parse(storedCart);
    }
    return StorageJob;
}

const deleteStorageJob = () => {
    localStorage.removeItem('job_id');
}

export {
    addToDb,
    removeFromDb,
    getStorageJob,
    deleteStorageJob
}