// 公分換英吋
//宣告
const form = document.getElementById('myForm') ;
const cm = document.getElementById("cm");
const reault_inch = document.getElementById("reault_inch");
//form
form.addEventListener("submit",function(e){
    console.log(e);
    e.preventDefault();//防止重新整理
    console.log(cm);
   
    c_cm = parseFloat(cm.value);

    realt=(c_cm / 2.54);

    reault_inch.innerText = "Result : " + realt + "英吋";

})
//公分換英吋結束

//英吋換公分
//宣告
const form2 = document.getElementById('myForm2') ;
const inch = document.getElementById("inch");
const reault_cm = document.getElementById("reault_cm");
//form
form2.addEventListener("submit",function(a){
    console.log(a);
    a.preventDefault();//防止重新整理
    console.log(inch);
   
    c_inch = parseFloat(inch.value);

    realt=(c_inch * 2.54);

    reault_cm.innerText = "Result : " + realt + "公分";

})
//英吋換公分 結束
