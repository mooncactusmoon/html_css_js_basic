let score = 55;
let grade = "B";
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
}else if (score >= 80) {
    grade = "B";
}else if (score >= 70) {
    grade = "C";
}else if (score >= 60) {
    grade = "D";
}else {
    grade = "F";
}
console.log(score);
console.log(grade);
//我的condition ? XXX : XXXX2
let a = 100;
const result = (a==1? "True1":"False2");
console.log("result : " + result);
//上下兩個相等
if(a==1){
    console.log("true :D");
}else{
    console.log("false :<");
}