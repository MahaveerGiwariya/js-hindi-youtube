///object ko declear karne ke 2 tarike 1. litteral 2. constructor

// singleton (constuctor)

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "mahaveer", // name  ek string ke trah h
    "full name" : "mahaveer giwariya",
    age: 22,
    [mySym]: "mykey1", // [mySym] use karo tabhi string se symbol me change hoga 
    location: "ajmer",
    email:"mahaveer@google.com",
    isloggedIn: false, 
    lastLoginDays : ["monday" , "Saturday"]
}
// console.log(jsUser.email)
// ///console.log(jsUser.[email]) // string ki tarh use hoga 
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) // string me access kar skte h

// console.log(jsUser[mySym]);
// console.log(mySym);

// jsUser.email = "hitesh@google.com"
// Object.freeze(jsUser)

// jsUser.email = "ram@gmai.com" // but this is not change because freeze
// console.log(jsUser)
jsUser.greeting = function(){
 console.log("hello js user ");
}
jsUser.greetingTwo = function(){
    console.log('hello js user,${this.name}')
}

 //console.log(jsUser.greerting); // undefined
console.log(jsUser.greeting()); // print the value
console.log(jsUser.greetingTwo());