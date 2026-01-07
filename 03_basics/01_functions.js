

function sayMyName(){

    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}

//sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result
    console.log("Rohit");                                // in functions code after return becomes unreachable
    
}


// const result = addTwoNumbers( 3 , 7)
// // console.log("Result: ", result );

//  function logInUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
//  }

// console.log(logInUserMessage("Rohit"));
// console.log(logInUserMessage());


function calculateCartPrice(num1){                    // return only the first element 
    return num1
}

function calculateCartPrice(...num1){                    // after using rest operator its returns all element
    return num1
}
//console.log(calculateCartPrice(5, 3, 4235, 411));

const user = {
    userName : "Rohit",
    price : 2000
}

function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and the price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    userName : "ali",
    price : 3000

} )





 