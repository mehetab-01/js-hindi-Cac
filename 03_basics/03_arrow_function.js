const user = {
    username: "Shell",
    price: 699,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Meh"
// user.welcomeMessage()

// console.log(this);                  //global scpoe mai defined jo jo hai

function chai(){
    let username = "Shell"
    console.log(this.username);
}

chai()

// const chai = function () {
//     let username = "Shell"
//     console.log(this.username);
// }

const chai2 =  () => {
    let username = "Shell"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

let addTwo2 = (num1, num2) =>  num1 + num2
let add2Two = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "MeHs"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => {})