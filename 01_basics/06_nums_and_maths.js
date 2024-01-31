const score = 400
///console.log(score);

const balance = new Number(100)
///console.log(balance); //give [ Number: 100]

///console.log(balance.toString().length); // give 3
///console.log(balance.toFixed(2)); //  give 100.00

const otherNumber = 123.8966 // give 123.9 when use toPrecision(3)

///console.log(otherNumber.toPrecision(4)); // give 124

const hundreds =1000000
///console.log(hundreds.toLocaleString('en-IN') );

//--------------------------------------maths---------------------------------------------------------------

/// console.log(Math); //isse console me use karo
/// console.log(Math.abs(-4)); // -4=>4, 4=>4;
/// console.log(Math.round(4.3)); //give 5;
/// console.log(Math.ceil(4.2)); // take uppar value (5)
/// console.log(Math.floor(4.9)); // take lower value (4)
/// console.log(Math.min(4, 3, 6, 8)); // 3
/// console.log(Math.max(4, 5, 9, 10)); //10

console.log(Math.random()); //  give value 0,1 
console.log((Math.random()*10) + 1); // . (decimal ke baad 0 se bachne ke liya aaage value bada di isly + 1 kiya !  )
console.log(Math .floor(Math.random()*10) + 1); //

const min = 10 // define 
const max =20 // define

console.log(Math.floor(Math.random() * (max - min + 1) )  // * 10 = (max -min +1) se kar diya,  +min(0 case avoid karne ke liya )

 + min)



