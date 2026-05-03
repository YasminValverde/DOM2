window.onload = function () {
  console.log("-------------------------------------------------1-------------------------------------");
  let primerLink = document.querySelector("a");
  console.log(`El node '${primerLink.nodeName}' és del tipus: '${primerLink.nodeType}' (Element)`);

  console.log("------------------------------------------------2--------------------------------------");
  let todosLinks = document.querySelectorAll("a");
  for (let i = 0; i < todosLinks.length; i++) {
    todosLinks[i].style.color = "yellow";
  }

  console.log("------------------------------------------------3--------------------------------------");
  let relPag = document.getElementById("relatedPages");


  let padreDiv = relPag.parentNode;
  padreDiv.style.border = "1px solid";
  padreDiv.style.width = "500px";
  padreDiv.style.padding = "10px";

  
  relPag.previousElementSibling.style.color = "greenYellow";


  let primerLi = relPag.firstElementChild;                         
  primerLi.firstChild.firstChild.nodeValue += " (W3C)";           

  let segonLi = primerLi.nextElementSibling;                      
  segonLi.firstElementChild.firstChild.nodeValue += " (W3C)";

  let tercerLi = relPag.children.item(2);                         
  tercerLi.firstElementChild.firstChild.nodeValue += " (W3C)";

 
  console.log("Links de Related pages:");
  let liActual = relPag.firstElementChild;
  while (liActual) {
    console.log(liActual.firstElementChild.textContent);
    liActual = liActual.nextElementSibling;
  }

  console.log("------------------------------------------------4--------------------------------------");

  let nouLi = document.createElement("li");
  let nouA = document.createElement("a");
  nouA.setAttribute("href", "https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n");
  nouA.setAttribute("style", "color: yellow;");
  let nouText = document.createTextNode("¿Qué es el DOM? (mozilla.org)");
  nouA.appendChild(nouText);
  nouLi.appendChild(nouA);
  relPag.appendChild(nouLi);

  console.log("------------------------------------------------5--------------------------------------");

  let ambClass = document.querySelectorAll("[class]");
  for (let i = 0; i < ambClass.length; i++) {
    ambClass[i].removeAttribute("class");
  }

  let headings = document.querySelectorAll("h1, h2");
  for (let i = 0; i < headings.length; i++) {
    headings[i].setAttribute("class", "newclass");
  }
};
