const userData = () =>{
    const errorMassage = document.getElementById('errorMassage');
    const age = document.getElementById('userInput').value;
    try{
        if (isNaN(parseInt(age))){
            throw "pleasr enter a number";
        } else if (age < 18){
            throw "bacha kacche not allowed";
        } else if (age > 30){
            throw "murobbi ra aikkan aisen na";
        }
        errorMassage.innerHTML = '';
        console.log('bBaria');
    } catch(err){
        console.log('ERROR: ', err);
        errorMassage.innerHTML = `ERROR: `+ err;
    }
    finally{
        console.log('ALl done inside try catch');
    }
    console.log(111111);
}