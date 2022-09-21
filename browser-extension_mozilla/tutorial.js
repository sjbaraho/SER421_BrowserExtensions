var header = document.getElementsByClassName("center");

for (let i = 0; i < header.length; i++) {
  header[i].style.textAlign = "center";
}

document.getElementById("contents").style.listStyleType = "none";
document.getElementById("contents").style.paddingLeft = "0px";

var aTag = document.getElementsByTagName("a");
for (let i = 0; i < aTag.length; i++) {
  aTag[i].style.textDecoration = "none";
}

document.body.style.backgroundColor = "#e6dabc";
document.getElementsByTagName("header")[0].style.backgroundColor = "white";

let inner = document.body.innerHTML;
inner = '<div id="wrapper">' + inner + "</div>";
document.body.innerHTML = inner;
let div = document.getElementById("wrapper").style;
div.margin = "auto";
div.width = "80%";
div.backgroundColor = "#F8EFD8";
div.border = "5px solid #AA8E4A";
div.padding = "0px 5px";
