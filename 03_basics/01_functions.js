function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
}

// sayMyName();


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log(result);




//if statment with function

function loginUserMessage(username = "meh"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))   // dif. use of spread...

const user = {
    username: "shell",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "meh",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));