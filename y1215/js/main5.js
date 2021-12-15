
const m2Input = document.getElementById("m2");
const pingInput = document.getElementById("ping");
const m2Err = document.getElementById("m2Err");
const pingErr = document.getElementById("pingErr");

m2Input.addEventListener("change", function(e){
    //平方公尺換坪
    const m2 = parseFloat(m2Input.value);
    console.log(m2);
    let ping = m2 / 3.306;
    ping = Math.round(ping * 1000) / 1000;
    console.log(ping);
    pingInput.value=ping;
    //提示錯誤訊息
    if(isNaN(m2)){
        m2Err.innerText = "請輸入數字";
    }
});
pingInput.addEventListener("change", function(e){
    //坪換平方公尺
    const ping = parseFloat(pingInput.value);
    console.log(ping);
    let m2 =ping * 3.306;
    console.log(m2);
    m2Input.value = m2;
    //提示錯誤訊息
    if(isNaN(ping)){
        pingErr.innerText = "請輸入數字";
    }
});

