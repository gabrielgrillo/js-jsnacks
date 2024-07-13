console.log("snack4")

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const listaInvitati = ['Gabriel', 'Ginevra', 'Mario', 'Giovanna', 'Giuseppe']
console.log(listaInvitati)
const invitoElement = document.getElementById("invito")

const nomeInvitato = prompt("Inserisci il tuo nome")
// let nomeFormat = nomeInvitato.toLowerCase()
// console.log(nomeFormat)

const trovato = listaInvitati.includes(nomeInvitato)
console.log(trovato)

if (trovato === true) {
    console.log("sei stato invitato alla festa")
    invitoElement.innerHTML = "Sei stato invitato alla festa"
}
else {
    console.log("non sei stato invitato alla festa")
    invitoElement.innerHTML = "Non sei stato invitato alla festa"

}
