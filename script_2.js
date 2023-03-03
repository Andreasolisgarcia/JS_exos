// Un prompt s'affiche avec la question suivante
// "De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"


let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
if (num == 0){
    num = 1;
}
let i = num;

while (i > 1) { 
    i--; 
    num *= i; 
}

console.log(num);

