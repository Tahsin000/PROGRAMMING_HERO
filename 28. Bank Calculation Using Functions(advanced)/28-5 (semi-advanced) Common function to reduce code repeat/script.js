document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 
    const depositField = document.getElementById('deposit-field'); 
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3:
    depositField.value = '';
    // step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText; 
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount; 
    depositTotalElement.innerText = newDepositTotal;
    // step-6:
    const balanceTotalElement = document.getElementById('balance-total').innerText;
    let previousBbalanceTotal = parseFloat(balanceTotalElement);
    previousBbalanceTotal += newDepositAmount;
    // // step-7:
    document.getElementById('balance-total').innerText = previousBbalanceTotal;
    console.log(previousBbalanceTotal);
});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2 
    const WithdrawtField = document.getElementById('withdraw-field'); 
    const newWithdrawtAmountString = WithdrawtField.value;
    const newWithdrawtAmount = parseFloat(newWithdrawtAmountString);
    // step-3:
    WithdrawtField.value = '';
    // step-4:
    const WithdrawtTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawtTotalString = WithdrawtTotalElement.innerText; 
    const previousWithdrawtTotal = parseFloat(previousWithdrawtTotalString);
    // step-5:
    const newWithdrawtTotal = previousWithdrawtTotal + newWithdrawtAmount; 
    WithdrawtTotalElement.innerText = newWithdrawtTotal;
    // step-6:
    const balanceTotalElement = document.getElementById('balance-total').innerText;
    let previousBbalanceTotal = parseFloat(balanceTotalElement);
    previousBbalanceTotal -= newWithdrawtAmount;
    // // step-7:
    document.getElementById('balance-total').innerText = previousBbalanceTotal;
    console.log(previousBbalanceTotal);
});