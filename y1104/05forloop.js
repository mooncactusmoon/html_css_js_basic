const iphoneObj={
    "iphone8" : 8000,
    "iphone9" : 10000,
    "iphone11" : 15000,
    "iphone12" : 20000,
    "iphone13" : 32000,
}
console.log(iphoneObj);
for(const[key, value] of Object.entries(iphoneObj)){
    console.log(`${key}:${value}`)
}

// const myArr=['amy','bob','candy','dodo'];
// //js foreach
// myArr.forEach(myFunc);
// function myFunc(value,key){
//     console.log(value);
//     console.log(key);
// }


// const myArr=['amy','bob','candy','dodo'];
// console.log(myArr.length);
// console.log(myArr[3]);

// for(let i in myArr){
//     console.log("for in , i = " + i);
// }
// myArr.pop(); //刪除最後一個元素
// myArr.push('egg'); //增加一個元素
// console.log(myArr);
// console.log(myArr.length);



// const myArr=['amy','bob','candy','dodo'];
// for(let i = 0 ; i < myArr.length ; i++){
//     console.log(myArr[i]);
// }
//myArr.length 抓陣列長度
//要先用let宣告變數



// for(let i = 0 ; i < 5 ; i++){
//     console.log("i =" + i);
// }
