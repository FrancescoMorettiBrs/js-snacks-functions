/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

function contaVocali(stringa) {
    const vocali = "aeiou";
    let conteggio = 0;
  
    for (let i = 0; i < stringa.length; i++) {
      if (vocali.includes(stringa[i])) {
        conteggio++;
      }
    }
  
    return conteggio;
  }

  console.log(contaVocali(word));
  
// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)