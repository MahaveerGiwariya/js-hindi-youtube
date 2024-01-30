// # primitive (based on access)

// 7 types : String,Number,Boolean, null,undefined,Symbol,BigInt

// javascript is dynamic language  because in javasript no need of define datatype for which type of data store in variable!

//javascript master = Objects,browser web event!
const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //in the undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false

const bigNumber = 123254757987567090850n  // agar aap number ke baad n lagte h toh vo bigInt ban jata h  




//Reference (Non primitive)

//Array,Objects,Functions(datatype function h )

 const heros = ["shaktiman" , "naagraj","doga"];  // this aaray

let myObj = {
    name: "mahaveer",
    age: 21,
}    // isme String, Number, Boolean, Function, array, dusra Object ho skta h

 const myFunction = function(){
         console.log("Hello world");
}

/*Undefined=="undefined"
Null =="object"
Boolean=="boolean"
Number=="number"
String=="string"

Object (native and does not implement [[Call]]) ===="object"

Object (native or host and does implement [[Call]]==="function"

// Object (host and does not implement [[Call]]) == Implementation-defined except may not be "undefined", "boolean", "number", or "string"*/



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive) , Heap(non-premitive)

let myYoutubename = "mahaveergiwariya@gmail.com"

let anotherName = myYoutubename

anotherName = "chai aur me code"

console.log(anotherName);  // give  chai aur me code
console.log(myYoutubename); //  give mahaveergiwariya@gmail.com

//bjects is reference variable that why inthis value change in before variable and after variable value same !
let userOne = {
    Email: "ravigiwariya@googal.com",
    upi: "ravi@ypl"
}

let userTwo = userOne

 userTwo.Email = "raju@google.com"

console.log(userOne.Email); // raju@google.com
console.log(userTwo.Email); //raju@google.com
