let score = undefined

///console.log(typeof score);;
///console.log(typeof (score));

let valueInNumber = Number(score)   //to use for conversion
///console.log(typeof valueInNumber);   // define datatype
///console.log(valueInNumber);         //print the value 


// notes:-
//"33" => 33
// "33abc" => NaN
// ture => 1 ; false => 0
//null => 0;
//undefined => NaN
 
let isLoggedIn ="mahaveer"

let booleanInLoggedIn = Boolean(isLoggedIn)
///
//console.log(booleanInLoggedIn);     
//  isLoggedIn= 1    give ture;
// isLoggedIn= ""    give false;
// isLoggedIn= "mahaveer" give true;

let someNumber = 45

let stringNumber = String(someNumber)
///console.log(stringNumber);
///console.log(typeof stringNumber);
//print => 45;
//type => string


//********************* Operations***************************** */

let value =3
let negValue =-value
///console.log(negValue);

///console.log(3+3);
///console.log(3-3);
///console.log(2*2);
///console.log(3**3);
///console.log(2/3);
///console.log(2%3);  //cryptography

let str1 = 'hello'
let str2 ="mahaveer"

let str3 = str1 +" "+str2
///console.log(str3);

///console.log("1" + 2); // give 12
///console.log( 1 + "2");// give 12     
///console.log( "1" + 2 + 2); // give ans 122
///console.log( 1 + 2 + "2");   // give answer 32 , find  type conversion from tc39 

///console.log( 3 + 4 *5 % 3); // you don't write mashy code

///console.log(+true); // ture => 1 ;
///console.log(true+); //true + => error;
///console.log(""); // ""=> kuch nhi aayga khali hoga 
//console.log(+""); // +""=> 0;

let num1, num2, num3

num1 = num2 =num3 = 2 + 2  // this is not  better way to define varible

let gameCounter = 100
///gameCounter++;  // preincrement(prefix)
++gameCounter;  // postincrement(postfix)

console.log(gameCounter);