const ocultarPaneles = document.querySelector(".main__paneles");
const ocultarBaterias = document.querySelector(".main__baterias");
const ocultarTransformadores = document.querySelector(".main__transformadores");
const divParteArray = document.querySelectorAll(".main__article");


function ocultar2y3 (){
    divParteArray[1].style.display = "none";
    divParteArray[2].style.display = "none";
}
ocultarPaneles.addEventListener("click", ocultar2y3)

function ocultar1y3 (){
    divParteArray[0].style.display = "none";
    divParteArray[2].style.display = "none";
}
ocultarBaterias.addEventListener("click", ocultar1y3)

function ocultar1y2 (){
    divParteArray[0].style.display = "none";
    divParteArray[1].style.display = "none";
}
ocultarTransformadores.addEventListener("click", ocultar1y2)