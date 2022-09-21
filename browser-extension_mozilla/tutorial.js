var header = document.getElementsByClassName("center");

for (let i = 0; i < header.length; i++) {
  header[i].style.textAlign = "center";
}

document.getElementById("contents").style.listStyleType = "none";
document.getElementById("contents").style.paddingLeft = "0px";

let inner = document.body.innerHTML;
inner = '<div id="wrapper">' + inner + "</div>";
document.body.innerHTML = inner;
let div = document.getElementById("wrapper").style;
div.margin = "auto";
div.width = "80%";
div.backgroundColor = "#F8EFD8";
div.border = "5px solid #AA8E4A";
div.padding = "0px 5px";

let containers = document.getElementsByClassName("container");
for (let i = 0; i < containers.length; i++) {
  containers[i].style.border = "3px solid #aa8e4a";
  containers[i].style.paddingLeft = "30px";
}

// hide the title
document.getElementById("h1").hidden = true;

// hide the table of contents header
document.getElementById("table-contents").hidden = true;

// create a nav bar at the top of the page
let navbar = document.getElementById("nav");
navbar.innerHTML = "";

// create individual links in the nav bar
let websiteTitle = document.createElement("p");
websiteTitle.id = "website-title";
websiteTitle.innerHTML = "Browser Extensions";
websiteTitle.style.marginLeft = "50px";
websiteTitle.style.marginRight = "100px";
websiteTitle.style.fontSize = "24px";
websiteTitle.style.fontWeight = "bold";

let firstPage = document.createElement("a");
firstPage.href = "BrowserExtensions.html";
firstPage.style.backgroundColor = "blue";
firstPage.style.color = "white";
firstPage.innerHTML = "Learning Outcomes and Activities";

let secondPage = document.createElement("a");
secondPage.href = "history.html";
secondPage.innerHTML = "History of Browser Extensions";
secondPage.style.color = "blue";
secondPage.addEventListener("mouseover", (event) => {
  secondPage.style.backgroundColor = "#ddd";
  secondPage.style.color = "blue";
});
secondPage.addEventListener("mouseout", (event) => {
  secondPage.style.backgroundColor = "whitesmoke";
  secondPage.style.color = "blue";
});

let thirdPage = document.createElement("a");
thirdPage.href = "analysis.html";
thirdPage.innerHTML = "Analytical Component";
thirdPage.style.color = "blue";
thirdPage.addEventListener("mouseover", (event) => {
  thirdPage.style.backgroundColor = "#ddd";
  thirdPage.style.color = "blue";
});
thirdPage.addEventListener("mouseout", (event) => {
  thirdPage.style.backgroundColor = "whitesmoke";
  thirdPage.style.color = "blue";
});

let fourthPage = document.createElement("a");
fourthPage.href = "references.html";
fourthPage.innerHTML = "References";
fourthPage.style.color = "blue";
fourthPage.addEventListener("mouseover", (event) => {
  fourthPage.style.backgroundColor = "#ddd";
  fourthPage.style.color = "blue";
});
fourthPage.addEventListener("mouseout", (event) => {
  fourthPage.style.backgroundColor = "whitesmoke";
  fourthPage.style.color = "blue";
});

let fifthPage = document.createElement("a");
fifthPage.href = "resources.html";
fifthPage.innerHTML = "Resources";
fifthPage.style.color = "blue";
fifthPage.addEventListener("mouseover", (event) => {
  fifthPage.style.backgroundColor = "#ddd";
  fifthPage.style.color = "blue";
});
fifthPage.addEventListener("mouseout", (event) => {
  fifthPage.style.backgroundColor = "whitesmoke";
  fifthPage.style.color = "blue";
});

// append the links to the nav bar
navbar.appendChild(websiteTitle);
navbar.appendChild(firstPage);
navbar.appendChild(secondPage);
navbar.appendChild(thirdPage);
navbar.appendChild(fourthPage);
navbar.appendChild(fifthPage);

// style the nav bar
navbar.style.display = "flex";
navbar.style.justifyContent = "left";
navbar.style.alignItems = "center";
navbar.style.backgroundColor = "whitesmoke";
navbar.style.height = "auto";

// style the links
let aTag = document.getElementsByTagName("a");

for (let i = 0; i < aTag.length; i++) {
  aTag[i].style.float = "left";
  aTag[i].style.textAlign = "center";
  aTag[i].style.paddingTop = "10px";
  aTag[i].style.paddingBottom = "10px";
  aTag[i].style.paddingLeft = "20px";
  aTag[i].style.marginLeft = "20px";
  aTag[i].style.paddingRight = "20px";
  aTag[i].style.marginRight = "20px";
  aTag[i].style.textDecoration = "none";
  aTag[i].style.fontSize = "17px";
  aTag[i].style.justifyContent = "center";
}

// h1, h2 {
//   text-align: center;
// }

// p {
//   font-size: 20px;
//   margin-left: 200px;
//   margin-right: 200px;
// }

// nav {
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   background-color: whitesmoke;
// }

// nav a {
//   float: left;
//   color: blue;
//   text-align: center;
//   padding: 14px 30px;
//   text-decoration: none;
//   font-size: 17px;
// }

// nav a:visited {
//   color: blue;
// }

// nav a:hover {
//   background-color: #ddd;
//   color: blue;
// }

// nav a.active {
//   background-color: blue;
//   color: white;
// }

// body {
//   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
// }

// ol {
//   counter-reset: o-counter -1;
//   list-style-type: none;
// }

// ol li:before {
//   content: '[' counter(o-counter) '] ';
//   counter-increment: o-counter;
// }

// .website-title {
//   margin-left: 50px;
//   margin-right: 100px;
//   font-size: 24px;
//   font-weight: bold;
// }

// .references-list {
//   font-size: 20px;
//   margin-left: 700px;
//   margin-right: 700px;
// }
