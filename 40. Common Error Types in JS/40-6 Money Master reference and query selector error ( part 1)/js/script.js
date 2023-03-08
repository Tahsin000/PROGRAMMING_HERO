const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = (parseInt(food) + parseInt(rent) + parseInt(clothes));
  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
    return;
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    
    document.getElementById("balance").innerText = balance;

  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
  const income = document.querySelector("#income").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (savePercentage / 100) * income;
  
  // calculate remaining balance
  const balance = parseInt(document.getElementById("balance").innerText);
  const remainingBalance = balance - savingAmount;
  console.log(remainingBalance);

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = parseFloat(savingAmount).toFixed(2);
    document.querySelector(".remaining-balance").innerText = parseFloat(remainingBalance).toFixed(2);
  }
};
