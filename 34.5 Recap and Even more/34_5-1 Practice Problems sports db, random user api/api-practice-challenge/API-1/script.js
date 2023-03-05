
const person={found:2,message:"Found 2 persons",result:[{name:{common:"John",fullName:["John","Doe"]},age:32,isMale:!1,address:{street:"13/A St Joseph",house:10}},{name:{common:"Humayoun",fullName:["Humayoun","Kabir"]},age:33,isMale:!1,address:{street:"13/A St Lucia",house:11}},]};

bug(person);
const displayPerson = () =>{
    const h1 = document.createElement('h1');
    h1.classList.add('text-center');
    h1.innerHTML = `
    Found ${person.found} person
    <div class="card-group g-3" id="cardGroup">
            
    </div>
    `
    document.getElementById('personsContainer').appendChild(h1);
    const cardGroup = document.getElementById('cardGroup');
    person.result.forEach(element=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card-header">
            Person Name : ${element.name.common}
        </div>
        <div class="card-body">
            <p class="card-text">age: ${element.age}</p>
            <p class="card-text">${element.address.street}, House no: ${element.address.house}</p>
        </div>
        `
        cardGroup.appendChild(div);
        bug(element.name)
    });
}
displayPerson();
function bug(x) {console.log(x)}; 
