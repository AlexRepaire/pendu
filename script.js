let mots = ["voiture", "chaise", "table", "radiateur", "formation", "console","hopital","voisin","bibliotheque","incroyable","extraterrestre","restaurant","maladroit","numerique","urinoire","pornographie","alcoolisme","peripateticienne"];
let valider = document.getElementById("valider");
let lettre = document.getElementById("lettre");
let maxTentative = 3;
let tentativeNormal = 6;
let tentativeFacile = 8;
let spanSelect = document.getElementsByTagName("span");
let valeur = mots[Math.floor(Math.random()*mots.length)];
let save = 0;
let facile = document.getElementById("facile");
let normal = document.getElementById("normal");
let difficile = document.getElementById("difficile");

function reset(){
    save = 0;
    maxTentative = 6;
    valeur = mots[Math.floor(Math.random()*mots.length)];
    mot.innerHTML = "";
    return valeur;
}
function resetNormal(){
    save = 0;
    maxTentative = 8;
    valeur = mots[Math.floor(Math.random()*mots.length)];
    mot.innerHTML = "";
    return valeur;
}
function resetFacile(){
    save = 0;
    maxTentative = 10;
    valeur = mots[Math.floor(Math.random()*mots.length)];
    mot.innerHTML = "";
    return valeur;
}

facile.addEventListener("click", function () {
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
                resetFacile();
                for (i=0; i<valeur.length; i ++){
                    let mot = document.getElementById("mot");
                    let element = document.createElement("span");
                    mot.appendChild(element);
                    spanSelect[i].innerHTML = "";
                }
            }
            if (tentativeFacile === 0){
                alert("PERDU !!!");
                resetFacile();
                for (i=0; i<valeur.length; i ++){
                    let mot = document.getElementById("mot");
                    let element = document.createElement("span");
                    mot.appendChild(element);
                    spanSelect[i].innerHTML = "";
                }
            }
        }
        if (trouver===false){
            alert("pas trouvé il reste "+tentativeFacile+" tentatives");
            tentativeFacile--;
        }
    });
});

normal.addEventListener("click", function () {
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
                resetNormal();
                for (i=0; i<valeur.length; i ++){
                    let mot = document.getElementById("mot");
                    let element = document.createElement("span");
                    mot.appendChild(element);
                    spanSelect[i].innerHTML = "";
                }
            }
            if (tentativeNormal === 0){
                alert("PERDU !!!");
                resetNormal();
                for (i=0; i<valeur.length; i ++){
                    let mot = document.getElementById("mot");
                    let element = document.createElement("span");
                    mot.appendChild(element);
                    spanSelect[i].innerHTML = "";
                }
            }
        }
        if (trouver===false){
            alert("pas trouvé il reste "+tentativeNormal+" tentatives");
            tentativeNormal--;
        }
    });
});

difficile.addEventListener("click", function () {
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
                for (i=0; i<valeur.length; i ++){
                    let mot = document.getElementById("mot");
                    let element = document.createElement("span");
                    mot.appendChild(element);
                    spanSelect[i].innerHTML = "";
                }
            }
        }
        if (trouver===false){
            alert("pas trouvé il reste "+maxTentative+" tentatives");
            maxTentative--;
        }
    });
});

for (i=0; i<valeur.length; i++){
    let mot = document.getElementById("mot");
    let element = document.createElement("span");
    mot.appendChild(element);
}