const numberset = "1234567890";
const capitalset = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const smallset = "zxcvbnmasdfghjklqwertyuiop";
const specialset = "~!@#$%^&*()_";

const inputbox = document.getElementById("pass-box");
const length = document.getElementById("lenbox");
const capital = document.getElementById("capitalbox")
const small = document.getElementById("smallbox");
const special = document.getElementById("splbox");
const number = document.getElementById("numberbox")


const getRandomData = (dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)];
}


const generatePassword = (password = "") =>{
    if(capital.checked){
        password += getRandomData(capitalset);
    }
    if(small.checked){
        password += getRandomData(smallset);
    }
    if(special.checked){
        password += getRandomData(specialset);
    }
    if(number.checked){
        password += getRandomData(numberset);
    }
    if(password.length<length.value){
        return generatePassword(password);
    }
    return password.substring(0,length.value);
}

document.getElementById("btn").addEventListener(
    "click",function(){
        password = generatePassword();
        inputbox.innerText =  password;
    }
)