
function saymyName() {
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("A");
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
    
}

//saymyName()


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumber()// NaN
// addTwoNumber(3, "9") // 39
// addTwoNumber(3, "a") // 3a
// addTwoNumber(3, null)
// addTwoNumber(3, 9) // 12

// const result = addTwoNumber(3, 9)

// console.log("result:", result) // result: undefined
/*
function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return result
   /// console.log("mahaveer") // ye print nhi hoga because return ke baad function koi kaam nhi karega 
}
const result = addTwoNumber(3, 9)
console.log("Result:", result);
*/
function loginUserMessage(username = "page") {
    if (username === undefined ,  !username ) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mahaveer Giwariya"))
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) // undefined logged in


// function calculateCartPrice(...num1) {
//             return num1                                  // ... rest oprator/ spraed oprator
// }

function calculateCartPrice( val1, val2, ...num1) {
    return num1                                  // ... rest oprator/ spraed oprator
}
console.log(calculateCartPrice(2, 5, 8, 100, 1000));
