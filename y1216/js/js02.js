let flower=document.getElementById('flower'); //花茶
let coffee=document.getElementById('coffee'); //咖啡
let jmike=document.getElementById('jmike'); //珍奶
let sub_btn=document.getElementById('sub_btn'); //送出
let total_text=document.getElementById('total_text'); //總結文

sub_btn.addEventListener("click",function (e){
    parseIntF=parseInt(flower.value);
    parseIntC=parseInt(coffee.value);
    parseIntJ=parseInt(jmike.value);
    let sum = (parseIntF * 500) + (parseIntC * 120) + (parseIntJ * 87);

    let result=`<div class="alert alert-info text-left" role="alert">
    花茶 : ${parseIntF}杯、${(parseIntF * 500)}元 <br>
    咖啡 : ${parseIntC}杯、${(parseIntC * 120)}元 <br>
    珍奶 : ${parseIntJ}杯、${(parseIntJ * 87)}元 <br>
    <div class="text-danger my-3">總共 : ${sum}元</div>
   </div>`;

    total_text.innerHTML= result;
});