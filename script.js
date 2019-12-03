let mots = ["voiture", "chaise", "table", "radiateur", "formation", "console"];
let valider = document.getElementById("valider");
let lettre = document.getElementById("lettre");
let maxTentative = 6;
let spanSelect = document.getElementsByTagName("span");
let valeur = mots[Math.floor(Math.random()*mots.length)];
let save = 0;

function reset(){
    save = 0;
    maxTentative = 6;
    valeur = mots[Math.floor(Math.random()*mots.length)];
    mot.innerHTML = "";
    return valeur;
}

console.log(valeur);
valider.addEventListener("click", function () {
    let lettreEnter = lettre.value;
    let trouver = false;
    for (let i=0 ; i<valeur.length ; i++){

        if (valeur[i] === lettreEnter){
            spanSelect[i].innerHTML = lettreEnter;
            save ++;
            alert("trouvé");
            trouver = true;
        }
        if (valeur.length === save){
            alert("IT'S WIN");
            reset();
            for (i=0; i<valeur.length; i ++){
                let mot = document.getElementById("mot");
                let element = document.createElement("span");
                mot.appendChild(element);
                spanSelect[i].innerHTML = "";
            }
        }
        if (maxTentative === 0){
            alert("PERDU !!!");
            reset();
            console.log(reset());

            for (i=0; i<valeur.length; i ++){
                let mot = document.getElementById("mot");
                let element = document.createElement("span");
                mot.appendChild(element);
                spanSelect[i].innerHTML = "";
            }}

    }

    if (trouver===false){
        alert("pas trouvé il reste "+maxTentative+" tentatives");
        maxTentative--;
    }


});

for (i=0; i<valeur.length; i++){
    let mot = document.getElementById("mot");
    let element = document.createElement("span");
    mot.appendChild(element);
}

