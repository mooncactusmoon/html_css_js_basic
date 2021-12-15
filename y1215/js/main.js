//宣告
const form = document.getElementById('myForm') ;
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

const reaultOut = document.getElementById("reaultOut");

//form

form.addEventListener("submit",function(e){
    console.log(e);
    e.preventDefault();//防止重新整理
    console.log(num1.value);
    console.log(num2.value);
    console.log(num3.value);
    parseIntNum1 = parseInt(num1.value);
    parseIntNum2 = parseFloat(num2.value);
    parseIntNum3 = Number(num3.value);

    if(parseIntNum2 !== 0){
        total=(parseIntNum1 * parseIntNum2) - parseIntNum3;
    }else{
        total=parseIntNum1 - parseIntNum3;

    }


    alert(total);
    reaultOut.innerText = "Result : " + total;

})