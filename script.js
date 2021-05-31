//Fonctionnalité 1 :
let footer = document.querySelector("footer");

function footerAlert()
{
    console.log("clique");
}

footer.addEventListener("click", footerAlert);
console.log("");

//fonctionnalité 1 bis :
function footerAlert2() {
  footer = document.querySelector("footer")
  nombre_de_clic = 1
  footer.addEventListener("click", function() {
      alert("clique n° " + nombre_de_clic)
      nombre_de_clic++
  })
}
footerAlert2();
console.log("");

//Fonctionnalité 2 :
let hamburgerMenu = document.getElementById("navbarHeader");
let btn = document.querySelector(".navbar-toggler-icon");

function openOrCloseMenu() 
{
    hamburgerMenu.classList.toggle("collapse");
}

btn.addEventListener("click", openOrCloseMenu);
console.log("");

//Fonctionnalité 3
const card1 = document.querySelectorAll('div.col-md-4')[0]; 
const editCard1 = document.querySelector('div.col-md-4 button.btn-outline-secondary')[0]; 
editCard1.addEventListener('click', function() {     
  card1.style.color = "red";
  editCard1.style.color = "red";
});
console.log("")

//Fonctionnalité 4
const card2 = document.querySelectorAll('div.col-md-4')[1]; 
const editCard2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1]; 
function colorGreen() 
{
if (secondCard.style.color === 'green'){
  secondCard.style.color = 'black' ;
  }else {
    secondCard.style.color === 'green' 
  }
}
editCard2.addEventListener("click", colorGreen);
console.log("")
//Fonctionnalité 5

//Fonctionnalité 6

//Fonctionnalité 7

//Fonctionnalité 8

//Fonctionnalité 9
