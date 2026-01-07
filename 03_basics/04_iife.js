//  Immediately Invoked Function Expression (IIFE)

(function one() {                                     // named IIFE
    console.log(`DB CONNECTED`);

}());

( () => {                                             // UNnamed IIFE
    console.log(`DB DISCONNECTED`);
})()