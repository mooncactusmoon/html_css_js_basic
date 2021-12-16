//宣告
const form = document.getElementById('myForm') ;
const chinese = document.getElementById("chinese");
const english = document.getElementById("english");
const math = document.getElementById("math");
const resultOut = document.getElementById("resultOut");
//form

form.addEventListener("submit",function (e){
    e.preventDefault(); //防止表單重新整理
    parseIntC=parseInt(chinese.value);
    parseIntE=parseInt(english.value);
    parseIntM=parseInt(math.value);
    sum = parseIntC + parseIntE + parseIntM; //相加
    avg = sum / 3 ; //平均
    avg_a=Math.round(avg * 100) / 100; //只取小數點兩位    


    var c= document.querySelector('#resultOut');
    //if else
    if(avg_a >= 90){
        
        c.setAttribute('class','text-success');
        resultOut.innerText = "Result : A ( 平均 : " + avg_a + "分)";        
    }else if(avg_a >= 80){
        c.setAttribute('class','text-info');
        resultOut.innerText = "Result : B ( 平均 : " + avg_a + "分)";
    }else if(avg_a >= 70){
        c.setAttribute('class','text-primary');
        resultOut.innerText = "Result : C ( 平均 : " + avg_a + "分)";
    }else if(avg_a >= 60){
        c.setAttribute('class','text-warning');
        resultOut.innerText = "Result : D ( 平均 : " + avg_a + "分)";
    }else if(avg_a < 60){
        c.setAttribute('class','text-danger');
        resultOut.innerText = "Result : E ( 平均 : " + avg_a + "分)";
    }
    // if(avg_a >= 90){
    //     resultOut.innerHTML = "<span class='text-success'>Result : A</span> <div class='mt-3'> ( 平均 : " + avg_a + "分)</div>";        
    // }else if(avg_a >= 80){
    //     resultOut.innerHTML = "<span class='text-info'>Result : B</span> <div class='mt-3'> ( 平均 : " + avg_a + "分)</div>";
    // }else if(avg_a >= 70){
    //     resultOut.innerHTML = "<span class='text-primary'>Result : C</span> <div class='mt-3'> ( 平均 : " + avg_a + "分)</div>";
    // }else if(avg_a >= 60){
    //     resultOut.innerHTML = "<span class='text-warning'>Result : D</span> <div class='mt-3'> ( 平均 : " + avg_a + "分)</div>";
    // }else if(avg_a < 60){
    //     resultOut.innerHTML = "<span class='text-danger'>Result : E</span> <div class='mt-3'> ( 平均 : " + avg_a + "分)</div>";
    // }
});