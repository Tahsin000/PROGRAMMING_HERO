const numbers = [12, 23, 3, 45, 56, 67];
// const x = numbers[0];
// const y =  numbers[1];

const [x, y] = numbers;
console.log(x, y);

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}
console.log(typeof boxify(12, 23), boxify(12, 23));

const student = {
    name:'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies ;
console.log(secondMovie);

const {name, age} = {name: 'alu', age: 14};
console.log(name);

const employee = {
    ide : 'VS code',
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height:66,
        weight:67,
        address:'kumarkali',
        drink:'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin',
        },
    }
}
const {machine, ide} = employee;
const{weight, address} = employee.specification;
const {brand} = employee.specification.watch;
console.log(brand);