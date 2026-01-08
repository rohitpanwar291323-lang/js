//  for of

// const arr = [ 1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello World!"
// for (const greets of greeting) {
//     console.log(`each char is ${greets}`);
    
    
// }

// maps

const maps = new Map()
maps.set("IN", "India")
maps.set("US", "United States") 
maps.set("FR", "France")

// console.log(maps);

for (const [key,value] of maps) {
    console.log(key, ":" , value);
    
}

 

