//document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const galleryPrevBtn = document.querySelector(".gallery-container .prev");
  const galleryNextBtn = document.querySelector(".gallery-container .next");

  const carousel = document.querySelector(".times .carousel");
  const carouselPrevBtn = document.querySelector(".times .prev");
  const carouselNextBtn = document.querySelector(".times .next");
  

  var button_barraLateral = document.querySelector(".div_burger");
  
  let galleryIndex = 0;
  let carouselIndex = 0;

  galleryNextBtn.addEventListener("click", function () {
    if (galleryIndex < gallery.children.length - 1) {
      galleryIndex++;
    } else {
      galleryIndex = 0;
    }
    updateGallery();
  });

  galleryPrevBtn.addEventListener("click", function () {
    if (galleryIndex > 0) {
      galleryIndex--;
    } else {
      galleryIndex = gallery.children.length - 1;
    }
    updateGallery();
  });

  function updateGallery() {
    const galleryTranslateValue = -galleryIndex * 100 + "%";
    gallery.style.transform = "translateX(" + galleryTranslateValue + ")";
  }

  carouselNextBtn.addEventListener("click", function () {
    if (carouselIndex < carousel.children.length - 1) {
      carouselIndex++;
    } else {
      carouselIndex = 0;
    }
    updateCarousel();
  });

  carouselPrevBtn.addEventListener("click", function () {
    if (carouselIndex > 0) {
      carouselIndex--;
    } else {
      carouselIndex = carousel.children.length - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const carouselTranslateValue = -carouselIndex * (100 + 8) + "%";
    carousel.style.transform = "translateX(" + carouselTranslateValue + ")";
  }
//});

//Menu Lateral

const imgAbrirMenu = document.querySelector(".img_burger");
imgAbrirMenu.addEventListener("click", abrirOuFecharMenu);

const buttonFecharMenu = document.querySelector(".buttonFecharMenu"); 
buttonFecharMenu.addEventListener("click", abrirOuFecharMenu);

function abrirOuFecharMenu() {
  const barraLateral = document.querySelector(".barra_lateral");
  barraLateral.style.display = (barraLateral.style.display === 'flex') ? 'none' : 'flex';
}
