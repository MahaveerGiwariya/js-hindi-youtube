///console.log(2 > 1);// comparsion =tree /false
///console.log(2 >= 1);
///console.log(2 < 1);
///console.log(2 == 1);
///console.log(2 != 1);


console.log("2" > 1);  // true
console.log("02" > 1);  // true
// ** ese conversion confuse kar skte h**/
console.log( null > 0); // give ans = false because javascript understood null== 0(NaN)
console.log(null == 0);// give ans = false
console.log(null >= 0);// give ans = true

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false

//comparision and equalto both are diffrent to do work!

// ===

console.log("2" == 2);  // javascript do conversion
console.log("2" === 2); // but javascript check datatype then both are same than conversion