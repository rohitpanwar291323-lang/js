//  object literals


const mySym = Symbol("key1")


const JSuser = {
    name : "Rohit",
    "Full Name" : "Rohit Panwar" ,
    [mySym] : "mykey1" ,
    age : 20 ,   
    email : "rohit@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday", "Saturday"] 
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Name"]);
// console.log(JSuser[mySym]);



// JSuser.email = "rohit@chatgpt.com" // override
// Object.freeze(JSuser)              // freeze the data
// JSuser.email = "hdusd@xjhv.com"    

// console.log(JSuser);


JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["Full Name"]}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());



