///const tinderUser = new Object() //singlton object
 const tinderUser = {}    //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
           userfullname:{
            firstname: "Mahaveer",
            lastname: "Giwariya"
           }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// obj1+obj2

///const obj3 = { obj1, obj2}
 //const obj3 = Object.assign({},obj1, obj2, obj4)
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = {...obj1,...obj2,...obj4}

//console.log(obj3);


const users =[
    {
        id: 1,
        email: "mahaveer@google.com"
    },
    {
        name: "mahaveer"
    },
    {
        last: "Giwariya"
    }
]

//console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // array me konsi konsi value h
// console.log(Object.values(tinderUser)); // array value 
// console.log(Object.entries(tinderUser)); // array me har ek value ko array me likhna hota h

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye array me property h ya nhi h

// d structuring

const course = {
    coursename: "js hindi" ,
    price: "999",
    courseInstructor: "mahaveer"
}

//course.courseInstructor
const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

/* react me (D-structuring)
const navbar = (props.company) => {
                {company} likh dena direct
}

navbar(company = "mahaveer")
*/

//================= API ========================/
// {
//     "name": "mahaveer"
//     "coursename":"js in hindi"
//     "price": "free"
// }


[
    {},
    {},
    {}
]
