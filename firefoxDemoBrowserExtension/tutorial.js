//center elements
var center = document.getElementsByClassName("center");
for (let i = 0; i < center.length; i++) {
  center[i].style.textAlign = "center";
}

//style wrapper
let div = document.getElementById("wrapper").style;
div.margin = "auto";
div.width = "80%";
div.backgroundColor = "#F8EFD8";
div.border = "5px solid #AA8E4A";
div.padding = "0px 5px";

//style h1
let h1 = document.getElementById("h1").style;
h1.marginLeft = "auto";
h1.marginRight = "auto";

//style header
let header = document.getElementsByTagName("header")[0].style;
header.display = "flex";
header.alignItems = "center";
header.justifyContent = "center";
header.backgroundColor = "whitesmoke";
header.textAlign = "center";

//remove bullets from nav bar
let nav = document.getElementById("nav");
let navUl = nav.children[0];
navUl.style.listStyleType = "none";
navUl.style.paddingLeft = "0px";

//make list elements inline
let navLi = navUl.getElementsByTagName("li");

for (let i = 0; i < navLi.length; i++) {
  navLi[i].style.display = "inline";
}

//style nav links
let aTags = navUl.getElementsByTagName("a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].style.textDecoration = "none";
  aTags[i].style.float = "center";
  aTags[i].style.padding = "10px 10px";
  aTags[i].style.margin = "0px 5px";
  aTags[i].style.fontSize = "17px";
}

//style current page
document.getElementById("current-page").style.backgroundColor = "#7c6836";
document.getElementById("current-page").style.color = "white";

//create css styling for hover and visted
let style = document.createElement("style");
style.innerHTML = "#current-page:hover {background-color: #7c6836; #7c6836: white;} nav a:visited {color: #7c6836;} nav a:hover {background-color: #ddd; color: #7c6836;}";
document.head.appendChild(style);

//style container
let containers = document.getElementsByClassName("container");
for (let i = 0; i < containers.length; i++) {
  containers[i].style.border = "2px solid #aa8e4a";
  containers[i].style.backgroundColor = "white";
  containers[i].style.borderRadius = "20px";
  containers[i].style.margin = "auto auto 50px auto";
  containers[i].style.padding = "0px 10px";
  containers[i].style.width = "50%";
  containers[i].style.boxShadow = "5px 5px 2px #aa8e4a";
}

// style the activities header
document.getElementById("activities").style.margin = "0px auto 0px auto";

// style the introduction to the activities section
document.getElementById("activities-introduction").style.margin = "20px 90px 20px 90px";

//use key image as ul bullets
document.getElementsByClassName("container")[0].style.listStyleImage = 'url("icons/key.png")';

// style the jump link prompt
document.getElementById("jump-link-prompt").style.textAlign = "center";

// style the learning activity jump links
let learningActivityJumpLinks = document.getElementsByClassName("jump-to-learning-activity");
for (let i = 0; i < learningActivityJumpLinks.length; i++) {
  learningActivityJumpLinks[i].style.textAlign = "center";
}

// style each activity group
let activityGroups = document.getElementsByClassName("activity-group");
for (let i = 0; i < activityGroups.length; i++) {
  activityGroups[i].style.borderStyle = "solid";
  activityGroups[i].style.borderWidth = "2px";
  activityGroups[i].style.borderColor = "#AA8E4A"
  activityGroups[i].style.borderRadius = "20px";
  activityGroups[i].style.margin = "50px 90px 50px 90px";
  activityGroups[i].style.padding = "10px 10px 10px 10px";
  activityGroups[i].style.boxShadow = "5px 5px 2px #aa8e4a";
}

//style activity container
let activityContainers = document.getElementsByClassName("activity-container");
for (let i = 0; i < activityContainers.length; i++) {
  activityContainers[i].style.display = "grid";
  activityContainers[i].style.gridTemplateRows = "auto";

  // style each activity
  let activities = activityContainers[i].getElementsByTagName("div");
  for (let i = 0; i < activities.length; i++) {
    activities[i].style.borderStyle = "solid";
    activities[i].style.borderWidth = "1px";
    activities[i].style.borderColor = "#AA8E4A"
    activities[i].style.borderRadius = "20px";
    activities[i].style.margin = "5px 10px 5px 10px";
    activities[i].style.padding = "20px 50px 20px 50px";
    activities[i].style.backgroundColor = "white";
  }

  // pad the ol elements
  let olItems = activityContainers[i].getElementsByTagName("ol");
  for (let i = 0; i < olItems.length; i++) {
    olItems[i].style.paddingLeft = "20px";
  }

  // pad all the ol li elements in the activity container
  let liItems = activityContainers[i].getElementsByTagName("li");
  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.paddingTop = "10px";
  }

  // pad all the ul li elements in the activity container
  let ulItems = activityContainers[i].getElementsByTagName("ul");
  for (let i = 0; i < ulItems.length; i++) {
    ulItems[i].style.paddingTop = "10px";
    ulItems[i].style.listStyleType = "circle";
  }

  // pad and size all the images
  let images = activityContainers[i].getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.marginTop = "10px";
    images[i].style.padding = "10px 10px 10px 10px"
    images[i].style.width = "50%";
    images[i].style.border = "solid";
    images[i].style.borderWidth = "1px";
    images[i].style.borderColor = "#ccc"
    images[i].style.borderRadius = "20px";
    images[i].style.boxShadow = "10px 10px 5px #ccc";
  }
}

// style step header
let stepHeader = document.getElementsByClassName("step-header");
for (let i = 0; i < stepHeader.length; i++) {
  stepHeader[i].style.fontSize = "18px";
  stepHeader[i].style.fontWeight = "bold";
  stepHeader[i].style.display = "inline-flex";
  stepHeader[i].style.margin = "auto auto auto auto";
}

// style the section separators
let sectionSeparators = document.getElementsByClassName("section-separator");
for (let i = 0; i < sectionSeparators.length; i++) {
  sectionSeparators[i].style.textAlign = "center";
  sectionSeparators[i].style.margin = "20px 0px 20px 0px";
  sectionSeparators[i].style.color = "#aa8e4a"
}

// style other images
let twentyImages = document.getElementsByClassName("20-image");
for (let i = 0; i < twentyImages.length; i++) {
  twentyImages[i].style.width = "20%";
}

let fortyImages = document.getElementsByClassName("40-image");
for (let i = 0; i < fortyImages.length; i++) {
  fortyImages[i].style.width = "40%";
}

let ninetyImages = document.getElementsByClassName("90-image");
for (let i = 0; i < ninetyImages.length; i++) {
  ninetyImages[i].style.width = "90%";
}
