const visor = document.querySelector('.visor');
const generate = document.querySelector('.generate');
const lMin = document.querySelector('.lmin');
const lMai = document.querySelector('.lmai');
const num = document.querySelector('.num');
const char = document.querySelector('.char');

var password = '';

window.addEventListener("load", () => {
    lMai.value = 0;
    lMin.value = 0;
    char.value = 0;
    num.value = 0;
 });

generate.addEventListener("click", () => {
    verifyValues();

    password += generateLetter();
    password += generateBigLetter();
    password += generateNumber();
    password += generateChar();

    showPassword();

    console.log(password);

    password = '';
});

function verifyValues(){
    let inputs = [lMin, lMai, char, num];
    
    inputs.forEach(element => {
        if(element.value > 7){
            element.value = 7;
        } else if(element.value < 0){
            element.value = 0;
        }
    });
}

function generateLetter(){
    var letters = '';
    let v = lMin.value;
    if(v === ''){
        v = 0;
    }
    for(let n = 0; n < v; n++){
        let l = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
        letters += String.fromCharCode(l);
    }
    return letters;
}

function generateBigLetter(){
    var letters = '';
    let v = lMai.value;
    if(v === ''){
        v = 0;
    }
    for(let n = 0; n < v; n++){
        let l = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        letters += String.fromCharCode(l);
    }
    return letters;
}

function generateNumber(){
    var numbers = '';
    let v = num.value;
    if(v === ''){
        v = 0;
    }
    for(let n = 0; n < v; n++){
        numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
}

function generateChar(){
    var chars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];
    var c = '';
    let v = char.value;
    if(v === ''){
        v = 0;
    }
    for(let n = 0; n < v; n++){
        let ch = Math.floor(Math.random() * 28);
        c += chars[ch];
    }
    return c;
}

function showPassword(){
    visor.innerText = password;
}