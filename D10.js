/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20; // Crea una variabile chiamata "sum" e assegna il risultato della somma tra i valori 10 e 20
console.log(sum); // Stampa il valore di "sum" sulla console,

//un'altro metodo

let a1 = 10; 
let b1 = 20; 
let sum2 = a1 + b1; // Crea una variabile chiamata "sum" e assegna il risultato della somma tra i valori di "a1" e "b1"
console.log(sum2); // Stampa il valore di "sum" sulla console

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let randomB = Math.floor(Math.random() * 21); // Crea una variabile chiamata "randomB" e assegna un numero casuale tra 0 e 20 (inclusi)
console.log(randomB); // Stampa il valore di "randomB" sulla console

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Alessandra Vanessa", // Assegna il valore "Alessandra Vanessa" alla proprietà "name"
  surname: "De Guzman", // Assegna il valore "De Guzman" alla proprietà "surname"
  age: 22 // Assegna il valore 22 alla proprietà "age"
};
console.log(me); // Stampa l'oggetto "me" sulla console


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age; // Rimuove la proprietà "age" dall'oggetto "me"
console.log(me); // Stampa l'oggetto "me" sulla console

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "Python", "SQL"]; // aggiungo un array chiamato "skills" all'oggetto "me", contenente i linguaggi di programmazione che conosco
console.log(me); // Stampa l'oggetto "me" sulla console

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("CSS"); // utilizzo il metodo push per aggiungere all'array "skills"
console.log(me.skills); // stampa l'array "skills" aggiornato

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop(); // utilizzo il metodo pop per rimuovere l'ultimo elemento dall'array "skills"
console.log(me.skills); // stampa l'array "skills" aggiornato

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() { // definisce la funzione "dice"
  return Math.floor(Math.random() * 6) + 1; // utilizzo il metodo Math.random per generare un numero casuale tra 0 e 1, moltiplica per 6, arrotonda per difetto con Math.floor e aggiungo 1 per ottenere un numero casuale tra 1 e 6
}

console.log(dice()); // chiamo la funzione "dice" e stampa il risultato

let resultDice = dice(); // chiamo la funzione "dice" e assegna il risultato alla variabile "result"
console.log(resultDice); // stampa il valore della variabile "result"
// Output: un numero casuale tra 1 e 6

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a, b) { // definisce la funzione "whoIsBigger" con i parametri "a" e "b"
  if (a > b) { // controlla se "a" è maggiore di "b"
    return a; // se "a" è maggiore di "b", ritorna "a"
  } else {
    return b; // altrimenti, ritorna "b"
  }
}

let resultwhoIsBigger = whoIsBigger(10, 20); // chiamo la funzione "whoIsBigger" con i valori 10 e 20 come parametri e assegna il risultato alla variabile "result"
console.log(resultwhoIsBigger); // stampa il valore della variabile "result"
// Output: 20

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) { // definisce la funzione "splitMe" con il parametro "str"
  return str.split(" "); // utilizzo il metodo split per dividere la stringa "str" in un array di parole separate dal carattere spazio
}

console.log(splitMe("I love coding")); // chiamo la funzione "splitMe" con la stringa "I love coding" come parametro e stampa il risultato

// un altro esempio
let resultsplitMe = splitMe("Mi piace programmare"); // chiamo la funzione "splitMe" con la stringa "Mi piace programmare" come parametro e assegna il risultato alla variabile "result"
console.log(resultsplitMe); // stampa il valore della variabile "result"
// Output: ["Mi", "piace", "programmare"]

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool) { // definisce la funzione "deleteOne" con i parametri "str" e "bool"
  if (bool) { // controlla se il valore di "bool" è true
    return str.slice(1); // se "bool" è true, utilizzo il metodo slice per rimuovere il primo carattere dalla stringa "str"
  } else {
    return str.slice(0, -1); // altrimenti, utilizzo il metodo slice per rimuovere l'ultimo carattere dalla stringa "str"
  }
}

let resultdeleteOne = deleteOne("programmare", false); // chiamo la funzione "deleteOne" con la stringa "programmare" e il valore booleano false come parametri e assegna il risultato alla variabile "result"
console.log(resultdeleteOne); // stampa il valore della variabile "result"
// Output: "programmar"


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) { // definisce la funzione "onlyLetters" con il parametro "str"
  return str.replace(/[0-9]/g, ""); // utilizzo il metodo replace con una espressione regolare per rimuovere tutte le cifre numeriche dalla stringa "str"
}

console.log(onlyLetters("I have 4 dogs")); // chiamo la funzione "onlyLetters" con la stringa "I have 4 dogs" come parametro e stampa il risultato

// un altro esempio

let resultonlyLetters = onlyLetters("Ho 2 gatti e 3 cani"); // chiamo la funzione "onlyLetters" con la stringa "Ho 2 gatti e 3 cani" come parametro e assegna il risultato alla variabile "result"
console.log(resultonlyLetters); // stampa il valore della variabile "result"
// Output: "Ho gatti e cani"

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) { // definisce la funzione "isThisAnEmail" con il parametro "str"
  // utilizzo una espressione regolare per verificare se la stringa "str" corrisponde al formato di un indirizzo email valido
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
}

console.log(isThisAnEmail("mario.rossi@gmail.com")); // chiamo la funzione "isThisAnEmail" con la stringa "mario.rossi@gmail.com" come parametro e stampa il risultato

//un'altro esempio

let resultisThisAnEmail = isThisAnEmail("luigi.bianchi@yahoo.it"); // chiamo la funzione "isThisAnEmail" con la stringa "luigi.bianchi@yahoo.it" come parametro e assegna il risultato alla variabile "result"
console.log(resultisThisAnEmail); // stampa il valore della variabile "result"
// Output: true

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() { // definisce la funzione "whatDayIsIt"
  let days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]; // definisce un array di stringhe con i nomi dei giorni della settimana
  let date = new Date(); // crea un nuovo oggetto Date per ottenere la data corrente
  let day = date.getDay(); // utilizzo il metodo getDay per ottenere il giorno della settimana corrente come un numero da 0 a 6
  return days[day]; // ritorna il nome del giorno della settimana corrispondente al numero ottenuto con getDay
}

console.log(whatDayIsIt()); // chiamo la funzione "whatDayIsIt" e stampa il risultato

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function dice() { // definisce la funzione "dice"
  return Math.floor(Math.random() * 6) + 1; // utilizzo il metodo Math.random per generare un numero casuale tra 0 e 1, moltiplica per 6, arrotonda per difetto con Math.floor e aggiungo 1 per ottenere un numero casuale tra 1 e 6
}

function rollTheDices(n) { // definisce la funzione "rollTheDices" con il parametro "n"
  let result = { // definisce l'oggetto "result"
    sum: 0, // inizializza la proprietà "sum" a 0
    values: [] // inizializza la proprietà "values" come un array vuoto
  };
  
  for (let i = 0; i < n; i++) { // utilizzo un ciclo for per ripetere l'invocazione della funzione "dice" per "n" volte
    let roll = dice(); // chiamo la funzione "dice" e assegna il risultato alla variabile "roll"
    result.sum += roll; // aggiungo il valore di "roll" alla proprietà "sum" dell'oggetto "result"
    result.values.push(roll); // aggiungo il valore di "roll" all'array della proprietà "values" dell'oggetto "result"
  }
  
  return result; // ritorna l'oggetto "result"
}

console.log(rollTheDices(3)); // chiamo la funzione "rollTheDices" con il valore 3 come parametro e stampa il risultato

//un'altro esempio

let resultRollTheDices = rollTheDices(5); // chiamo la funzione "rollTheDices" con il valore 5 come parametro e assegna il risultato alla variabile "result"
console.log(resultRollTheDices); // stampa il valore della variabile "result"
// Output: un oggetto contenente le proprietà sum e values. Ad esempio: { sum:15, values:[2,4,3,4,2] }

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date) { // definisce la funzione "howManyDays" con il parametro "date"
  let today = new Date(); // Creo un nuovo oggetto Date per ottenere la data corrente
  let timeDiff = today.getTime() - date.getTime(); // calcola la differenza in millisecondi tra la data corrente e la data passata come parametro
  let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // converte la differenza in millisecondi in giorni
  return daysDiff; // ritorna il numero di giorni trascorsi
}

console.log(howManyDays(new Date("2022-01-01"))); // chiamo la funzione "howManyDays" con una data come parametro e stampa il risultato

//un'altro esempio
let resultHowManyDays = howManyDays(new Date("2023-06-01")); // chiamo la funzione "howManyDays" con una data come parametro e assegna il risultato alla variabile "result"
console.log(resultHowManyDays); // stampa il valore della variabile "result"
// Output: il numero di giorni trascorsi dalla data specificata (ad esempio, se oggi è il 9 giugno 2023, l'output sarà 8)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() { // definisce la funzione "isTodayMyBirthday"
  let today = new Date(); // crea un nuovo oggetto Date per ottenere la data corrente
  let myBirthday = new Date(today.getFullYear(), 0, 1); // crea un nuovo oggetto Date per il tuo compleanno, impostando l'anno corrente, il mese e il giorno del tuo compleanno
  if (today.getMonth() === myBirthday.getMonth() && today.getDate() === myBirthday.getDate()) { // controlla se il mese e il giorno della data corrente corrispondono al mese e al giorno del tuo compleanno
    return true; // se oggi è il tuo compleanno, ritorna true
  } else {
    return false; // altrimenti, ritorna false
  }
}

console.log(isTodayMyBirthday()); // chiama la funzione "isTodayMyBirthday" e stampa il risultato

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// Definizione della funzione "deleteProp"
function deleteProp(obj, prop) {
  // Elimina la proprietà dall'oggetto
  delete obj[prop];
  // Ritorna l'oggetto modificato
  return obj;
}

// Esempio di utilizzo della funzione "deleteProp"
const myObj = { a: 1, b: 2, c: 3 };
console.log(deleteProp(myObj, 'b')); // { a: 1, c: 3 }


// array movies
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// Definizione della funzione "newestMovie"
function newestMovie() {
  // Trova il film più recente nell'array "movies"
  const newest = movies.reduce((newest, movie) => {
    // Confronta l'anno del film corrente con l'anno del film più recente trovato finora
    if (movie.Year > newest.Year) {
      // Se il film corrente è più recente, aggiorna il valore di "newest"
      return movie;
    } else {
      // Altrimenti, ritorna il valore corrente di "newest"
      return newest;
    }
  });
  // Ritorna il film più recente trovato
  return newest;
}

// Esempio di utilizzo della funzione "newestMovie"
console.log(newestMovie(movies)); // { Title: 'Avengers: Endgame', Year: '2019', imdbID: 'tt4154796', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'}


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

// Definizione della funzione "countMovies"
function countMovies() {
  // Ritorna il numero di film contenuti nell'array "movies"
  return movies.length;
}

// Esempio di utilizzo della funzione "countMovies"
console.log(countMovies()); // 14


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

// Definizione della funzione "onlyTheYears"
function onlyTheYears() {
  // Crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies"
  const years = movies.map((movie) => movie.Year);
  // Ritorna l'array creato
  return years;
}

// Esempio di utilizzo della funzione "onlyTheYears"
console.log(onlyTheYears()); // ['2001', '2003', '2002', '2005', '2005', '1978', '1990', '2012', '1984', '1963', '2012', '2018', '2015', '2019']


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// Definizione della funzione "onlyInLastMillennium"
function onlyInLastMillennium() {
  // Filtra l'array "movies" per includere solamente i film prodotti nel millennio scorso
  const lastMillenniumMovies = movies.filter(
    (movie) => movie.Year >= 1000 && movie.Year < 2000
  );
  // Ritorna l'array filtrato
  return lastMillenniumMovies;
}

// Esempio di utilizzo della funzione "onlyInLastMillennium"
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// Definizione della funzione "sumAllTheYears"
function sumAllTheYears() {
  // Calcola la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies"
  const sum = movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0);
  // Ritorna la somma calcolata
  return sum;
}

// Esempio di utilizzo della funzione "sumAllTheYears"
console.log(sumAllTheYears()); // 28063


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// Definizione della funzione "searchByTitle"
function searchByTitle(title) {
  // Filtra l'array "movies" per includere solamente i film che contengono la stringa passata come parametro nel titolo
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(title.toLowerCase())
  );
  // Ritorna l'array filtrato
  return filteredMovies;
}

// Esempio di utilizzo della funzione "searchByTitle"
console.log(searchByTitle('lord of the rings'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// Definizione della funzione "searchAndDivide"
function searchAndDivide(title) {
  // Crea un oggetto contenente due array: "match" e "unmatch"
  const result = {
    match: [],
    unmatch: [],
  };
  // Itera sull'array "movies"
  movies.forEach((movie) => {
    // Verifica se il titolo del film corrente contiene la stringa fornita come parametro
    if (movie.Title.toLowerCase().includes(title.toLowerCase())) {
      // Se il titolo del film corrente contiene la stringa fornita, aggiungi il film all'array "match"
      result.match.push(movie);
    } else {
      // Altrimenti, aggiungi il film all'array "unmatch"
      result.unmatch.push(movie);
    }
  });
  // Ritorna l'oggetto creato
  return result;
}

// Esempio di utilizzo della funzione "searchAndDivide"
const resultsearchAndDivide = searchAndDivide('lord of the rings');

// Stampa i film che corrispondono alla ricerca
console.log('Film che corrispondono alla ricerca:');
resultsearchAndDivide.match.forEach((movie) => console.log(movie.Title));

// Stampa i film che non corrispondono alla ricerca
console.log('Film che non corrispondono alla ricerca:');
resultsearchAndDivide.unmatch.forEach((movie) => console.log(movie.Title));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

// Definizione della funzione removeIndex
function removeIndex(index) {
  // Crea una copia dell'array movies
  let newMovies = [...movies];
  // Rimuovi l'elemento all'indice specificato dall'array newMovies
  newMovies.splice(index, 1);
  // Ritorna l'array newMovies modificato
  return newMovies;
}

// Esempio di utilizzo della funzione removeIndex
let resultRemoveIndex = removeIndex(3);
// Stampa l'output della funzione removeIndex
console.log(resultRemoveIndex);


/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// Definizione della funzione selectContainer
function selectContainer() {
  // Seleziona l'elemento con id "container" utilizzando il metodo getElementById
  let container = document.getElementById("container");
  // Ritorna l'elemento selezionato
  return container;
}

// Esempio di utilizzo della funzione selectContainer
let containerElement = selectContainer();
// Stampa l'output della funzione selectContainer
console.log(containerElement);


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// Definizione della funzione selectTdElements
function selectTdElements() {
  // Seleziona tutti gli elementi <td> utilizzando il metodo getElementsByTagName
  let tdElements = document.getElementsByTagName("td");
  // Ritorna la lista di elementi selezionati
  return tdElements;
}

// Esempio di utilizzo della funzione selectTdElements
let tdList = selectTdElements();
// Stampa l'output della funzione selectTdElements
console.log(tdList);


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// Definizione della funzione printTdText
function printTdText() {
  // Seleziona tutti gli elementi <td> utilizzando il metodo getElementsByTagName
  let tdElements = document.getElementsByTagName("td");
  // Utilizza un ciclo for per iterare su tutti gli elementi <td>
  for (let i = 0; i < tdElements.length; i++) {
    // Stampa il testo contenuto nell'elemento <td> corrente
    console.log(tdElements[i].textContent);
  }
}

// Esempio di utilizzo della funzione printTdText
printTdText();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// Definizione della funzione addRedBackgroundToLinks
function addRedBackgroundToLinks() {
  // Seleziona tutti gli elementi <a> utilizzando il metodo getElementsByTagName
  let links = document.getElementsByTagName("a");
  // Utilizza un ciclo for per iterare su tutti gli elementi <a>
  for (let i = 0; i < links.length; i++) {
    // Aggiungi uno stile CSS per impostare il background di colore rosso all'elemento <a> corrente
    links[i].style.backgroundColor = "red";
  }
}

// Esempio di utilizzo della funzione addRedBackgroundToLinks
addRedBackgroundToLinks();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

// Definizione della funzione addElementToMyList
function addElementToMyList() {
  // Seleziona l'elemento con id "myList" utilizzando il metodo getElementById
  let myList = document.getElementById("myList");
  // Crea un nuovo elemento <li>
  let newLi = document.createElement("li");
  // Imposta il testo dell'elemento <li>
  newLi.textContent = "Nuovo elemento";
  // Aggiungi l'elemento <li> alla lista non ordinata
  myList.appendChild(newLi);
}

// Esempio di utilizzo della funzione addElementToMyList
addElementToMyList();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// Definizione della funzione clearMyList
function clearMyList() {
  // Seleziona l'elemento con id "myList" utilizzando il metodo getElementById
  let myList = document.getElementById("myList");
  // Utilizza un ciclo while per rimuovere tutti gli elementi figli della lista non ordinata
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}

// Esempio di utilizzo della funzione clearMyList
clearMyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// Definizione della funzione addTestClassToTr
function addTestClassToTr() {
  // Seleziona tutti gli elementi <tr> utilizzando il metodo getElementsByTagName
  let trElements = document.getElementsByTagName("tr");
  // Utilizza un ciclo for per iterare su tutti gli elementi <tr>
  for (let i = 0; i < trElements.length; i++) {
    // Aggiungi la classe CSS "test" all'elemento <tr> corrente utilizzando il metodo classList.add
    trElements[i].classList.add("test");
  }
}

// Esempio di utilizzo della funzione addTestClassToTr
addTestClassToTr();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

//svolto con l'aiuto di stackoverflow e google

// Definizione della funzione halfTree

function halfTree(height) {
  // Utilizza un ciclo for per iterare su ogni livello dell'albero
  for (let i = 1; i <= height; i++) {
    // Crea una stringa di "*" lunga quanto il livello corrente
    let stars = "*".repeat(i);
    // Stampa la stringa di "*" sulla console
    console.log(stars);
  }
}

// Esempio di utilizzo della funzione halfTree
halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

//svolto con l'aiuto di stackoverflow e google

  Esempio:
  tree(3)

    *
   ***
  *****

*/

// Definizione della funzione tree
function tree(height) {
  // Utilizza un ciclo for per iterare su ogni livello dell'albero
  for (let i = 1; i <= height; i++) {
    // Calcola il numero di spazi da stampare prima degli asterischi
    let spaces = " ".repeat(height - i);
    // Crea una stringa di "*" lunga il doppio del livello corrente meno uno
    let stars = "*".repeat(i * 2 - 1);
    // Stampa la stringa di spazi e "*" sulla console
    console.log(spaces + stars);
  }
}

// Esempio di utilizzo della funzione tree
tree(3);


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
//svolto con l'aiuto di stackoverflow e google

// Definizione della funzione isItPrime
function isItPrime(num) {
  // Verifica se il numero è minore o uguale a 1
  if (num <= 1) {
    // Se il numero è minore o uguale a 1, non è un numero primo
    return false;
  }
  // Utilizza un ciclo for per verificare se il numero è divisibile per un numero compreso tra 2 e la radice quadrata del numero
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Verifica se il numero è divisibile per i
    if (num % i === 0) {
      // Se il numero è divisibile per i, non è un numero primo
      return false;
    }
  }
  // Se il ciclo for termina senza trovare un divisore, il numero è un numero primo
  return true;
}

// Esempio di utilizzo della funzione isItPrime
let resultIsItPrime = isItPrime(7);
// Stampa l'output della funzione isItPrime
console.log(resultIsItPrime);


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies2 = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];