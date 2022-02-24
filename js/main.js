var flightCostInDollar = 500;
var hotelCostInDollar = 250;
var museumCostInEuro = 120

var USD_TO_UZS = 9433.34;
var EURO_TO_UZS = 10354.03;

var flightCostInSum = flightCostInDollar + USD_TO_UZS;
var hotelCostInSum = flightCostInDollar + USD_TO_UZS;
var museumCostInSum = museumCostInEuro + EURO_TO_UZS;

var result = flightCostInSum + hotelCostInSum + museumCostInSum;

var usersMoney = prompt ("Pullingizni kiriting",0)
console.log(result,usersMoney)
var amoundValidation = result <= usersMoney;
var amoundDifference = Math.round(result - usersMoney)

if(amoundValidation) { 
    console.log("Oq yol,Alisher");
} else {
    console.log('Alisher uhlab jim yuraqo.Senga ');
}

console.log(result,usersMoney)
