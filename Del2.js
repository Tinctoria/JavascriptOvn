// Funktioner

//Punkt 1. klassisk funktion
function number(){
    return 5;
}

console.log(number()); 

//Punkt 2. arrowfunction 
arrowNumber = () => 5; 

console.log(arrowNumber()); 

//Punkt 3. addition
function addition(a, b) {
    return a+b; 
}

console.log(addition(5,7));


//Punkt 4. addition i arrow function 
arrowAddition = (a,b) => a+b; 

console.log(arrowAddition(5,7));

//Punkt 5. Funktion i funktion 
function callFunction(func) {
        let result = func();
        return result;
}

console.log(callFunction(number));