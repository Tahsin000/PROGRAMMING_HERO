
function dataLoad(){
    const data = 'https://jsonplaceholder.typicode.com/posts'
    fetch(data)
    .then(res => res.json())
    .then(json => displayData(json));
}
function displayData(data){
    const section = document.getElementById('post-list')
    for(const user of data){
        const newUser = document.createElement('div')
        newUser.innerHTML = `
        <div class="bg-sky-200 rounded-lg p-5">
            <h2 class="text-xl font-semibold ">user: ${user.userId}</h2>
            <h3 class="text-md font-">Post: ${user.id}</h3>
            <p class="text-sm font-light">Description: ${user.title}</p>
        </div>
        `
        section.appendChild(newUser);
    }
    /*
    
    */ 
}