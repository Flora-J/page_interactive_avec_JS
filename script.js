//Fonctionnalité 1 :
let footer = document.querySelector("footer");

function footerAlert()
{
    console.log("clique");
}

footer.addEventListener("click",posterOnTheConsole);
console.log("")

//fonctionnalité 1 bis :
function footerAlert2() {
  footer = document.querySelector("footer")
  nombre_de_clic = 1
  footer.addEventListener("click", function() {
      alert("clique n° " + nombre_de_clic)
      nombre_de_clic++
  })
}
footerAlert2()
console.log("")

//Fonctionnalité 2 :

//Fonctionnalité 3

//Fonctionnalité 4

//Fonctionnalité 5

//Fonctionnalité 6

//Fonctionnalité 7

//Fonctionnalité 8

//Fonctionnalité 9
