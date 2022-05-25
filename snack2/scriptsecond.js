/*
Snack2

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una 
lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

/*
-Gatsby ha una lista di NOMI e una COGNOMI 

-Con essa vuole generare una falsa lista randomica di invitati 

-UNENDO la lista dei NOMI e quella dei COGNOMI
*/

const listaNomi = ["Tobias", "Matthew", "Nicholas", "Fernando", "Gilberto", "Dominic"]


const listaCognomi = ["Pescetto", "Scalapini", "AmmazzaDraghi", "Dominici", "Venturini", "Magentino"]

let nomeEstratto = "";

let cognomeEstratto = "";

let listaCompleta = [];


for (let i = 0; i < listaNomi.length ; i++){

    nomeEstratto = listaNomi[Math.round(Math.random()*listaNomi.length)];
        console.log(listaNomi)

    cognomeEstratto  = listaCognomi[Math.round(Math.random()*listaCognomi.length)];
        console.log(listaCognomi)

        const nuovoCognomeNome = listaNomi[nomeEstratto] + "" + listaCognomi[cognomeEstratto]
    
    listaCompleta.push(nuovoCognomeNome)
        
        console.log(listaCompleta)
}
