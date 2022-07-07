let vardas = String(prompt('iveskite varda')) ;
let vardoRaidziuSkaicius = vardas.length;
console.log(' kiek vardas turi simboliu', vardoRaidziuSkaicius);

if(vardoRaidziuSkaicius >= 6){
    console.log(` sitas vardas : ${vardas} yra ilgas ir turi ${vardoRaidziuSkaicius} simboliu`);
} else {
    console.log('vardas yra trumpas');
}