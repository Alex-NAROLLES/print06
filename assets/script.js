const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Creation de variables
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

let index = 0; // Initialize index variable

function clickRight() {
	arrowRight.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")
		index++;
		// console.log(index)
		if (index > slides.length -1) {
			index = 0
		}
		arrayDots[index].classList.add("dot_selected")
		
		bannerImg.src = slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		
		
	});

}

clickRight();

function clickLeft() {
	arrowLeft.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")
		index--;
		// console.log(index)
		if (index < 0) {
			index = slides.length -1;
		}
		arrayDots[index].classList.add("dot_selected")

		bannerImg.src = slides[index].image;
		bannerText.innerHTML = slides[index].tagLine;
		
	});

}

clickLeft();
console.log(clickLeft)

//affichage des dots
function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index){
			dot.classList.add("dot_selected");
		}
	}
}

displayDots();










// Ajoutez un event listener pour l'événement 'click' sur la flèche gauche
//arrowLeft.addEventListener('click', function() {
    // Action à effectuer lorsque la flèche gauche est cliquée
//    console.log('Left arrow clicked');
// });

// Ajoutez un event listener pour l'événement 'click' sur la flèche droite
// arrowRight.addEventListener('click', function() {
    // Action à effectuer lorsque la flèche droite est cliquée
   // console.log('Right arrow clicked');
//});

// console.log(slides)