// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
//   // Utilisateur rentre un nombre (par ex 5)
//     #
//    ##
//   ###
//  ####
// #####

let num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let i = 1;
let stages = num ;

while (i <= stages) { 
    num--;
    let espaces = " ".repeat(num);
    let signs = "#".repeat(i);
    console.log(espaces + signs);
    i++;
}