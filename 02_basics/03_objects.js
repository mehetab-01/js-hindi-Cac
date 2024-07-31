// singleton 
// object.create


// object literals
const mySym = Symbol("key2");                 // remember how to add symbol in object
let tinderUser = {
    "full name": "Shell0bee",
    [mySym]: "hellokey"
};

tinderUser.id = "412DSs";
tinderUser.user = "Mehetab";
tinderUser.email = "meh@gog.com";

// console.log(tinderUser);
// console.log(tinderUser.email);
// console.log(tinderUser["full name"]);
// console.log(tinderUser);
Object.freeze(tinderUser);                   // makes object freeze and not able to make changes

let Obj1 = {1:"w", 2:"k"};
let Obj2 = {5:"D", 4:"J"};

// const Obj3 = {...Obj1, ...Obj2};
const Obj3 = Object.assign({},Obj1,Obj2);

// console.log(Obj3);

let newObj = {
    "hello":"hi"
};

newObj.salam = function () {
    console.log("Assalam Alaikum");
}

// console.log(newObj);
// console.log(newObj.salam);
// console.log(newObj.salam());


let inObj = {
    "name" : {
        "first": "Shell",
        "last": "obee",
        "username": {
            "inGame": "shell0bee",
            "chat": "shell"
        } 
    }
}

// console.log(inObj);
// console.log(inObj.name);
// console.log(inObj.name.first);
// console.log(inObj.name.username);
// console.log(inObj.name.username.inGame);


let arrObj = [
    {name: "Meh"},
    {name : "shell"},
    {name : "PwMeh"},
    {name : "assasin"}
];
// console.log(arrObj[2].name);


// console.log(tinderUser);
// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("idd"));   // checks the property