// Primitive datatypes

//7 types: Number,String,Boolean,null,undifined,BigInt,Symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol("221")        // Symbol will make it unique
const anotherId = Symbol("221") // it will be unique but id != anotherId

//console.log(id === anotherId);


// Reference (Non Primtive): 

// Array,Objects,Functions

const Pokemon = ["Pikachu", "Charmendor", "Balbasur"]; // array is written in square brackets

let myObj = {               // obj are written inside curly brackets
    name : "Rohit",
    age : 20
}


const myFunction = function(){       // fuctions
    console.log("Hello World");
    
}

// This calls the function to print "Hello World"
myFunction(); 

// These print your data structures
console.log(Pokemon);
console.log(myObj);



