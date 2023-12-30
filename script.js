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

// Validação Tela de Login e Navegação
function validarFormularioENavegar() {
    document.getElementById('emailError').innerText = '';
    document.getElementById('senhaError').innerText = '';
    document.getElementById('emailInput').classList.remove('error-input');
    document.getElementById('senhaInput').classList.remove('error-input');

    var email = document.getElementById('emailInput').value;
    var senha = document.getElementById('senhaInput').value;

    if (!email || !email.includes('@','.')) {
        document.getElementById('emailError').innerText = 'Digite um e-mail válido.';
        document.getElementById('emailInput').classList.add('error-input'); 
        return;
    }

    if (!senha || senha.length < 6) {
        document.getElementById('senhaError').innerText = 'A senha deve ter pelo menos 6 caracteres.';
        document.getElementById('senhaInput').classList.add('error-input'); 
    }
    navegarPara('dashboard.html');
}


// Validação do Cadastro
function validarCadastro() {
    document.getElementById('emailError').innerText = '';
    document.getElementById('senhaError').innerText = '';
    document.getElementById('timeError').innerText = '';
    document.getElementById('emailInput').classList.remove('error-input');
    document.getElementById('senhaInput').classList.remove('error-input');
    document.getElementById('timeInput').classList.remove('error-input');


    var email = document.getElementById('emailInput').value;
    var senha = document.getElementById('senhaInput').value;
    var time = document.getElementById('timeInput').value;

    if (!email || !email.includes('@')) {
        document.getElementById('emailError').innerText = 'Digite um e-mail válido.';
        document.getElementById('emailInput').classList.add('error-input');
        return false;
    }

    if (!senha || senha.length < 6) {
        document.getElementById('senhaError').innerText = 'A senha deve ter pelo menos 6 caracteres.';
        document.getElementById('senhaInput').classList.add('error-input');
        return false;
    }

    if (!time) {
        document.getElementById('timeError').innerText = 'Digite o time de sua preferência.';
        document.getElementById('timeInput').classList.add('error-input');
        return false;
    }

    return true;
}

function navegarPara(destino) {
    if (destino.startsWith("http") || destino.startsWith("www")) {
        window.location.href = destino;
    } else {
        const caminhoRelativo = destino.startsWith("/") ? destino : `/${destino}`;
        window.location.href = caminhoRelativo;
    }
}

function validarCadastroENavegar() {
    if (validarCadastro()) {
        navegarPara('dashboard.html');
    }
}
