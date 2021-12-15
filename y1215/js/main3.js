//宣告

const originPrice = document.getElementById("originPrice");
const t_originPrice = document.getElementById("t_originPrice");
const tt1 = document.getElementById("tt1");
const t_discount = document.getElementById("t_discount");
const tt2 = document.getElementById("tt2");
const t_cashD = document.getElementById("t_cashD");
const tt3 = document.getElementById("tt3");


const reaultOut = document.getElementById("reaultOut");
const diccountAll = document.getElementById("diccountAll");

// 將事件改用keyup 

originPrice.addEventListener("keyup",function(e){
    console.log(e);
    e.preventDefault();//防止重新整理
    console.log(originPrice.value);
    num = parseInt(originPrice.value);
    t_originPrice.innerText = num + "元";
    
    if(num<500){
        num_t=500-num;
        tt1.innerText= "尚缺" + num_t + "元到達折扣門檻";
        t_discount.innerText="無"
        tt2.innerText= "未達打折門檻";
        t_cashD.innerText= "未獲得折扣金";
        total=num;
        dTotal= 0;

    }else if(num<1500){
        num_t=1500-num;
        num_tt2= num - (num * 0.9);
        tt1.innerText= "已達500元門檻，再消費" + num_t + "元可更加折扣";
        t_discount.innerText="打9折";
        tt2.innerText= "已折價" + num_tt2 + "元";
        t_cashD.innerText= "未獲得折扣金";

        total=(num * 0.9);
        dTotal=num_tt2;


    }else if(num<2500){
        num_t=2500-num;
        num_tt2=num - (num * 0.85);
        tt1.innerText= "已達1500元門檻，再消費" + num_t + "元可更加折扣";
        t_discount.innerText="打85折";
        tt2.innerText= "已折價" + num_tt2 + "元";
        t_cashD.innerText= "獲得折扣金80元";
        
        total=(num * 0.85) - 80 ;
        dTotal= num_tt2 + 80 ;

    }else if(num<5000){
        num_t=5000-num;
        num_tt2=num - (num * 0.75);
        tt1.innerText= "已達2500元門檻，再消費" + num_t + "元可更加折扣";
        t_discount.innerText="打75折";
        tt2.innerText= "已折價" + num_tt2 + "元";
        t_cashD.innerText= "獲得折扣金150元";
        
        total=(num * 0.75) - 150 ;
        dTotal= num_tt2 + 150 ;

    }else if(num>=5000){
        num_tt2=num - (num * 0.6);
        tt1.innerText= "已達最高折扣";
        t_discount.innerText="打6折";
        tt2.innerText= "已折價" + num_tt2 + "元";
        t_cashD.innerText= "獲得折扣金300元";
        
        total=(num * 0.6 ) - 300 ;
        dTotal= num_tt2 + 300 ;

    }

    // alert(total);
    reaultOut.innerText = "Result : " + Math.round(total);
    diccountAll.innerText = "已省下 : " + Math.round(dTotal);

})