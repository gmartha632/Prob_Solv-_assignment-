// Parameter-less Function with No Return Type

function greet(){
    console.log("Hello World");
}
greet();

// Parameter-less Function with a Return Type

function getRandomNumber(){
return Math.random() ;
// return Math.floor(Math.random()*10);
}
let Random = getRandomNumber() 
console.log(Random);

//Parameterized Function with No Return Type 
let  displayGreeting = function(name){
    console.log (`Hello , ${name} ! `)
}
displayGreeting("Muthu");
displayGreeting("Ram");

//Parameterized Function with a Return Type
function CalculateSquare(num){
    return num*num 
}
let Square = CalculateSquare(4) ;
console.log(Square);
  Square = CalculateSquare(5);
console.log(Square);


// Function to Concatenate Two Strings
function concatStrings(a,b){
    console.log( `${a} ${b}`);

}
concatStrings("Good","Bad");

//Function to Check if a Person is an Adult
let isAdult = function(age){
    if(age >= 18){
        console.log("True")
    }
    else{
        console.log("False")
    }

}
isAdult(21)
isAdult(15)

//Simple Function to Add Two Numbers
 function addNumbers(c,d){
    return c+d 
 }
let result = addNumbers(5,15)
console.log(result)  ;

// Function to Check if a Number is Even or Odd
function  isEven(Enum){
if(Enum % 2 === 0){
    console.log("True")
}
else{
    console.log("False")
}
}
isEven(6)
isEven(7)

//Function to Compare Two Numbers
function  compareNumbers(num1 ,num2){
if(num1 == num2 ){
    console.log("The numbers are equal");
}
else if(num1 > num2){
    console.log("The first number is greater");
}
else if(num2 > num1){
console.log("The second number is greater")
}


}
compareNumbers(3,8)
