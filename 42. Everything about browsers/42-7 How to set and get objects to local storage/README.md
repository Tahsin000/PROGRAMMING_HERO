# 42-7 How to set and get objects to local storage
### object to string 
```javascript
const person ={name:'Lal Mia', age:13, profession: 'painter'}
JSON.stringify(person) // "{name:'Lal Mia', age:13, profession: 'painter'}"
```
### string to object
```javascript
const personString ="{name:'Lal Mia', age:13, profession: 'painter'}"
JSON.parse(personString ) // {name:'Lal Mia', age:13, profession: 'painter'}
```