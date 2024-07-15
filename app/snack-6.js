console.log('snack6')

// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero.
//  Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
let msgElement = document.getElementById('msg')
let msgPcElement = document.getElementById('msg2')


let numCasuale = Math.floor(Math.random() * 11)
console.log(numCasuale)

let numUtente = prompt('Prova ad indovinare il numero scelto dal pc, da 0 a 10')
console.log(numUtente)

if (numUtente == numCasuale) {
    console.log('Complimenti! hai vinto')
    msgElement.innerHTML = 'Complimenti! hai vinto'
}
else {
    console.log('Mi dispiace, hai perso')
    msgElement.innerHTML = 'Mi dispiace, hai perso'
    msgPcElement.innerHTML = `il numero scelto dal pc è: ${numCasuale}`


}
