const player = {};
    player.name = 'Small Nirob';
    player.specialty = 'batsman';
    player.bat = function(){ console.log('swing your bat');
}
console.log(player);
player.bat();

const student = {
    name:'pandey',
    job: 'khai andy',
    bal: function(){
        console.log('throw the ball');
    },
    salary: 10000
}

// object constructor
const person = new Object();
console.log(person);

// object object create method
const item = Object.create(student);
console.log(item);

class Person {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const Person1 = new Person(56);
console.log(Person1);

function Car (model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car ('elon', 32);
console.log(tesla);

