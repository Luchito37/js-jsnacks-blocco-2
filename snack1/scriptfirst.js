/*
Snack1

Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

/* L'utente dovrà inserire un numero ( tramite un prompt o un input-type)
    SE è pari :
        -stamperò il numero
    INVECE SE è dispari 
        -stamperà il numero succesivo
*/


let numeroInserito = prompt("Inserisci un numero");

let number = parseInt(numeroInserito) + 1;

if (numeroInserito % 2 != 0){

    numeroInserito = number;
}

console.log(numeroInserito)