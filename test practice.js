function multiply(a,b){

    return a*b ;
    
    }
    let result = multiply(3,4) ;
    console.log(result) ;

    
    function square(num) {
        return num * num;
      }
      let squaredNumber = square(4); // Outputs: 16
      console.log(squaredNumber);


      let globalVar = "I'm global";

     function scopeExample() {
       let localVar = "I'm local";
       console.log(globalVar); // Accessible
       console.log(localVar);  // Accessible
     }
     scopeExample();

     console.log(globalVar); // Accessible
     
     function add(a, b) {
        return a + b;
      }
      let sum = add(2, 3); // Outputs: 5
      console.log(sum);

      function greet() {
        console.log("Hello!");
      }
      greet();

      //templatesnliterals
      let city = "chennai";
      let weather =`it is hot in ${city}`;
      console.log(weather);
      let tweet = "Learning JavaScript is fun!";
console.log(tweet.length);

let number = 123;
let strNumber = number.toString();

console.log(strNumber); // Outputs: "123"
console.log(typeof strNumber); 


let message = "Welcome to JavaScript!";
let slicedMessage = message.slice(8, 21);

console.log(slicedMessage);


let studentName = "   jane doe   ";
let formattedName = studentName.trim().replace("jane", "Jane").replace("doe", "Doe");

console.log(formattedName);

let fruits = ["Apple", "Banana", "Cherry"];; // Accessing the element at index 1
console.log(fruits[1]);

let nestedArray = [["a", "b", "c"], [1, 2, 3], [true, false]];
console.log(nestedArray[0][0]);


function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = console.log("Please enter your name:");
  callback('Muthu');
}

processUserInput(greet);

let scores = [90, 85, 70, 100];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
     sum += scores[i];
}

console.log("Sum: " + sum);

