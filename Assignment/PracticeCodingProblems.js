//Loops , conditionals , Functions

//Fix the issues in this code

function calculateArea() {
  const radius = 5;
  var area = Math.PI * radius * radius;
  console.log(area);
}
calculateArea();
function greetUser() {
  var userName = "John";
  console.log(userName);
}
greetUser();

//continuing loop upto 100

// let count = 0;
// while (count <= 100) {
//     count = count + 1;
//  console.log("Counting down: " + count);

// }

// temperature value

let temperature = 30;
if (temperature === 20) {
  console.log("It's cold outside.");
} else {
  console.log("It's warm outside.");
}

//4th sum

function checkNumber(num) {
  if (num < 0) {
    console.log("Negative");
  } else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}
checkNumber(-5);
checkNumber(0);
checkNumber(10);

//5th sum SumNumbers  using while loop

function sumNumbers(n) {
  let i = 1;
  let count = 0;
  while (i <= n) {
    count += i;
    i++;
  }
  return count;
}
// console.log(sumNumbers(3));

//6th sum Factorial

function factorial(n) {
  let x = n - 1;
  while (x > 1) {
    n = n * x;
    x--;
  }

  return n;
}
//  console.log(factorial(4));

// 7th sum printEvenNumbers
function printEvenNumbers(n) {
  let i = 1;
  while (i <= n) {
    let result = 2 * i;
    console.log(result);
    i++;
  }
}
printEvenNumbers(3);

// 8th sum Error fixing in while loop

function sumNumbers(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
// console.log(sumNumbers(4));

// 9th sum classifyNumber

function classifyNumber(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("Divisible by both 3 and 5");
  } else if (n % 3 === 0) {
    console.log("Divisible by 3");
  } else if (n % 5 === 0) {
    console.log("Divisible by 5");
  } else if (n % 3 != 0 && n % 5 != 0) {
    console.log("Not divisible by 3 or 5");
  }
}
classifyNumber(20);

//  10th sum getDayName

function getDayName(n) {
  switch (n) {
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
      break;
  }
}
getDayName(8);

//  11th sum printMultiplicationTable

function printMultiplicationTable(n, r) {
  for (let i = r; i >= 1; i--) {
    console.log(n * i);
  }
}
printMultiplicationTable(5, 6);

// 12th sum robot completing laps
function laps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`Robot completes ${i} laps `);
  }
}
laps(3);

// 13th sum Battery low to 20%

function Battery(n) {
  let i = 20;
  while (n > i) {
    console.log(n + "%");
    n = n - 5;
  }
  console.log("Battery is low");
}
Battery(30);

// 14th sum Direction
function Direction(n) {
  switch (n) {
    case "North":
      console.log("This is North");
      break;
    case "South":
      console.log("This is South");
      break;
    case "East":
      console.log("This is East");
      break;
    case "West":
      console.log("This is West");
      break;

    default:
      console.log("undefined");
  }
}
Direction("North");

// 15th sum “Flight arrived” message
function Arrival(n) {
  let i = n;
  while (i > 0) {
    console.log(i);
    i -= 10;
    if (i === 0) {
      console.log("Flight arrived");
    }
  }
}
Arrival(100);

// function Arrival(n){
//   for(i= n ; i > 0 ;i -= 10 ){
//     console.log(i);

//   }
//   console.log("flight arrived")

// }
// Arrival(100) ;

// 16th sum  Flight’s destination

function Runway(n) {
  switch (n) {
    case "Chennai":
      console.log("Runway 1");
      break;
    case "Banglore":
      console.log("Runway 2");
      break;
    case "Kolkata":
      console.log("Runway 3");
      break;
    case "New Delhi":
      coinsole.log("Runway 4");
  }
}
Runway("Chennai");

//17th sum Altitude increment

function AltitudeIncrement(n) {
  for (let i = 100; i <= n; i += 100) {
    console.log(`The altitude is ${i} ft `);
  }
}
AltitudeIncrement(1000);

//Array Solutions

// 1st sum Train_departures
let train_departures = [10, 15, 7, 20, 5];
let min = Math.min(...train_departures);
console.log("Least Number:" + min);

// 2nd sum  Total number of available seats

let seats = [1, 0, 1, 1, 0, 0, 1, 0];

let available = seats.filter(function (seat) {
  return seat < 1;
});
console.log("Total seats available:" + available.length);

// 3rd sum Highest number in array

function Highest(soldiers) {
  let more = soldiers[0];
  for (let i = 0; i < soldiers.length; i++) {
    if (soldiers[i] > more) {
      more = soldiers[i];
    }
  }
  return more;
}
console.log("Highest number :" + Highest([120, 300, 250, 180, 150]));

// 4th sum average population

function average(populations) {
  let sum = 0;
  for (let i = 0; i < populations.length; i++) {
    sum += populations[i];
  }
  result = sum / populations.length;
  console.log(`Average population :  ${result}`);
}
average([50, 60, 70, 80, 90]);

// 5th sum  lowest water level
function Indicator(WaterLevel) {
  let lowest = WaterLevel[0];
  for (let i = 0; i < WaterLevel.length; i++) {
    if (lowest > WaterLevel[i]) {
      lowest = WaterLevel[i];
    }
  }
  return lowest;
}
console.log("Lowest Water Level :" + " " + Indicator([30, 50, 20, 40, 60]));

//  6th sum closest upcoming festival.
let days_until_festival = [30, 15, 45, 10, 25];
let minimum = Math.min(...days_until_festival);
console.log(`closest upcoming festival in  ${minimum} days`);

//7th sum check if any two helicopters are scheduled to land at the same time.

function similarTimings(landing_times) {
  let next = landing_times[0];
  for (let i = 0; i < landing_times.length; i++) {
    for (let j = i + 1; j < landing_times.length; j++) {
      if (landing_times[i] === landing_times[j]) {
        console.log(`same number : ${landing_times[i]}`);
      }
    }
  }
}
similarTimings([12, 15, 12, 18, 20]);


// Temperatures more than 80 degrees

let temperatures = [75, 80, 72, 85, 90];
let weather = temperatures.filter(function(high){
  return high > 80;

});
console.log(weather);

//9th sum Total no buses
    function  students_per_route(array){ 
      let total = 0 ;
      let buscapacity = 50;
      for(let i  = 0 ; i < array.length ; i++){
            total += array[i];
          }
          let average = total/buscapacity ;
         console.log(`Total no of buses required :${Math.round(average)}`);
        } students_per_route([45, 55, 30, 60, 40]);



// 10th sum Total expenses
let dailyExpenses = [90, 85, 70, 100 ,65,75, 80];
let sum = 0;

for (let i = 0; i < dailyExpenses.length; i++) {
     sum += dailyExpenses[i];
}

console.log("Total expenditure for a week : " + sum); 

//11th sum  student grade average
      function grade(average){
        let sum = 0 ;
        for(let i = 0 ;i < average.length ;i++){
          sum += average[i]
        }
        let result =sum/average.length ;
        console.log("Average Grade " +" "+ result);
      
      }grade([20,30,45,70]);


//12th sum  adult

let  ages = [18 ,21 ,13 ,17,25];
let adults =ages.filter(function(age){
   return age >= 18 ; 
});
console.log(adults);


//13th sum even array 

let array = [12,20,25,37,6];
let count = 0 ;
for(let i = 0 ; i < array.length ; i++){
  if(array[i] % 2 === 0){
     count ++;
     
  }
  }
console.log(`Total even numbers : ${count}`);

//Array methods and Objects
 // Push Multiple Elements
  let color = ["red","blue",]
  color.push("green")
  color.push("grey")
  console.log(color)

  // Shift Multiple Times

  let fruits = ["apple","grapes","kiwi","banana","Watermelon"]
  fruits.shift()
  console.log(fruits)
  fruits.shift()
  console.log(fruits)

  // Unshift with Multiple Arguments

  let sports = ["cricket","football"]
  sports.unshift("batmiton","volleyball","basketball")
  console.log(sports)

  //Find Non-Existing Element with indexOf()

  let devices = ["mobile","Laptop","iPad"]
 console.log(devices.indexOf("Laptop")); 

 //Split String with Different Delimiter
 let string = "HTML-CSS-JavaScript";
let split = string.split("-");
console.log(split);


//  Reverse Order of Array Using pop()
let num = [1,2,3,4];
let empty = [];
let arr = num.length;

for( let i= 0 ; i < arr ;i++){
  empty.push(num.pop())
  
}
console.log(`Reversed array : ${empty}`)

//Joining Array Elements Without a Separator

let  Fruits = ["Apple","Banana","Mango","Litchi"]
 let str =Fruits.join()
console.log(str)

// Object with Simple Properties

let car = {
  make : "japan",
  model : "Alto 300" ,
  year : 1999,
 
}
console.log(car.model);

// Array of Objects (Books)

let Library = [
  Book1 ={
    title :"Digital Fortress",
    author : "Nora Roberts",
  },
  Book2 ={
    title :"Rage of Angels",
    Author : "Sidney sheldon",

  },
]
console.log(Library[0].title);

//Adding New Property to Objects in an Array

let cars = [
  {Brand : "Tata", model : "Jaguar"},
  {Brand : "Renault", model : "Duster"},
  {Brand : "Mahindra", model : "Xuv 100"},
  {Brand : "Toyoto", model : "Fortunner"}
];
cars[0].year = 2012;
cars[1].year = 2013;
cars[2].year = 2014;
cars[3].year = 2015;
console.log(cars);


// Summing Object Property Values in an Array

products = [
  { name: "Laptop", price: 8000 },
  { name: "Phone", price: 5000 },
  {name:"Tablet",price:6000},
]
let add = 0;
for(let i =0; i < products.length ;i++){
  add += products[i].price;
}
console.log(`Total price = ${add}`)


// Finding an Object by Property Value in an Array 

students = [
  { name: "Anbu", grade: "A" },
  { name: "Azzez", grade: "B" },
  { name: "Anwar", grade: "A" },
  { name: "Athin", grade: "A" },
  { name: "Arshad", grade: "B" },

]
let output = [];
for( let i= 0 ;i <students.length ; i++){
 if(students[i].grade === "A"){
  output.push(students[i].name) ;

 }
}
console.log(output);

//Real world use case 

// Average of Scores 
    let score = [80,70,90 ,75 ,88]
    let total = 0 ;
    for (let i = 0 ; i < score.length ; i++){
       total += score[i]

    }
let mean = total/score.length;
console.log(`Average score : ${mean}`); 

//Finding Maximum Score

let scores =[90,93,97,88,85,];
let high = Math.max(...scores);
console.log(`Highest score : ${high}`);

//Number System Conversion 
let decimal = [0.5,0.9,0.75];
let binary = []
for(let i= 0;i < decimal.length ; i++){
   binary.push(decimal[i].toString(2));
}
console.log(binary);




//Boolean Algebra (AND Operation)
let Boolean =  [true, false, true];
let Boolean1 = [false, true, true];
let str1 = [];
for(let i = 0 ; i <Boolean.length ; i++){
  result = Boolean[i]&&Boolean1[i] ;
  str1.push(result);
}
console.log(str1);

//Percentage Increase in Prices
 let oldprices = [85,70,65]
 let newprices = [90,85,75]
 let Percentage = []

for(let i = 0 ; i < oldprices.length ;i++){
      Increase = ((newprices[i]-oldprices[i])/oldprices[i])*100
      Percentage.push(Increase);

    }
console.log(Percentage);

//Set Theory (Union of Two Sets)
    
let num1 = [12,24,36,48,60];
let num2 = [72,84,96,108,120];
let box  = num1.concat(num2);
console.log(box);

//Finding the Mode (Most Frequent Element)

function findMode(arr){
  let maxCount = 0;
  let mode;
  for(let i = 0; i < arr.length; i++){
      let count = 0;
      for(let j = 0; j < arr.length; j++){
          if(arr[i] === arr[j]){
              count++;
          }
      }
      if(count > maxCount) {
          maxCount=count;
          mode = arr[i];
      }
  }
  return mode;
}
console.log(findMode([4, 4, 6, 7, 4, 5, 4, 6, 4, 4, 6]));

//Modulus Operation for Time Calculation

function timeConvert(n){

  for(let  i = 0 ; i < n.length ; i++){
   
   let hour = n[i]/60 ;
   let hr = Math.floor(hour);
   let min = n[i]%60;
    n[i]={  hours: hr, minutes : min };
 
}
return n ;
}
console.log(timeConvert([70,90,120,250]))

//  Simple intrest

details = [
  { principal : 12000, rateOfInterest : 5, noOfYears: 4},
  { principal : 15000, rateOfInterest : 4, noOfYears: 3},
  
  { principal : 13000, rateOfInterest : 3, noOfYears: 4},
  { principal : 18000, rateOfInterest : 4, noOfYears: 3},

  { principal : 17000, rateOfInterest : 5, noOfYears: 3},
  { principal : 15000, rateOfInterest : 5, noOfYears: 3},

  { principal : 20000, rateOfInterest : 4, noOfYears: 5},
  { principal : 21000, rateOfInterest : 3, noOfYears: 6},

  { principal : 25000, rateOfInterest : 5, noOfYears: 4},
  { principal : 30000, rateOfInterest : 4, noOfYears: 3},

  ];
  let sums= 0;
  let Arr = []
for(let i = 0 ; i < details.length ;i++){
  sums =details[i].principal * details[i].rateOfInterest * details[i].noOfYears / 100;
  Arr.push(sums);
}
console.log(Arr);


//  Total marks
students = [
  { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
  { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
  
  { subject1Marks: 30, subject2Marks: 60, subject3Marks: 70 },
  { subject1Marks: 70, subject2Marks: 90, subject3Marks: 65 },

  { subject1Marks: 40, subject2Marks: 90, subject3Marks: 75 },
  { subject1Marks: 60, subject2Marks: 90, subject3Marks: 65 },

  { subject1Marks: 90, subject2Marks: 90, subject3Marks: 60 },
  { subject1Marks: 50, subject2Marks: 40, subject3Marks: 65 },

  { subject1Marks: 70, subject2Marks: 80, subject3Marks: 50 },
  { subject1Marks: 90, subject2Marks: 70, subject3Marks: 65 },

]
let Sum = 0;
let ARRAY = [];
for(let i =0;  i <students.length; i++){
  Sum = students[i].subject1Marks + students[i].subject2Marks+ students[i].subject3Marks ;
  ARRAY.push(Sum);
} 
 console.log(ARRAY);

 // Monthly expenses

 expenses = [
  { rent: 1000, groceries: 500, utilities: 200 },
  { rent: 800, groceries: 400, utilities: 750 },

  { rent: 3000, groceries: 900, utilities: 200 },
  { rent: 800, groceries: 400, utilities: 150 },

  { rent: 5000, groceries: 500, utilities: 200 },
  { rent: 800, groceries: 900, utilities: 150 },

  { rent: 10000, groceries: 500, utilities: 2000 },
  { rent: 8000, groceries: 400, utilities: 150 },

  { rent: 7500, groceries: 500, utilities: 200 },
  { rent: 7500, groceries: 4000, utilities: 150 },

  ]
  let Sums = 0;
let ARR = [];
for(let i =0;  i <expenses.length; i++){
  Sums = expenses[i].rent + expenses[i].groceries + expenses[i].utilities;
  ARR.push(Sums);
} 
 console.log(ARR);



 


   





    
  