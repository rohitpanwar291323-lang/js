const tinderUser = {}

tinderUser.id = "36283"
tinderUser.name = "Rohit"
tinderUser.age = 20
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "rohit@google.com",
    fullName : {
        userFullName : {
            firstName : "rohit",
            lastName : "panwar"
        }
    }

}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({} , obj1 , obj2)
//console.log(obj3);

obj4 = {...obj1 , ...obj2}
//console.log(obj4);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



