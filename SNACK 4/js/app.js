//creo un array di oggetti di squadre di calcio. Ogni oggetto contiene le proprietà nome, puntiFatti e falliSubiti

const squadre = [
    {
        nome: "Albinoleffe",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Cervia",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Salernitana",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Feralpisalò",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Entella",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    }
]


//mi creo un array dove andrò ad inserire gli oggetti che avranno come proprietà solo il nome ed i falliSubiti
const squadreNuovo = []


//ciclo l'array per andare poi a modificare ogni valore nelle proprietà puntiFatti e falliSubiti, inoltre creare dei nuovi oggetti da andare a pushare nel nuovo array attualmente vuoto squadreNuovo
for(let i = 0; i < squadre.length; i++){
    
    //dichiaro una variabile squadra alla quale assegno il valore di ogni singolo oggetto presente nell'array di oggetti squadre
    const squadra = squadre[i]

    //uso la destrutturazione per recuperare le proprietà di squadra
    let {nome, puntiFatti, falliSubiti} = squadra

    //assegno un numero random sia alla proprietà puntiFatti sia a falliSubiti
    puntiFatti = getRandomIntInclusive(0, 100)
    falliSubiti = getRandomIntInclusive(10, 100)
    
    //mi creo un nuovo oggetto con solo 2 proprietà che andrò poi a pushare all'interno del nuovo array squadreNuovo
    const statistiche = {
        nome,
        falliSubiti
    }
    //pusho nel nuovo array squadreNuovo, gli oggetti con solo il nome e i falliSubiti
    squadreNuovo.push(statistiche)
}

//stampo in console il nuovo array contenente gli oggetti con solo il nome e i falliSubiti
console.log(squadreNuovo)






//funzione per generare dei numeri casuali interi compresi anche il numero minimo ed il numero massimo
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}