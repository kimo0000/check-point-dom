// +/- price
let btnPlus = document.querySelectorAll("#plus") ;
let btnMoins = document.querySelectorAll("#moins") ;
let qte = document.querySelectorAll(".qte") ;
let price = document.querySelectorAll(".price")
let amount = document.querySelectorAll("span");
let tot = document.querySelector(".tot") ;

for(let i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click" , function(){
    qte[i].value++;
    amount[i].innerHTML= parseInt(amount[i].innerHTML)+parseInt(price[i].value) ;
    tot.innerHTML = parseInt(tot.innerHTML)+parseInt(price[i].value);
    });
}

for(let i=0;i<btnPlus.length;i++){
    btnMoins[i].addEventListener("click" , function(){
            qte[i].value--
            amount[i].innerHTML = parseInt(amount[i].innerHTML)-parseInt(price[i].value) ;
            tot.innerHTML = parseInt(tot.innerHTML)-parseInt(price[i].value);

    });
}

// heart react
let heart = document.querySelectorAll("#heart");

for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click" , function(){
    heart[i].classList.toggle('couleur')
})
}
//remove item
let supp = document.querySelectorAll("#trash") ;
for(let i=0;i<supp.length;i++){
    supp[i].addEventListener("click" , function(){
        var node_supp = document.querySelectorAll("tbody tr");
        var child = node_supp[i].lastChild; 
        while (child) {
            node_supp[i].removeChild(child);
            child = node_supp[i].lastChild;
        }    });

}