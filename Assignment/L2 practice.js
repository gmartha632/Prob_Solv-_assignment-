//Sum of Even Numbers Using a Loop and Conditional

function sumofEvenNum(a,b){
    let sum = 0 ;
for(i =a ; i <= b ; i++) {
    
if(i % 2 ==0){
sum += i
}
}
console.log(sum);
}
sumofEvenNum(1,20);

//Multiples of 3

function nMultiplesOf3(n){
    for(let i = 1 ;i <= n ; i++){
console.log(i*3);
    }
}
nMultiplesOf3(5);


//DL Method Winner
function  DuckworthLewis( teamScore, targetScore,oversLeft){
     if(teamScore >= targetScore){
         console.log( "Team wins by DL method" );
     }
     else if( teamScore < targetScore  && oversLeft > 0 ) {
        console.log( "Match to be continued" );
     } 
     else if(teamScore < targetScore  && oversLeft == 0){
        console.log( "Team loses by DL method");
     }


    }
    DuckworthLewis(130,128,3)
    DuckworthLewis(100,128,3)
    DuckworthLewis(120,128,0)