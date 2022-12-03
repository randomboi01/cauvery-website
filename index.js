let hidden = document.querySelector('.--hidden');


hidden.style.visibility = "hidden"

// login.addEventListener("click", loginPage);

// js in problems file
// coloring
//live animation
// login page styling



let slideIndex = 1;
showSlides(slideIndex);


function autofunction () {
  let n = 1;
  let slides = document.querySelectorAll("mySlides");
  setInterval(
    function () {
      plusSlides(n);
      n++;
      if (n >= 4) {
        n = 1;
      }
      console.log(n);
    }
    , 3000)
  }
  
  let autoSlides = document.getElementById("auto");
  autoSlides.addEventListener("onload", autofunction());
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let body = document.body;
// body.onload = setInterval(plusSlides(5), 100);

console.log(hidden)
// function loginPage() {
//   if (page.style.display != "none") {
//     page.style.display = "none";
//   }

//   else {
//         page.style.display = "block";
//     }
// }



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".--nav-link");

// hamburger javascript for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

function displayContent () {
  document.getElementById("para-content").innerText = "Ice-cream Night on 28/11/2022"
}
