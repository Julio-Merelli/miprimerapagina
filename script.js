
const toggleButton = document.getElementById("toggle-button");
const sliderContainer = document.querySelector(".slider-container");
const galleryContainer = document.querySelector(".gallery-container");
const imgElements = document.querySelectorAll(".img_galeria");
const prevButton = document.getElementById("anterior");
const nextButton = document.getElementById("siguiente");
const images = ["imagenes/dog1.png", "imagenes/dog2.png", "imagenes/dog3.png", "imagenes/dog4.png"];
let currentImageIndex = 0;

toggleButton.addEventListener("click", function() {
  if (sliderContainer.style.display === "none") {
    sliderContainer.style.display = "block";
    galleryContainer.style.display = "none";
    toggleButton.textContent = "Ver vista galería de imágenes";
  } else {
    sliderContainer.style.display = "none";
    galleryContainer.style.display = "block";
    toggleButton.textContent = "Ver vista deslizador de imágenes";
  }
});

function showImage(index) {
  imgElements.forEach(function(img) {
    img.style.display = "none";
  });
  imgElements[index].style.display = "block";
}

prevButton.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextButton.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

showImage(currentImageIndex);








function showalert(){
    alert('sos curioso?????')
}

function mostrarInicio(){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("formulario").style.display = "none";
    document.getElementById("imagenes").style.display = "none";
    
}
function mostrarFormulario(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    document.getElementById("imagenes").style.display = "none";
    
}
function mostrarImagenes(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("formulario").style.display = "none";
    document.getElementById("imagenes").style.display = "block";
    


}



function mostrarmenuresp(){
  document.getElementById
}


document.querySelector("button.responsivemenu").addEventListener("click", function() {
  document.querySelector("nav.barra ul.barra").classList.toggle("nav-links-responsive");
});


const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
function validateName(name) {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(name);
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateComentario(comentario) {
  const regex = /^.{10,}$/;
  return regex.test(comentario);
}
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const comentarioInput = document.getElementById('comentario'); 
  const name = nameInput.value;
  const email = emailInput.value;
  const comentario = comentarioInput.value;
  if (!validateComentario(comentario)) {
    alert('Por favor ingrese un mínimo de 10 caracteres en el comentario.');
    return;
  }
  if (!validateName(name)) {
    alert('Por favor ingrese un nombre válido.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    return;
  }
  alert('Formulario enviado correctamente.');
}






