console.log("ciao")

/*snack 02
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/
let parolaElement = document.getElementById("parola")

//chiediamo 2 parole all'utente
let parola1 = prompt('Inserisci una parola')
let parola2 = prompt('Inserisci una parola')
// console.log(parola1.length)

//SE la prima parola è più corta della seconda
if (parola1.length < parola2.length) {
    console.log(parola1)
    parolaElement.innerHTML = `${parola1} è più corta di ${parola2}`
}
else {
    console.log(parola2)
    parolaElement.innerHTML = `${parola2} è più corta di ${parola1}`

}
// - stampiamo la prima parola
//ALTRIMENTI
// - stampiamo la seconda