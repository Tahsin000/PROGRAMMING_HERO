# 72-5 Create Page Size Dropdown Using Chatgpt

## pagination shop.jsx

```js
const options = [5, 10, 20];
function handleSelectChange(event) {
  setItemsPerPage(parseInt(event.target.value));
  setCurrentPage(0);
}
<div className="pagination">
  <p>
    CurrentPage : {currentPage} and items per page: {itemsPerPage}
  </p>
  {pageNumbers.map((number) => (
    <button
      onClick={() => setCurrentPage(number)}
      key={number}
      className={currentPage === number ? "selected" : ""}
    >
      {number}
    </button>
  ))}

  <select value={itemsPerPage} onChange={handleSelectChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>;
```

## shop.css

```css
.pagination .selected {
  background-color: #ff9900;
}
```
