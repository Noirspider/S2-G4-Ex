// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if (currentValue > 5) {
      console.log(`${currentValue} è maggiore di 5`);
      sum += currentValue;
    } else {
      console.log(`${currentValue} è minore di 5`);
    }
  }
  return sum;
}

const randomNumbers = [3, 7, 2, 9, 4];
const sumOfGreaterThan5 = checkArray(randomNumbers);
console.log(`Somma dei numeri maggiori di 5: ${sumOfGreaterThan5}`);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function shoppingCartTotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

const shoppingCart = [
  { price: 10, name: "Prodotto 1", id: 1, quantity: 2 },
  { price: 20, name: "Prodotto 2", id: 2, quantity: 3 },
];
const totalAmount = shoppingCartTotal(shoppingCart);
console.log(`Totale carrello: ${totalAmount}`);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(newItem, cart) {
  cart.push(newItem);
  return cart.length;
}

const newItem = { price: 5, name: "Prodotto 3", id: 3, quantity: 1 };
const updatedCartLength = addToShoppingCart(newItem, shoppingCart);
console.log(`Nuova lunghezza del carrello: ${updatedCartLength}`);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart) {
  if (cart.length === 0) {
    return null; // Restituisci null se il carrello è vuoto
  }

  let maxItem = cart[0];
  for (let item of cart) {
    if (item.price > maxItem.price) {
      maxItem = item;
    }
  }
  return maxItem;
}

const shoppingCart2 = [
  { price: 10, name: "Prodotto 1", id: 1, quantity: 2 },
  { price: 20, name: "Prodotto 2", id: 2, quantity: 3 },
  { price: 15, name: "Prodotto 3", id: 3, quantity: 1 },
];
const mostExpensiveItem = maxShoppingCart(shoppingCart2);
console.log(`Prodotto più costoso: ${mostExpensiveItem.name}`);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart) {
  if (cart.length === 0) {
    return null; // Restituisci null se il carrello è vuoto
  }

  return cart[cart.length - 1];
}

const lastItem = latestShoppingCart(shoppingCart2);
console.log(`Ultimo elemento del carrello: ${lastItem.name}`);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(x) {
  let consecutiveCount = 0;
  while (consecutiveCount < 3) {
    const randomNum = Math.floor(Math.random() * 10);
    console.log(`Numero casuale: ${randomNum}`);
    if (randomNum > x) {
      consecutiveCount++;
    } else {
      consecutiveCount = 0;
    }
  }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function average(arr) {
  let sum = 0;
  let count = 0;
  for (let value of arr) {
    if (typeof value === "number") {
      sum += value;
      count++;
    }
  }
  return count > 0 ? sum / count : 0;
}

const numbers = [10, "abc", 20, 30, "xyz"];
const avg = average(numbers);
console.log(`Media aritmetica: ${avg}`);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function longest(strings) {
  let longestStr = "";
  for (let str of strings) {
    if (str.length > longestStr.length) {
      longestStr = str;
    }
  }
  return longestStr;
}

const words = ["apple", "banana", "kiwi", "strawberry", "blueberry"];
const longestWord = longest(words);
console.log(`Parola più lunga: ${longestWord}`);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function antiSpamFilter(emailContent) {
  const lowerCaseContent = emailContent.toLowerCase();
  return !lowerCaseContent.includes("spam") && !lowerCaseContent.includes("scam");
}

const emailText = "Questo è un messaggio senza SPAM.";
const isNotSpam = antiSpamFilter(emailText);
console.log(`Non è spam: ${isNotSpam}`);

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function daysPassedSince(date) {
  const currentDate = new Date();
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const diffInDays = Math.floor((currentDate - date) / millisecondsInDay);
  return diffInDays;
}

const startDate = new Date("2023-01-01");
const daysPassed = daysPassedSince(startDate);
console.log(`Giorni passati da ${startDate.toDateString()}: ${daysPassed}`);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y) {
  const matrix = [];
  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      row.push(`${i}${j}`);
    }
    matrix.push(row);
  }
  return matrix;
}

const matrix = matrixGenerator(3, 2);
for (let row of matrix) {
  console.log(row.join(", "));
}
