const form = document.getElementById("myForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const optionInput = document.getElementById("option");
const resultBtn = document.getElementById("result");

form.addEventListener("submit", function (e) {
    //e.preventDefault();預防表單重新整理的預設行為
    e.preventDefault();
    //console.log("submit",e)
    console.log(num1Input.value);
    console.log(num2Input.value);
    console.log(optionInput.value);
    // calResult = parseInt(num1Input.value) + parseInt(num2Input.value);
    // console.log(typeof(calResult));
    // console.log(calResult);
    let calResult;
    switch(optionInput.value){
        case "+":
        calResult = parseInt(num1Input.value) + parseInt(num2Input.value);
        console.log(calResult);
        break;
        case "-":
        calResult = parseInt(num1Input.value) - parseInt(num2Input.value);
        console.log(calResult);
        break;
        case "*":
        calResult = parseInt(num1Input.value) * parseInt(num2Input.value);
        console.log(calResult);
        break;
        case "/":
        calResult = parseInt(num1Input.value) / parseInt(num2Input.value);
        console.log(calResult);
        break;
    }
    a.innerHTML = "Result: " + calResult;
   }
)

// function a(){
// // console.log("num1");
// // console.log("num2");
// // console.log("option");
// let num1= parseInt(document.getElementById("num1").value);
// let num2= parseInt(document.getElementById("num2").value);
// let option= document.getElementById("option").value;

// let result;
// // console.log(num1);
// // console.log(num2);
// // console.log(option);
// switch(option){
//     case "+":
//     result = num1 + num2;
//     console.log(result);
//     break;
//     case "-":
//     result = num1 - num2;
//     console.log(result);
//     break;
//     case "*":
//     result = num1 * num2;
//     console.log(result);
//     break;
//     case "/":
//     result = num1 / num2;
//     console.log(result);
//     break;
// }
// }