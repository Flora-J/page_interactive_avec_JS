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
function hamburgerMenu() {
	menu = document.getElementById("navbarHeader")
	hambuger = document.querySelector(".navbar-toggler-icon")
	hambuger.addEventListener("click", function () {
		menu.classList.toggle("collapse")
	})
}
hamburgerMenu()
console.log("")

//Fonctionnalité 3
function redText() {
	editCardButtonOne = document.querySelectorAll("div.col-md-4")[0]
	textCardOne = document.querySelectorAll("div.col-md-4 button.btn-outline-secondary")[0]
	editCardButtonOne.addEventListener("click", function() {
    textCardOne.style.color = "red"
	})
}
redText()
console.log("")

//Fonctionnalité 4
function greenText() {
	editCardButtonTwo = document.querySelectorAll("div.col-md-4")[1]
	textCardTwo = document.querySelectorAll("div.col-md-4 button.btn-outline-secondary")[1]
	i = 1
	editCardButtonTwo.addEventListener("click", function() {
		i++
    if (textCardTwo.style.color === "green")
    {
      textCardTwo.style.color = "";
    }
    else
    {
      textCardTwo.style.color = "green";
    }
	})
}
greenText()
console.log("")

//Fonctionnalité 5 
function nuclearPage() {
	navbar = document.querySelector("div.navbar")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
	})
}

nuclearPage()
console.log("")
//Fonctionnalité 6

//Fonctionnalité 7

//Fonctionnalité 8

//Fonctionnalité 9
