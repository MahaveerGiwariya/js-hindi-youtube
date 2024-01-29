// # primitive (based on access)

// 7 types : String,Number,Boolean, null,undefined,Symbol,BigInt

// javascript is dynamic language  because in javasript no need of define datatype for which type of dat store in variable!

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
