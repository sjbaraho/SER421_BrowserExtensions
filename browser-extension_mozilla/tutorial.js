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