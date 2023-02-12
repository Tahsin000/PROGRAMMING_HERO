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
