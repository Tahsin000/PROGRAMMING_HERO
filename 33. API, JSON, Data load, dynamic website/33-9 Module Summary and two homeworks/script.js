
function dataLoad(){
    const data = 'https://jsonplaceholder.typicode.com/comments'
    fetch(data)
    .then(res => res.json())
    .then(json => displayData(json));
}
function displayData(data){
    const section = document.getElementById('post-list')
    for(const user of data){
        const newUser = document.createElement('div')
        newUser.innerHTML = `
        <div class="bg-yellow-100 rounded-lg p-5">
            <h2 class="text-xl font-semibold ">post: ${user.postId}</h2>
            <h3 class="text-md font-">name: ${user.name}</h3>
            <p class="text-sm font-light">email: ${user.email}</p>
        </div>
        `
        section.appendChild(newUser);
    }
    /*
    
    */ 
}