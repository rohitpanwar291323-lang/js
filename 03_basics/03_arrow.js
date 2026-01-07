const user = {
    username: "Rohit",
    price: 999,

    greetMessage: function(){
        console.log(`${this.username} , welcome to the website!`);
        
    }


}
// user.greetMessage()


// function one (){
//     console.log(this);
//     // console.log(this.username);                       // this does not work in function
    
    
// }

// one()


// const one = () =>{                                          // arrow function
//     let username ="Rohit";
//     console.log(this);                                      
// }

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2



// }

const addTwoNumbers = (num1, num2) => (num1 + num2);               // implicit return = no need to write return
console.log(addTwoNumbers(5, 6));

