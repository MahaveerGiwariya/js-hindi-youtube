const name = "mahaveer"
const repoCount = 50
///console.log( name +' '+ repoCount + "value"); // old type writting

///console.log(`Hello my name is ${name}  and my repo Count is ${repoCount} value `); // New type writting

const gameName = new String("mahaveer-hc-giwariya") // put this line on web console  and print this line on console. and find string prototype .   
console.log(gameName); 

///onsole.log(gameName[0]);
///console.log(gameName.__proto__); // proto=.object

///console.log(gameName.length);
///console.log(gameName.toUpperCase());
///console.log(gameName.charAt("3")); // this character position find
///console.log(gameName.indexOf("a")); // this position index of character

///const newString = gameName.substring(0, 4) // not nagative value position
///console.log(newString); // give maha

/// const anotherString = gameName.slice(-8, 4); //  isme negative bhi le skte h
///console.log(anotherString);

const newStringOne = "    mahaveer    "

///console.log(newStringOne);
///console.log(newStringOne.trim());// this remove space around


 const url = "https://mahaveer.com/mahaveer%20"
console.log(url.replace("%20", "_ravi_giwariya" ));

console.log(url.includes("mhasu"));// this tell about this sentence are include or not


console.log(gameName.split("-")); // leave the space and seprate 
