# Create HTML elements using Javascript and appendChild

```jsx

// 1. where to add
const placesList = document.querySelector('#places-list');
// 2. what to be added
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
ul.appendChild(li);
// 3. add the child
placesList.appendChild(ul);

const mainContent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');

const ul1 = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani'
ul1.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul1.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salad'
ul1.appendChild(li3);

h1.innerText = 'My Food List';
section.appendChild(h1);
section.appendChild(ul1);

mainContent.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML =`
<h1>My Dress section</h1> <ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>Sando genji</li>
</ul>
`
mainContent.appendChild(sectionDress);
```