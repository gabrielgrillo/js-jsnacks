console.log('ciao')

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0
let sumElement = document.getElementById("sum")

for (let i = 0; i < 10; i++) {
    const num = parseFloat(prompt("inserisci un numero"))
    sum = sum + num
    console.log(i, num, sum)
}

sumElement.innerHTML = `la somma dei numeri inseriti è ${sum}`
console.log(sum, sumElement)
