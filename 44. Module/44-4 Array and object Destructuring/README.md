# 44-4 Array and object Destructuring

### Destructring

    - 1. Method (Array)

    ```javascript
    const numbers = [12, 23, 3, 45, 56, 67];
    const [x, y] = numbers;
    console.log(x, y);
    ```

    - 2. Method (Array)

    ```javascript
    function boxify (num1, num2){
        const nums = [num1, num2];
        return nums;
    }
    const [x, y] = boxify[12, 23];
    console.log(x, y);
    ```
    
    - 3. Method ( Object ) 

    ```javascript
    const student = {
        name:'Sakib Khan',
        age: 32,
        movies: ['king khan', 'Dhakar Mastan']
    }
    const [firstMovie, secondMovie] = student.movies ;
    console.log(secondMovie);

    ```
    
    - 4. Method ( Object ) 

    ```javascript
    const {name, age} = {name: 'alu', age: 14};
    console.log(name);
    ```
    
    - 5. Method ( Object ) 

    ```javascript
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
    ```