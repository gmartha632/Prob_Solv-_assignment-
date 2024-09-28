// LeapYear confirmation

function leapYear(A) {
    if (A % 4 ==0  && (A % 400 == 0 || A % 100 !== 0) ){
        console.log("Y");

    }
    else {
        console.log("N");
    }
}
leapYear(1900);


// sum of terms using array and for loops

let array =[1,5,6,9] 
let sum = 0 ;
for (let i = 0 ; i <= array.length - 1 ; i++ ){
    sum += array[i]
}
console.log(sum);

// First power of 5 after 10000

let a = 1 ;
let power = 0 ;
while(power < 10000){
    power = 5**a ;
    a++ ;
}
console.log(power);

// // sum inbetween 
// function sum(a,b){
//     for(let i = a ,i <= b ; i++){
//        let sum = 0;
//         if(i % 2 == 0){
// sum += i ;
//         }
//     }

// }sum(5,10)