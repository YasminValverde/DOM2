window.onload = function () {
  console.log(
    "-------------------------------------------------1-------------------------------------",
  );
  let primerLink = document.querySelector("a");
  let nomNode = primerLink.nodeName;
  let tipusNode = primerLink.nodeType;
  console.log(`El node '${nomNode}' és del tipus: '${tipusNode}' (Element)`);
  console.log(
    "------------------------------------------------2--------------------------------------",
  );

  let todosLink = document.querySelectorAll("a");
  todosLink.forEach((link) => (link.style.color = "yellow"));
  console.log(
    "------------------------------------------------3--------------------------------------",
  );

  let relPag = document.getElementById("relatedPages");
  let padreDiv = relPag.parentNode;
  padreDiv.style.border = "1px solid";
  padreDiv.style.width = "500px";
  padreDiv.style.padding = "10px";

  relPag.previousSibling.style.color = "green";
};
