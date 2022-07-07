
console.log('labas cia as ');

// salyga
let hours = 2;
// let laikas = hours < 6 ? 'Yra naktis' : ' yra diena'

let laikas

// if(hours < 6) {
//      laikas = 'yra naktis';
// } else {
// laikas = ' yra diena';
// }

// console.log(laikas);
let isDarkModeOn = false;
const darkColor = '#333';
const lightColor = '#fff';
// document.body.style.backgroundColor = isDarkModeOn

if (isDarkModeOn === true){
    document.body.style.backgroundColor = darkColor;
    document.body.style.color = lightColor;
} else {
    document.body.style.backgroundColor = lightColor;
    document.body.style.color = darkColor;

}