// Dates

let myDate = new Date()               
//  console.log(myDate.toString());
// console.log(myDate.toDateString() );
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString()); 
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString()); 
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

 /* this uppar output
Wed Jan 31 2024 02:24:22 GMT+0000 (Coordinated Universal Time)
Wed Jan 31 2024
2024-01-31T02:24:22.928Z
2024-01-31T02:24:22.928Z
1/31/2024
1/31/2024, 2:24:22 AM
2:24:22 AM
02:24:22 GMT+0000 (Coordinated Universal Time)
Wed, 31 Jan 2024 02:24:22 GMT
0
object */


/// let myCreateDate = new Date(2023, 0, 23)
///let myCreateDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreateDate);   // give 2023-01-23T00:00:00.000Z
//console.log(myCreateDate.toDateString());// give Mon Jan 23 2023
///console.log(myCreateDate.toLocaleString()); // give 1/23/2023, 5:03:00 AM
let myCreateDate = new Date("2023-01-14") // aaray me 00 se  and string me 01, we are not use in india

//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
///console.log(myTimeStamp);  // give mili sec of time 1706749476442
///console.log(myCreateDate.getTime()); // we are make myCreateDate ko bhi mili sec me le skte h give 1673654400000
///console.log(Date.now()); // this give value abhi ki value mili sec  1706749849184
///console.log(Math.floor (Date.now()/1000)); //   value in sec  and Math.floor use because . value ko hatane ke liye
let newDate = new Date() 
console.log(newDate);
console.log(newDate.getMonth() +1);// 1 date me se month nikalne ke liye
console.log(newDate.getDay());// 4

//we similarly we use time and use
//'${(newDate.getDay());} and time ${}'
newDate.toLocaleString('default', {
    weekday:"long",
})