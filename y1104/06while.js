// let i = 1;
// while(i <= 10){
//     console.log('while i =' + i);
//     i++ ;
// }

//練習一 :99乘法表

for(let i = 1;i<=9;i++){
    for(let j =1;j<=9;j++){
        let A= i *j ;
        let B= i + "x" + j + "=" + A 
        console.log(B);
        // console.log(i + "x" + j + "=" + A );  
    }
}


//練習二
//input number 8
//input number 7
//submit
//show
const form = document.getElementById("myForm");
form.addEventListener("submit",function (e){
    e.preventDefault();
    let ans = parseInt((num1ID.value) * (num2ID.value));
    document.getElementById("a").innerHTML=(ans);
})
