//genero un array di oggetti che avranno le proprietà id, name e grade
const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grade: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grade: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grade: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grade: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grade: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grade: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grade: 84
    }
]

//creo un array vuoto dove andare ad inserire i vari nomi degli studenti tutti in maiuscolo

const studentsNameUppercase = []

//eseguo un ciclo for per iterare ogni singolo oggetto e di conseguenza la loro proprietà nome
for (let i = 0; i < students.length; i++){
    const student = students[i]

    //mi creo una nuova variabile alla quale assegnerò la stringa dei vari nomi in maiuscolo con il metodo toUpperCase
    const nameUpperCase = student.name.toUpperCase()
    //pusho i nomi in maiuscolo all'interno dell'array studentsNameUppercase precedentemente creato
    studentsNameUppercase.push(nameUpperCase)
}

console.log(studentsNameUppercase)


//creo un array vuoto dove andare ad inserire gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const studentsGradeAbove70IdAbove120 = []

//eseguo un ciclo for per iterare ogni singolo studente e pushare negli array appena creati gli studenti che hanno quelle condizioni
for(let j = 0; j < students.length; j++){
    const element = students[j]
    
    if(element.grade > 70 && element.id > 120){
        studentsGradeAbove70IdAbove120.push(element.name)
    }
}

console.log(`Studenti con voto maggiore di 70 ed id maggiore di 120: ${studentsGradeAbove70IdAbove120}`)



//creo un array vuoto dove andare ad inserire gli studenti che hanno un totale di voti superiore a 70
const studentsGradeAbove70 = []

for(let y = 0; y < students.length; y++){
    const element = students[y]
   
    if(element.grade > 70){
        studentsGradeAbove70.push(element.name)
    }
}

console.log(`Studenti con voto maggiore di 70: ${studentsGradeAbove70}`)