const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

//generiamo un array vuoto dove poi andremo a pushare dentro i vari oggetti che avranno come proprietà
//nomeOspite = tavolovip[i]
// const segnaposto = []

//creo un ciclo for per iterare ogni elemento dell'array tavoloVip

// for(let i = 0; i < tavoloVip.length; i++){
//     const membroVip = tavoloVip[i]
    

//     //pusho all'interno del'array segnaposto i vari oggetti utilizzando come nome, la variabile membroVip
//     segnaposto.push(
//     {
//         nomeOspite: `${membroVip}`,
//         nomeTavolo: "Tavolo VIP",
//         posto: i + 1
//     },
//     )
// }
// console.log(segnaposto)


//-------

//altra soluzione utilizzando il metodo map

const segnaposti = tavoloVip.map((el, i) => {
    const segnaposto = {
        nomeOspite: el,
        nomeTavolo: "Tavolo VIP",
        posto: i + 1
    }
    return segnaposto
})

console.log(segnaposti)