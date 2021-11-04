
const redtea = {
    name : "紅茶:D",
    price : 30 
}
console.log("redtea :",redtea);
const greentea = {
    name : "綠茶:D",
    price : 35
}
console.log("greentea :",greentea);
const milktea = {
    name : "奶茶:D",
    price : 50
}
console.log("milktea :",milktea);
const coffee = {
    name : "咖啡 :D",
    price : 60
}
console.log("coffee :",coffee);

document.getElementById("name1").innerHTML=(redtea.name);
document.getElementById("name2").innerHTML=(greentea.name);
document.getElementById("name3").innerHTML=(milktea.name);
document.getElementById("name4").innerHTML=(coffee.name);

document.getElementById("price1").innerHTML=(redtea.price);
document.getElementById("price2").innerHTML=(greentea.price);
document.getElementById("price3").innerHTML=(milktea.price);
document.getElementById("price4").innerHTML=(coffee.price);

const form = document.getElementById("myForm");
const the1 = document.getElementById("num1ID");
const the2 = document.getElementById("num2ID");
const the3 = document.getElementById("num3ID");
const the4 = document.getElementById("num4ID");
const resultBtn = document.getElementById("result");

form.addEventListener("submit",function (e){
    e.preventDefault();
    let the1 = parseInt((redtea.price) * (num1ID.value));
    let the2 = parseInt((greentea.price) * (num2ID.value));
    let the3 = parseInt((milktea.price) * (num3ID.value));
    let the4 = parseInt((coffee.price) * (num4ID.value));
    let all = the1 + the2 + the3 + the4 ;
    document.getElementById("t1").innerHTML=(the1);
    document.getElementById("t2").innerHTML=(the2);
    document.getElementById("t3").innerHTML=(the3);
    document.getElementById("t4").innerHTML=(the4);
    document.getElementById("t4").innerHTML=(the4);

    
    document.getElementById("allt").innerHTML=("Total : "+all+"元");
})