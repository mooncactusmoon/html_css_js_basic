// form submit 
    //myForm 的submit click


// get form
// get num1
// get num2
// get option
    // option + 
    // option -
    // option *
    // option /
    // switch case

// 宣告
const form = document.getElementById('myForm') ;
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const option = document.getElementById("option");

//get form

form.addEventListener("submit",function(e){
    console.log(e);
    // 預防表單重新整理的預設行為
    e.preventDefault();
    console.log(num1.value);
    console.log(num2.value);
    console.log(option.value);
    parseIntNum1 = parseInt(num1.value);
    parseIntNum2 = parseInt(num2.value);
    
    // switch
    console.log(typeof(option.value));
    switch (option.value) {
        case "+":
            alert(parseIntNum1 + parseIntNum2);        
            break;

        case "-":
            alert(parseIntNum1 - parseIntNum2);        
            break;

        case "*":
        alert(parseIntNum1 * parseIntNum2);        
        break;

        case "/":
        alert(parseIntNum1 / parseIntNum2);        
        break;
    
        default:
            alert("default");
            break;
    }
    // switch end


    
});


// get num1
// num1 input ?

// get num2
// get option
    // option + 
    // option -
    // option *
    // option /
