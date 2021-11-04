
const item1 = {
    name : "紅茶:D",
    price : 30 
}
console.log("item1 :",item1);
const item2 = {
    name : "綠茶:D",
    price : 35
}
console.log("item2 :",item2);
const item3 = {
    name : "奶茶:D",
    price : 50
}
console.log("item3 :",item3);
const item4 = {
    name : "咖啡 :D",
    price : 60
}
console.log("item4 :",item4);
//document.getElementByID 印innerHTML後面的東西到HTML的相對ID位置
document.getElementById("name1").innerHTML=(item1.name);
document.getElementById("name2").innerHTML=(item2.name);
document.getElementById("name3").innerHTML=(item3.name);
document.getElementById("name4").innerHTML=(item4.name);

document.getElementById("price1").innerHTML=(item1.price);
document.getElementById("price2").innerHTML=(item2.price);
document.getElementById("price3").innerHTML=(item3.price);
document.getElementById("price4").innerHTML=(item4.price);

const form = document.getElementById("myForm");
const the1 = document.getElementById("num1ID");
const the2 = document.getElementById("num2ID");
const the3 = document.getElementById("num3ID");
const the4 = document.getElementById("num4ID");
// const resultBtn = document.getElementById("result");

form.addEventListener("submit",function (e){
    e.preventDefault();
    let the1 = parseInt((item1.price) * (num1ID.value));
    let the2 = parseInt((item2.price) * (num2ID.value));
    let the3 = parseInt((item3.price) * (num3ID.value));
    let the4 = parseInt((item4.price) * (num4ID.value));
    let all = the1 + the2 + the3 + the4 ;
    document.getElementById("t1").innerHTML=(the1);
    document.getElementById("t2").innerHTML=(the2);
    document.getElementById("t3").innerHTML=(the3);
    document.getElementById("t4").innerHTML=(the4);
    document.getElementById("t4").innerHTML=(the4);

    
    document.getElementById("allt").innerHTML=("Total : "+all+"元");
})