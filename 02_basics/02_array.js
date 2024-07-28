let subs = ["Hindi", "English", "Maths", "Physics", "Chemistry"];
let stream = ["Arts" ,"Science", "Commerce", "Industrial Tech"];
// console.log(subs.concat(stream));
//  newArr = Array.of(subs, stream);
// let newArr = Array.from("substream");
// console.log(Array.isArray(stream, "Arts"));

// let newArr = [...stream, ...subs];                // to add 2 arrays using ... spread 



let newArr = [4,5,7,1,[9,48,74,15,2, [8,20,15,30]] , 87,15,35,65,[25,20,16,17,86]];
let otherArr = newArr.flat(3);             // isse arry ake andar array ko manipulate kar skahte hai 
console.log(otherArr);

