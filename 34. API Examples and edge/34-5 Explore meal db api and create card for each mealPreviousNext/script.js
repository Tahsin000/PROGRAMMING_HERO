const loadMeals = (food) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
const displayFood = data =>{
    // data.forEach(meal => {
    //     console.log(meal.meals);
    const mealsContainer =  document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    // });
    for(const food of data){
        const mealDiv = document.createElement('div');
        // console.log(food);
        mealDiv.classList.add('col');
        mealDiv.innerHTML = 
        `<div class="col">
        <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text" >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo inventore id a iusto illum laudantium optio iure eveniet voluptatem dolores.</p>
            <button onclick="loadMealDetail('${food.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
              Details
            </button>
          </div>
        </div>
      </div>
      `
      mealsContainer.appendChild(mealDiv);
    }
}

const searchWord = () =>{
    const Word = document.getElementById('searchBtn').value;
    // console.log(searchWord);
    loadMeals(Word);
};
const loadMealDetail = (code) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMealDetail(data.meals[0]));
};

const loadMealDetail2 = async(code) => {
  try{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail (data.meals[0]);
  }
  catch(error){
    console.log(error);
  }
};
const displayMealDetail = (meal) =>{
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
  document.getElementById('mealDetailsBody').innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    <p class="fs-3">Food ingredients</p>
    <ul id="foodList"></ul>
  `
  const index = Object.keys(meal);
  const foodList = document.getElementById('foodList');
  for(const x of index){
    if (x.includes('strIngredient')){
      const isTrue = meal[x];
      // console.log(typeofisTrue);
      if (isTrue !== ''){
        const li = document.createElement('li');
        li.innerText = meal[x];
        foodList.appendChild(li);
        // console.log(x);
      }
    }

  }
  // for(const x of meal) console.log(x);
};
loadMeals('fish');