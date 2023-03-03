const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//   Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

//   Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let boollean = true
books.forEach(book => {
    if(book["rented"] == 0){
        boollean = false;
    }
});

console.log(boollean);

// Quel est le livre le plus emprunté ?
console.log("Quel est livre le plus emprunté ?");
let mostRented = books[0];
for (let i = 1; i < books.length; i++) {
    if (books[i].rented > mostRented.rented) {
        mostRented = books[i];
    }
}

console.log(`****Le livre le plus emprunté est "${mostRented.title}", en total ${mostRented.rented}, fois *****`);

//   Quel est le livre le moins emprunté ?

console.log("Quel est livre le moins emprunté ?");
let leastRented = books[0];
let i = 0
while (i < books.length){
    if (books[i].rented < leastRented.rented) {
       leastRented = books[i];
    }
    i++;
}
console.log(`***** Le livre le moins emprunté est "${leastRented.title}", en total ${leastRented.rented}, fois *****`);
//   Trouve le livre avec l'ID: 873495 ;

console.log("Trouve le livre avec l'ID: 873495");
let bookID = null;
books.forEach(book => {
    if(book["id"] == 873495){
        bookID = book;
    }
});

console.log(`***** Le livre avec l'ID: 873495 est "${bookID.title}" *****`);

//   Supprime le livre avec l'ID: 133712 ;
console.log(` Supprime le livre avec l'ID: 133712`);
const updatedBooks =  books.filter(book => book.id !== 133712);
console.log(updatedBooks)

//   Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
updatedBooks.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  
  console.log(updatedBooks);
