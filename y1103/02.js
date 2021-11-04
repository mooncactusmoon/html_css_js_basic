console.log("hellooooo");

const form = document.getElementById("myForm");
const redtea = document.getElementById("redID");
const greentea = document.getElementById("greenID");
const milktea = document.getElementById("milkteaID");
const coffee = document.getElementById("coffeeID");
const resultBtn = document.getElementById("result");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let redteatotal = parseInt(redtea.value) * 30 ;
    let greenteatotal = parseInt(greentea.value) * 35 ;
    let milkteatotal = parseInt(milktea.value) * 50 ;
    let coffeetotal = parseInt(coffee.value) * 60 ;
    let Alltotal = redteatotal + greenteatotal + milkteatotal + coffeetotal ;
   
    r.innerHTML = redteatotal;
    g.innerHTML = greenteatotal;
    m.innerHTML = milkteatotal;
    c.innerHTML = coffeetotal;
    t.innerHTML = "Total :" + Alltotal + "元";
}
)




