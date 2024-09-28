// playing with names and capital letters 

const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for (const city of cities) {
    // write your code just below here
    const lower = city.toLowerCase();
    const firstLetter = lower.slice(0,1);
    const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    const result = capitalized;
    console.log(result)
    
  }


  // Adding elements in 2 array and giving it in other array 
  let array =[1,2,3]
  let array1 = [3,4,5]
  let sum = []
  for(let i = 0 ; i <array.length ; i++){
    total = array[i]+array1[i] ;
    sum.push(total);

    
  }
  console.log(sum);