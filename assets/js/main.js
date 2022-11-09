console.log("Start JS");

const h1 = document.querySelector("#titular");
const imagem = document.querySelector("#lechuza");
const inputs = document.querySelectorAll("form input");
const copyright = document.querySelector("#copyright");
const urlTwitter = document.querySelector(".fa-twitter").getAttribute("href");
const urlFacebook = document.querySelector(".fa-facebook").getAttribute("href");
const urlYoutube = document.querySelector(".fa-youtube");
const form = document.querySelector(".formulario");
const allH2 = document.querySelectorAll("h2");
const allIccons = document.querySelectorAll(".icon");


/*=========DOM - Seletores/Atributos=========*/

//Exercício 1
h1.style.display ="none";


//Exercício 2
imagem.style.filter = "grayscale(100%)";


//Exercício 3
inputs.forEach(element => {
  element.style.background = "red";
});


/*================Seletores=================*/

//Exercício 1
console.log(copyright.attributes);

//Exercício 2
console.log(urlTwitter);

//Exercício 3
console.log(urlFacebook);

//Exercício4
urlYoutube.setAttribute("href","https://www.youtube.com/c/DigitalHouseBrasil");
console.log(urlYoutube);

urlYoutube.setAttribute("target","_blank");

//Exercício5
console.log(`atributo "action":${form.hasAttribute("action")}`);

//Exercício6
const content =  form.getAttribute("url");
form.setAttribute("action", content)
form.removeAttribute("url");
console.log(form.getAttribute("action"));

//Exercicio 7
allH2.forEach(element =>{
  element.style.color = "red";
});

//Exercício 8
allIccons.forEach(element => {
  element.style.color = "#680094";
})



