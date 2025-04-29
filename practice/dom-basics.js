const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "httlp://picsum.photos/200");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSec = document.createElement("section");
document.body.appendChild(newSec);

const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSec.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through javascript";
newSec.appendChild(newP);

document.body.appendChild(newSec);