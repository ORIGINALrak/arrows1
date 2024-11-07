var szam = 5;
var score = 0;
var rndszam = 0;
var ido = 0;
function random(){
    rndszam = Math.floor(Math.random() * 4) +1;
    console.log(rndszam)
}

function jatek(){
    ido = setInterval(tenyleges_jatek, 1000);
}
function tenyleges_jatek(){
    if(rndszam == szam){
        score++;
        console.log("score: "+score)
        szam = 5;
    }
    random()

    if(rndszam == 1){
        document.getElementById("kijelzo").innerHTML = "fel";
    }
    if(rndszam == 2){
        document.getElementById("kijelzo").innerHTML = "bal";
    }
    if(rndszam == 3){
        document.getElementById("kijelzo").innerHTML = "le";
    }
    if(rndszam == 4){
        document.getElementById("kijelzo").innerHTML = "jobbra";
    }
    if(score == 5){
        document.getElementById("kijelzo").innerHTML = "megvolt az 5 pont";
        idoize()
    }
}

function idoize(){
    clearTimeout(ido)
}

function change(value){
    szam = value;
    console.log(szam)
}