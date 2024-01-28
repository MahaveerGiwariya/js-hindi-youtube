const accountId = 1145
let accountEmail = "hitash@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
console.log(accountId);
// accountId = 2   //not alowed because const dont change 
accountPassword = "22222"
accountEmail = "mahaveer@gamil.com"
accountCity = "ajmer"

/* prefer to not use var
because  in this isuue of blockscope and funcational */
console.table([ ,accountEmail, accountPassword, accountCity]);
