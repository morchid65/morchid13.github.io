console.log("Hello");

// Déclaration des variables et des fonctions
let phrase = document.querySelector("#phrase");
let cle = document.querySelector("#cle");
let btnCoder = document.querySelector("#btnCoder");
let txtCode = document.querySelector("#txtCode");

function Coder() {
    let phraseACoder = phrase.value.toUpperCase(); // sur un objet, on peut afficher ses propriétés
    let phraseCodee = ""; // déclaration d'une variable vide pour créer le code César
    let c;
    for (let index = 0; index < phraseACoder.length; index++) {
        c = phraseACoder[index].charCodeAt(0);
        if (c != 32) {
            c = c + cle.value * 1;
            phraseCodee = phraseCodee + String.fromCharCode((c - 65) % 26 + 65);
        } else {
            phraseCodee = phraseCodee + String.fromCharCode(c);
        }
    } // cle.value est un texte à convertir
    txtCode.value = phraseCodee;
    console.log(c, String.fromCharCode(c));
}

// Création des événements
btnCoder.addEventListener("click", Coder);

function Aider() {
    introJs().start();
}
btnAider.addEventListener("click", Aider);

function Verifier(phraseACoder) {
    if (cle.value * 1 < 0) return false;
    let c = 0;
    for (let index = 0; index < phraseACoder.length; index++) {
        c = phraseACoder.charCodeAt(index);
        if ((c == 32) || (c > 64 && c < 91) || (c > 47 && c < 58)) {
            // c'est bon on continue
        } else {
            return false;
        }
    }
    return true;
}
