// let skaicius = Number(prompt('iveskite skaiciu'));
//  = +'skaicius' ===== rezultatas skaicius buvo paverstas i number


// if (skaicius === 1){
//     console.log('pirmadienis');
// } else if (skaicius === 2){
//     console.log('antradienis');
// } else if (skaicius === 3) {
//     console.log('Treciadienis');
// } else if (skaicius === 4) {
//     console.log('Ketvirtadienis');
// } else if (skaicius === 5) {
//     console.log('Penktadienis');
// } else if (skaicius === 6) {
//     console.log('Sestadienis');
// }else if (skaicius === 7) {
//     console.log('Sekmadienis');
// } else {  
//     console.log('ivedete bloga skaiciu');
// }
// switch(skaicius) {
//     case 1: 
//     // kai gavau skaiciu === 1
//     console.log('pirmadienis');
//     break;
//     case 2:
//     console.log('antradienis');
//     break;
//     case 3:
//         console.log('Treciadienis');
//         break;
//         default:
//             console.log('ivedete bloga skaiciu');


// }


//  metu ketvirti reikia parasyti.

let metuKetvirtis = Number(prompt('iveskite menesio numeri nuo 1 iki 12'));
switch(metuKetvirtis){
    case 1:
    case 2:
    case 3:
        console.log(`Jusu ivestas menesio numeris ${metuKetvirtis} priklauso pirmam ketvirciui`);
        break;
    case 4:
    case 5:
    case 6:
        console.log(`Jusu ivestas menesio numeris ${metuKetvirtis} priklauso antram ketvirciui`);
        break;
     case 7:   
     case 8:   
     case 9: 
     console.log(`Jusu ivestas menesio numeris ${metuKetvirtis} priklauso treciam ketvirciui`);
     break; 
     case 10:   
     case 11:   
     case 12: 
     console.log(`Jusu ivestas menesio numeris ${metuKetvirtis} priklauso treciam ketvirciui`);
     break;
     default:   
     console.log(`Jusu ivestas menesio numeris ${metuKetvirtis} nepriklauso nei vienam ketvirciui`);
}
  