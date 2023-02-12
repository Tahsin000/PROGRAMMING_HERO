document.getElementsByClassName('loginBtn')[0].addEventListener('click', ()=>{
    const userName = document.getElementById('username').value;
    const userPassword = document.getElementById('userPassword').value;
    if (userName === "" || userPassword=== ""){
        document.getElementsByClassName('warning')[0].innerHTML = 'Input error!!!'
    }
    else if(userName == 'tahsin000' && userPassword == 'tahsin000'){
        const url = 'index.html'
        console.log('check');
        document.getElementById('username').value = '';
        document.getElementById('userPassword').value='';
        window.open(url, '_blank');
    }
    else{
        document.getElementById('username').value = '';
        document.getElementById('userPassword').value='';
        document.getElementsByClassName('warning')[0].innerHTML = 'username or password error!!'
    }
});

document.getElementById('depositBtn').addEventListener('click', ()=>{
    const userDeposit = document.getElementById('depositInput').value;
    /*
        1. isNull
        2. isChar 
    */ 
if  ((userDeposit.includes('.'))|| (userDeposit==="") || (/[a-zA-Z]/).test(userDeposit)) {
    document.getElementById('depositInput').value='';
    alert("Don't leave empty, enter amount.");
}
else {
    let totalDeposit = parseInt(document.getElementsByClassName('depositInfo')[0].innerHTML);
    let totalBalance = parseInt(document.getElementsByClassName('balanceInfo')[0].innerHTML);
    totalDeposit += parseInt(userDeposit);
    totalBalance += parseInt(userDeposit);
    console.log(totalBalance);
    document.getElementsByClassName('depositInfo')[0].innerHTML = totalDeposit;
    document.getElementsByClassName('balanceInfo')[0].innerHTML = totalBalance;
    document.getElementById('depositInput').value = '';
}

//    console.log((userDeposit==="") || (/[a-zA-Z]/).test(userDeposit));
//    if (userDeposit === '')
});
document.getElementById('withdrawBtn').addEventListener('click', ()=>{
    const userWithdraw = document.getElementById('withdrawInput').value;
    /*
        1. isNull
        2. isChar 
    */ 
if  ((userWithdraw.includes('.'))|| (userWithdraw==="") || (/[a-zA-Z]/).test(userWithdraw)) {
    document.getElementById('withdrawInput').value='';
    alert("Don't leave empty, enter amount.");
}
else {
    let totalWithdraw = parseInt(document.getElementsByClassName('withdrawInfo')[0].innerHTML);
    let totalBalance = parseInt(document.getElementsByClassName('balanceInfo')[0].innerHTML);
    if (totalBalance < userWithdraw){
        document.getElementById('withdrawInput').value='';
        alert("You can't withdraw more than balance");
    }else{
        totalWithdraw += parseInt(userWithdraw);
        totalBalance -= parseInt(userWithdraw);
        console.log(totalBalance);
        document.getElementsByClassName('withdrawInfo')[0].innerHTML = totalWithdraw;
        document.getElementsByClassName('balanceInfo')[0].innerHTML = totalBalance;
        document.getElementById('withdrawInput').value = '';
    }
}

//    console.log((userWithdraw==="") || (/[a-zA-Z]/).test(userWithdraw));
//    if (userWithdraw === '')
});