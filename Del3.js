// Loopar och arrayer 

const arr = [
    615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556
];    

//Punkt 1. loop och console.log 
arr.forEach(num=>console.log(num)); 

//Punkt 2. Baklänges 
console.log("baklänges");  //endast för att separera i loggen 

for(i=arr.length-1; i>=0; i--) {
    console.log(arr[i]);
}

//Punkt 3. 

function sortArray(array){
   const sortedArray=array.sort((a,b) => a-b); 
   return sortedArray;
} 

console.log(sortArray(arr)); 

