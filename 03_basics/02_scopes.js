
let a = 100                              // global scope
if(true) {                               // block scope
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}
    

// 
// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const userName = "John"     

//     function two() {
//         const website = "example.com"
//         console.log(userName);
//     }
//     // console.log(website);
//     two()
// }

// one()



if(true){
    const username = "Rohit"
    if(true){
        const website = " example.com"
        console.log(username + website);
        
    }

}
