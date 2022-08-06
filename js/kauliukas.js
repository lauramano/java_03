'use strict';
console.log('kauliuko ridenimas');
let sk = 0;
// let isridentasSk = Number(sk);
function randomNumber(min, max) {
 return  sk = Math.floor(Math.random() * (max - min)) + 2;
}

let i = 0;
while(i < 50) {
    if(sk != 12){
        randomNumber(1, 12);
        console.log(sk);
        i ++;
    } else {break}
   
}
console.log(`reikejo ridenti ${i} kartu`);