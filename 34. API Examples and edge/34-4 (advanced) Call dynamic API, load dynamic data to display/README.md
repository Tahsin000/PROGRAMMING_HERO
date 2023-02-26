# Call dynamic API, load dynamic data to display

### script.js

```jsx
const loadUser = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((json) => countryFunction(json));
};
const countryFunction = (data) => {
  const all_countries = document.getElementById("all_countries");
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
            <h3>Name: ${element.name.common}</h3>
            <p>capital: ${
              element.capital ? element.capital[0] : "no capital"
            }</p>
            <button onclick="displayCountry('${element.cca2}')">Details</button>
        `;
    // displayCountry(element.cca2);
    all_countries.appendChild(div);
  });
};
const displayCountry = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => ShowINFO(json));
  // console.log(url);

  // https://restcountries.com/v3.1/alpha/{code}
};

const ShowINFO = (data) => {
  const all_countries = document.getElementById("all_countries");
  const country_info = document.getElementById("country_info");
  data.forEach((element) => {
    country_info.innerHTML = `
        <h1>subregion: ${element.subregion}</h1>
        <img src="${element.flags.png}" alt="">
        `;
  });
};
loadUser();
```

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>contries</title>
    <style>
      #all_countries {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
      }
      .country {
        border: 1px solid tomato;
        padding: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <h1>Countries</h1>
    <section>
      <div id="country_info"></div>
      <div id="all_countries"></div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```
