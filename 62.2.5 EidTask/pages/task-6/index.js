const protectEmail = (user_email) => 
{
    //write your code here 
    /*
    ============================== 
    input: john@gmail.com
    output: jo...@gmail.com
    */  
    const SplitEmail = user_email.split('@');
    let userName = SplitEmail[0];
    const userNameLength = SplitEmail[0].length;
    userName = userName.slice(0, (userNameLength/2)+(userNameLength%2));
    const cipherText = `${userName}...@gmail.com`
    
    //do not forget to write the return keyword };
    return cipherText;
}
//do not forget to call the function
console.log(protectEmail('john@gmail.com'));
