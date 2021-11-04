console.log(typeof({}));
const myObject = {
    name : "amy",
    age : 18,
    tel : "0912-121-121",
    isAdmin: false
    //最後可以甚麼都不加也可以加逗點，千萬不能用分號
}
console.log("myObject ",myObject);
console.log(myObject.isAdmin);
console.log(myObject['name']);

myObject.age = 999;
console.log(myObject.age);
myObject = 5568888;
console.log("myObject ",myObject);


// const myObject2 = {
//     name : "bob",
//     age : 25,
//     tel : "0912-555-555",
//     isAdmin: true
//     //最後可以甚麼都不加也可以加逗點，千萬不能用分號
// }
// console.log("myObject2 ", myObject2);
// console.log(myObject2.isAdmin);
// console.log(myObject2['name']);