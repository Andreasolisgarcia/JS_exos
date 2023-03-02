// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;
let answer = "";
while (answer !== "end"){
  console.log("alors?");
  answer = prompt("Qu'est ce que tu veux dire? (si tu 'en vex rien tape 'end'");
  if (answer[answer.length-1] == "?"){
    console.log("Ouais Ouais...");
  } else if (((answer == answer.toUpperCase())&& (answer !== ""))){
    console.log("Pwa, calme-toi...");
  } else if (answer.includes("Fortnite")){
    console.log("on s' fait une partie soum-soum ?");
  } else if (answer == ""){
    console.log("t'es en PLS ?");
  }else {
    console.log("balek...");
  }
}