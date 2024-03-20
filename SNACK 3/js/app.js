//creare un array di oggetti contenenti bici da corsa che avranno come proprietà nome e peso
const bikes = [
    {
        name: "Bianchi",
        weight: 20
    },
    {
        name: "Atala",
        weight: 15
    },
    {
        name: "Olmo",
        weight: 8
    },
    {
        name: "Casati",
        weight: 12
    },
    {
        name: "Pistidda",
        weight: 17
    }
]

//creo una variabile contenente che mi trova il peso minore tra le proprieta weight degli oggetti dentro l'array di oggetti bikes
const lightestWeight = Math.min(...bikes.map(item => item.weight))

//uso il metodo find per trovare l'oggetto, nell'array di oggetti, che ha quindi il peso indicato in lightestweight (ovvero il più leggero)
const lightestBike = bikes.find((el) => {
    if(el.weight === lightestWeight){
        return true
    }else{
        return false
    }
})


//una volta stabilita la bici che pesa di meno, utilizzo la destrutturazione per recuperarmi le proprietà name e weight dell'oggetto in questione
const {name, weight} = lightestBike

//stampo in console il risultato usando il template literal
console.log(`La bici ${name} che pesa ${weight} è la più leggera`)