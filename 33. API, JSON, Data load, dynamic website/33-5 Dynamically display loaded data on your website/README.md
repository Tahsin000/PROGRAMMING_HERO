# **Dynamically display loaded data on your websitePreviousNext**

```jsx
function loadData3() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function displayUsers(data) {
  for (const user of data) {
    console.log(user);
    const newElement = document.createElement("tr");
    newElement.innerHTML = `
        <td style="border: 2px solid black;">
            ${user.name}
        </td>
        <td style="border: 2px solid black;">
            ${user.email}
        </td>
        <td style="border: 2px solid black;">
            // ${user.address.city}
        </td>
        `;
    document.getElementById("row").appendChild(newElement);
  }
}
```
