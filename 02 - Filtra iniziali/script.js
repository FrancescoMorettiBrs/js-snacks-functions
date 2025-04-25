/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const filtro = "A"

// Dichiara la funzione qui.
function filtraPerIniziale(array, lettera) {
    const risultato = [];

    for (let i = 0; i < array.length; i++) {
        const parola = array[i];
        if (parola[0] === lettera) {
            risultato.push(parola);
        }
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = filtraPerIniziale(names, filtro);
console.log(risultato);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]