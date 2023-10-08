const visor = document.querySelector('.visor');
const generate = document.querySelector('.generate');
const lMin = document.querySelector('.lmin');
const lMai = document.querySelector('.lmai');
const num = document.querySelector('.num');
const char = document.querySelector('.char');
const randomize = document.querySelector('.randomize');
const copy = document.querySelector('.copy');

// window.addEventListener("load", () => {
//     lMai.value = 0;
//     lMin.value = 0;
//     char.value = 0;
//     num.value = 0;
//  });

generate.addEventListener("click", () => {
    verifyValues();

    var password = '';

    password += generateLetter();
    password += generateBigLetter();
    password += generateNumber();
    password += generateChar();

    if(randomize.checked){
        password = randomizePassword(password);
    }

    showPassword(password);
    allowCopy(password);

    password = '';
});

copy.addEventListener("click", () => {
    if(copy.classList.contains('able')){
        copyPassword();
    }
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

function randomizePassword(password){
    var list = [];
    for(let i = 0; i < password.length; i++){
        list.push(password[i]);
    }
    password = '';

    function embaralharLista(lista) {
        return lista.sort(function() {
          return Math.random() - 0.5;
        });
      }

    list = list.sort(function() {
        return Math.random() - 0.5;
    });

    for(let i = 0; i < list.length; i++){
        password += list[i];
    }

    return password;
}

function showPassword(password){
    visor.innerText = password;
}

function allowCopy(password){
    if(visor.innerText === password){
        copy.classList.remove('unable');
        copy.classList.add('able');
        if(password === ''){
            copy.classList.add('unable');
            copy.classList.remove('able');
        }
    }
}

function copyPassword(){
    navigator.clipboard.writeText(visor.textContent);
    alert('Senha copiada com sucesso!');
}