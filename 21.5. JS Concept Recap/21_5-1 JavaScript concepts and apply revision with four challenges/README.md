# 1. Reverse The String

```jsx
const reverseMaker = (word) => {
  //Write Your solution Here
  var String = "";
  var n = word.length;
  for (let i = n - 1; i >= 0; i--) {
    String += word[i];
  }
  return String;
};
```

# 2. Detect vowel and consonent

```jsx
const solution = (letter) => {
  //Write Your solution Here
  // a, e, i, o, u dont forget to return
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return "VOWEL";
  } else {
    return "CONSONANT";
  }
};
```

# 3. Calculate total cost

```jsx
const totalCost = (products) => {
  // let product_01 = products[0].price;
  // let product_02 = products[2].price;
  // let product_03 = products[3].price;
  var n = products.length;
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += products[i].price;
  }
  return sum;
};
```

# 4. Conditional Statements Switch

```jsx
function getLetter(s) {
  let letter;
  let w = s.charAt(0);
  switch (w) {
    case "a":
      letter = "A";
      break;
    case "e":
      letter = "A";
      break;
    case "i":
      letter = "A";
      break;
    case "o":
      letter = "A";
      break;
    case "u":
      letter = "A";
      break;
    case "b":
      letter = "B";
      break;
    case "c":
      letter = "B";
      break;
    case "d":
      letter = "B";
      break;
    case "f":
      letter = "B";
      break;
    case "g":
      letter = "B";
      break;
    case "h":
      letter = "C";
      break;
    case "j":
      letter = "C";
      break;
    case "k":
      letter = "C";
      break;
    case "l":
      letter = "C";
      break;
    case "m":
      letter = "C";
      break;
    default:
      letter = "D";
  }
  // Write your code here

  return letter;
}
```

# 5. Delete a property from an object

```jsx
const deleteProperty = (arr) => {
  var temp = Object.keys(arr[0]);
  var ObjectKeys = temp[0];
  var arrSecondElement = arr[1];
  var ans;
  ObjectKeys === arrSecondElement ? (ans = "YES") : (ans = "NO");
  return ans;
};
```

# 6. Convert temperature

```jsx
function temperatureConverter(valNum) {
  var c = (valNum - 32) / 1.8;
  return Math.round(c * 100) / 100;
}
```

# 7. Subtraction Operation

```jsx
function subtraction(num1, num2) {
  return num1 - num2;
}
```

# 8. Find the average

```jsx
function average(arrOfMarks) {
  var sum = 0;
  for (let i = 0; i < arrOfMarks.length; i++) {
    sum += arrOfMarks[i];
  }
  return Math.round((sum / arrOfMarks.length) * 100) / 100;
}
```

# 9. String Operation

```jsx
function stringCombine(str1, str2) {
  return str1 + " " + str2;
}
```

# 10. Remainder Operation

```jsx
function findRemainder(mod) {
  mod %= 5;
  return mod;
}
```

# 11. Can you find out who will get the delicious cake (Part I)

```jsx
function JimOrDela(marksOfJim, marksOfDela) {
  return marksOfJim > marksOfDela ? "Jim" : "Dela";
}
```

# 12. Can you find out who will get the delicious cake (Part II)

```jsx
function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  return marksOfJim > marksOfDela
    ? "Jim"
    : marksOfDela > marksOfChinku
    ? "Dela"
    : "Chinku";
}
```

# 13. What's my grade

```jsx
function findGrade(marks) {
  if (80 <= marks) return "A";
  else if (60 <= marks) return "B";
  else if (50 <= marks) return "C";
  else if (40 <= marks) return "D";
  else return "F";
}
```

# 14. What is Jerry’s final score

```jsx
function finalScore(scores) {
  var sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}
```

# 15. Find the largest number

```jsx
function findMax(arr) {
  return Math.max(...arr);
}
```

# 16. Is it Isosceles

```jsx
function checkTriangle(side1, side2, side3) {
  return side1 == side2 && side1 == side3
    ? "No"
    : side1 == side3
    ? "Yes"
    : side2 == side3
    ? "Yes"
    : side1 == side2
    ? "Yes"
    : "No";
}
```

# 17. Who is the tallest

```jsx
function tallestFriend(height) {
  return Math.max(...height);
}
```

# 18. Convert Hour to Minute

```jsx
function hourToMin(hour) {
  return hour * 60;
}
```

# 19. Write a code to find the smallest element of the array

```jsx
function findingSmallest(numbers) {
  return Math.min(...numbers);
}
```

# 20. Can you find the leap years

```jsx
function findLeapYear(arrOfYears) {
  var year = [];
  for (let i = 0; i < arrOfYears.length; i++) {
    checkLeapYear(arrOfYears[i]) ? year.push(arrOfYears[i]) : 0;
  }
  return year;
}
function checkLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
```

# 21. What are the odds

```jsx
function findOddSum(arrOfNumbers) {
  var sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    arrOfNumbers[i] % 2 ? (sum += arrOfNumbers[i]) : 0;
  }
  return sum;
}
```

# 22. Find the second largest

```jsx
function findArea(length, width) {
  return length * width;
}
```

# 23. Find the area of a rectangle

```jsx
function secondLargest(numbers) {
  var sortElement = numbers.sort(function (a, b) {
    return b - a;
  });
  return sortElement[1];
}
```

# 24. Count the number of all zero

```jsx
function countZeros(binary_num) {
  count = 0;
  for (let i = 0; i < binary_num.length; i++) {
    if (binary_num[i] === "0") count++;
  }
  return count;
}
```

# 25. হ্যালো ইউনিভার্স

```jsx
function helloUniverse() {
  return "Hello Universe!! Welcome me to JS World!!!";
}
```
