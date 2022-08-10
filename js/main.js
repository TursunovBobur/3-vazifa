


let koylak = prompt('koylak  10%');

let shim = prompt('shim  15%');

let krasofka = prompt('krasofka  20%');

let money = prompt('money How Much');

let koylakPrice = (100000-100000*0.10)*koylak;

let shimPrice = (150000-150000*0.15)*shim;

let krasofkaPrice = (130000-130000*0.13)*krasofka;

let bay = koylakPrice + shimPrice + krasofkaPrice;


if(money > bay){
  alert('yes you can bay');
}
else{
  alert('no there is not enough money');
}






// let a = (10);
// let b = (5);
// console.log 


// let a = 2 * (2 + 4 * (3 + 1));
// alert(a);                             /* ekranga 36 chiqadi */

// let a = 1;
// let b = -a; 
// alert(b);                             /* ekranga -1 chiqadi */

// let a = 3 * 2 ** 3 * 3;
// alert(a);                               /* ekranga 72 chiqadi */

// let a = (3 * 2) ** 3;    
// alert(a);                               /* ekranga 216 chiqadi */


let = flycoast = 500;
let hotelcoast = 250;
let museumcoast =120; 

let fly = alert('samalyot bileti 500$');
let hotel = alert('hotel 250$');
let museum = alert('museum 120 evro');

let travel = prompt('sayohat uchun qancha pulingiz bor', 0);

let moneyTravel = flycoast + hotelcoast + museumcoast; 
console.log(moneyTravel);

let coursDollar =('1$=10650.34');
let dollar = 10650.34
// dollar kurs
let coursEvro =('1evro=11650.03');
let evro = 11650.03
// evro kurs

let priseCoursDollar =(travel / dollar);
console.log(priseCoursDollar);
let priceCoursEvro =(travel / evro); 
// klient kritgan summa

let eq =priseCoursDollar -moneyTravel;
console.log(eq);

if(eq > 0){
  alert('Oq yol Alisher');
}
else{
  alert('Biroz sabr qiling');
}
























