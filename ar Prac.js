

let day = 4;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        
}

function calculator(operator, number1, number2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = number1 + number2;
            console.log(result);
            break;
        case '-':
            result = number1 - number2;
            console.log(result);
            break;
        case '*':
            result = number1 * number2;
            console.log(result);
            break;
        case '/':
            result = number1 / number2;
            console.log(result);
            break;
        default:
            console.log("invalid operator");
            break;
    }
}

function printSeries(n) {
    let i = 1 ;
    while ( i <= n) {
        console.log (i*i);
        i++;
        
        
    }
} printSeries(5)

function printBetween2Nums(a, b) {
   
    while(a <= b)
        {
            console.log(a);
            a++;
        }
    
}printBetween2Nums(5, 8)

function sumof(num){
    let i = 1;
    let sum = "";
    while(i<=num){
       sum = sum +" " + ( i* 5);
       i++
    }
    return sum
 }
 console.log(sumof(5));

 function sumOfNEven(n) {
    let a = 1;
    let start = 0 ;
    
    while(a <= n){
        let b = a*2 ;
        start += b ;
       
        a++;
        
        
    }
      
     
console.log(start);

}sumOfNEven(3);

function multiply(a,b){

return a*b ;

}
let result = multiply(3,4) ;
console.log


let message = `She said , \"Javascript is awesome\"`;
console.log(message.includes("Javascript"));

// let name = "John"; 
// let age = 25; 
// let message = `My name is ${name} and I am ${age} years old.`;

// console.log(message);

let phrase = "I love coding in JavaScript!";
console.log(phrase.indexOf('coding'));



let scores = [90, 85, 70, 100];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
     sum += scores[i];

     console.log("Sum: " + sum);

}

let words = ["apple", "banana", "grape", "kiwi"];
let longWords = words.filter(function(word)  { return word.length > 4});
console.log(longWords);
let temperaturesCelsius = [0, 20, 30];
let temperaturesFahrenheit = temperaturesCelsius.map(function(celsius)  {return (celsius * 9/5) + 32});
console.log(temperaturesFahrenheit); 
 



//trim
let address = "Freshworks, Global Infocity, Perungudi, Chennai - 600096"
 
function partsOfString(address){
    let parts = address.split(',');  // Split the string by commas

    // Use a for loop to iterate through each part of the address
    for (let i = 0; i < parts.length; i++) {
        console.log(parts[i].trim());  // Trim and print each part
    }
}
partsOfString( "Freshworks, Global Infocity, Perungudi, Chennai - 600096"
);
 
 
 
  