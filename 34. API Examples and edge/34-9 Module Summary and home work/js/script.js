const loadData = async(code)=>{
    try{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${code}`;
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.meals);
    }
    catch(error){
        console.log(error);
    }
}
const displayData = (data)=>{
    const cardGrid = document.getElementById('cardGrid');
    cardGrid.innerHTML = '';
    data.forEach(food => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-1">
                <div class="col-md-4">
                <img src="${food.strMealThumb}" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">${food.strMeal}</h5>
                      <p class="card-text">There are many variations of passages of available, but the majority have suffered</p>
                      <a onclick="detailFoodInfo('${food.idMeal}')" type="button"  data-bs-toggle="modal" data-bs-target="#mealDetails" class="text-warning">
                        <h6 class="card-text fw-semibold ">View Details</h6>
                      </a>
                    </div>
                </div>
            </div>
        </div>
        `
        cardGrid.appendChild(div);
        // bug(food);
    });
}

const detailFoodInfo = async (code) =>{
    try{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`
        const res = await fetch(url);
        const data = await res.json();
        displayFoodItems(data.meals[0]);
    }
    catch(error){
        bug(error);
    }
}

const displayFoodItems = (data) => {
    document.getElementById('FoodTitle').innerText = data.strMeal;
    bug(data);
    document.getElementById('mealFoodBody').innerHTML = 
    `
        <img src="${data.strMealThumb}" class="img-fluid" alt="">
        <p class="fs-3">Food ingredients</p>
        <ul id="foodList"></ul>
  `
  const index = Object.keys(data);
  const foodList = document.getElementById('foodList');
  for(const x of index){
    if (x.includes('strIngredient')){
      const isTrue = data[x];
      // console.log(typeofisTrue);
      if (isTrue !== ''){
        const li = document.createElement('li');
        li.innerText = data[x];
        foodList.appendChild(li);
        // console.log(x);
      }
    }

  }

}

const inputFood = () =>{
    loadData(document.getElementById('inputFood').value);
    bug(document.getElementById('inputFood').value);
}

function bug(x) {console.log(x);}
loadData('');