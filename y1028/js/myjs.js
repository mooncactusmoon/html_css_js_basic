// alert("hello js");
function helloFun(){
    let spanObj = window.document.getElementById("spanID");
    spanObj.innerHTML = "Hello";
    spanObj.style.color = "lightpink";

    let spanEndObj = window.document.getElementById("spanEndID");
    spanEndObj.style.color = "red";
    // window.document.body.innerHTML="hello world:>";
    // console.log('helloFun test1');
    // console.log('helloFun test2');
    // console.log('helloFun test3');
}
// function toggleMenu(){
//     console.log('toggleMenu');
//     let menuObj = document.getElementById("menu");
//     if(menuObj.style.display=="none"){
//         menuObj.style.display="block";
//     }else
//     menuObj.style.display="none";
// }
function toggleMenu(){
    console.log('toggleMenu');
    let menuObj = document.getElementById("menu");
    menuObj.classList.toggle("hide");
}