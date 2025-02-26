console.log("Hello")
// Déclaration des variables et des fonctions
let phrase=document.querySelector("#phrase")
let cle=document.querySelector("#cle")
let btnCoder=document.querySelector("#btnCoder")
let txtCode=document.querySelector("#txtCode")
// Pour mémoire char.charCodeAt(0) et String.fromCharCode(ASCIICode)
function Coder() {
    let phraseACoder = phrase.value.toUpperCase() // sur un objet, on peut afficher ses propriétés
let phraseCodee="" // déclaration d'une variable vide pour créer le code César
let c
for (let index = 0; index < phraseACoder.length; index++) {
    c = phraseACoder[index].charCodeAt(0)
    if (c != 32) {
        c = c+cle.value*1
        phraseCodee = phraseCodee + String.fromCharCode((c-65)%26+65)
        } else {
        phraseCodee = phraseCodee + String.fromCharCode(c)
        }
    } // cle.value est un texte à convertir
phraseCodee = phraseCodee + String.fromCharCode(c)
console.log(c, String.fromCharCode(c))
}
txtCode.value = phraseCodee
// Création des événements
btnCoder.addEventListener("click", Coder)
txtCode.value = phraseCodee
phrase.value = phraseACoder
function Aider() {
    introJs().start()
    }
btnAider.addEventListener("click", Aider)
if (Verifier(phraseACoder)==true || cle.value*1 < 0) {    let c=0
    for (let index=0; index < phrase.length; index++) {
    c = phrase.charCodeAt(index)
    if ((c == 32) || (c > 64 && c < 91) || (c > 47 && c < 58)) {
    // c'est bon on continue
    } else {
    return false
    }
    }
    return true
    }

