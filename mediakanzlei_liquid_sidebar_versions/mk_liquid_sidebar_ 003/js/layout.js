// Puts all div with classname .div-block-8 on absolute, so that the pages
// are on top of each other

var absoluteDiv = document.getElementsByClassName('div-block-8');
for (a = 0; a < absoluteDiv.length; a++) {
  // absoluteDiv[a].style.position = "absolute";
  absoluteDiv[a].setAttribute("style", "margin: 0px; position: absolute");
}
// End //

// Adds to all images with classname .image-4 a max-height and max-width of 90vh/90vw
// so that they become liquid. The attribute sizes has to removed, otherwise the Pic
// size will still be limited

var heightPic = document.getElementsByClassName('image-4');
for (b = 0; b < heightPic.length; b++) {
  heightPic[b].removeAttribute("sizes");
  heightPic[b].setAttribute("style", "margin: 0px; width: auto; height: auto; min-height: 400px; max-height: 85vh; max-width: 85vw");
}
// End //

// Adjusts the size of the grid and the container (class-container) exactly to the size of the image
// var img = gets the first image of class image-4
// function gridSize:
// var heightGrid gets the height value of var img
// var widthGrid gets the width value of var img
// var gridAdjust gets an array with all gridSize
// in that for loop the width/height of all grids get adjustet to image size

var img = document.getElementsByClassName('image-4')[0];

function gridSize() {
  var heightGrid = img.height;
  var widthGrid = img.width;
  var contAdjust = document.getElementsByClassName('w-container');
  // var gridAdjust = document.getElementsByClassName('grid');
  var divBlockAdjust = document.getElementsByClassName('div-block-8');

  for (c = 0; c < contAdjust.length; c++) {
    contAdjust[c].style.height = heightGrid + "px";
    contAdjust[c].style.width = widthGrid + "px";
    }
  // for (c1 = 0; c1 < gridAdjust.length; c1++) {
  //   gridAdjust[c1].style.height = heightGrid + "px";
  //   gridAdjust[c1].style.width = widthGrid + "px";
  //   }
  for (c3 = 0; c3 < divBlockAdjust.length; c3++) {
    divBlockAdjust[c3].style.height = heightGrid + "px";
    divBlockAdjust[c3].style.width = widthGrid + "px";
    }
};
// End //

// function waits until pictures are loaded, otherwise grid might get a
// width & height of 0. Eventlistener with resize checks everytime the
// browser gets adjusted and executes function gridSize, so that grid
// gets instantly the same size as the picture.

img.addEventListener('load', gridSize);
gridSize();
window.addEventListener("resize", gridSize);
// End //

// Adds arrows so that user can click through the pages

function createRightArrow() {
  var arrow = document.createElement("img");
  arrow.setAttribute("id", "arrowRight");
  arrow.setAttribute("class", "arrows");
  arrow.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MCA0OTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MCA0OTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNS41NDEsNDkwVjBsNDU4LjkxNywyNDUuMDA5TDE1LjU0MSw0OTB6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==");
  arrow.style.position = "absolute";
  arrow.style.top = "50%";
  arrow.style.right = "0%";
  arrow.style.width = "3vw";
  arrow.style.height = "3vw";
  arrow.style.maxWidth = "30px";
  arrow.style.marginRight = "2%";
  arrow.style.marginTop = "1%";
  arrow.style.zIndex = "99999";
  arrow.style.transition = "transform 0.3s";
  arrow.style.cursor = "pointer";
  document.body.appendChild(arrow);
  document.getElementById("arrowRight").addEventListener("click", function() {
    }
)};
createRightArrow();

function createLeftArrow() {
  var arrow = document.createElement("img");
  arrow.setAttribute("id", "arrowLeft");
  arrow.setAttribute("class", "arrows");
  arrow.setAttribute("src", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MCA0OTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MCA0OTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NzQuNDU5LDB2NDkwTDE1LjU0MSwyNDQuOTkxTDQ3NC40NTksMHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
  arrow.style.position = "absolute";
  arrow.style.top = "50%";
  arrow.style.left = "0%";
  arrow.style.width = "3vw";
  arrow.style.height = "3vw";
  arrow.style.maxWidth = "30px";
  arrow.style.marginLeft = "2%";
  arrow.style.marginTop = "1%";
  arrow.style.zIndex = "99999";
  arrow.style.transition = "transform 0.3s";
  arrow.style.cursor = "pointer";
  arrow.style.display = "none";
  document.body.appendChild(arrow);
  document.getElementById("arrowLeft").addEventListener("click", function() {
    }
)};
createLeftArrow();
// End //

// Since the last div of the document gets on top, when position is put to absolute
// we have to change the z-indexes, so that the first page appears on top.
// var pages gets an array with all elements with class div-block-8

var pages = document.getElementsByClassName('div-block-8');

for (d = 0; d < pages.length; d++) {
  pages[d].style.zIndex = [pages.length - d];
  }
// End //

// function to create a page counter //

function createPageCounter() {
  var page = document.createElement("div");
  page.setAttribute("id", "pageCount");
  page.style.position = "absolute";
  page.style.bottom = "2%";
  page.style.left = "50%";
  page.style.fontSize = "25px";
  page.style.color = "white";
  page.style.transform= "translate(-50%, 0%)";
  page.style.transition= "all 0.3s";
  document.body.appendChild(page);
}
createPageCounter();

// End //

// Sets a hover pseudoclass via Javascript to both arrows by adding a new stylesheet to the document and adds a new mediaquery
// because webflow export sets a mediaquery with max-width, which makes the container uncentered at 991px

var css = '@media screen and (max-width: 991px) { .w-container { max-width: none;}} .arrows:hover{ transform: scale(1.3); transform-origin: center; opacity: 0.8;}';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.getElementsByTagName('head')[0].appendChild(style);

// End //

// Page Counter //
var z = 1; // Counter Pagenumber
document.getElementById('pageCount').innerHTML = "Seite " + z + " / " + pages.length;
// Flips through pages when clicking the arrows //
var x = 0; // position Bild
var y = 50; // Z-index (is that high because when rearranging z-index earlier the highest current index is as high as the page count) //
document.getElementById('arrowRight').addEventListener('click', function() {
    document.getElementById('arrowLeft').style.display = "block";
    // adds and removes the necessary classes to div-block-8 class elements to start the page flip animation
    pages[x].classList.remove("box-shadow-animation-reverse");
    pages[x].classList.add("box-shadow-animation");
    pages[x].style.transform = "rotateY(-90deg)";

    // the grid needs to disappear, otherwise the links are still clickable, when page is in animated stage (90degrees) rotated
    pages[x].addEventListener("animationend", function() {
      pages[x-1].style.visibility = "hidden";
      console.log('test');
    });

    x++;y++;z++;
    if (x >= pages.length) {x = 0;}
    if (z >= pages.length + 1) {z = 1;}
    // right arrow gets display none on the last page
    if (z == pages.length) {document.getElementById('arrowRight').style.display = "none";}
    // replaces page number with the actual page
    document.getElementById('pageCount').innerHTML = "";
    document.getElementById('pageCount').innerHTML = "Seite " + z + " / " + pages.length;
});

document.getElementById('arrowLeft').addEventListener('click', function() {
    x--;y++;z--;
    if (x < 0) {x = pages.length - 1;}
    if (z < 1) {z = pages.length;}
    // left arrow gets display none on the first page
    if (z == 1) {document.getElementById('arrowLeft').style.display = "none";}
    // right arrow gets display block when leaving last page
    if (z != pages.length) {document.getElementById('arrowRight').style.display = "block";}
    // replaces page number with the actual page
    document.getElementById('pageCount').innerHTML = "";
    document.getElementById('pageCount').innerHTML = "Seite " + z + " / " + pages.length;
    // the grid needs to *REAPPEAR* when page is rotated back to 0 degrees
    pages[x].style.visibility = "visible";
    // adds and removes the necessary classes to div-block-8 class elements to start the *REVERSE* page flip animation
    pages[x].classList.remove("box-shadow-animation");
    pages[x].classList.add("box-shadow-animation-reverse");
    pages[x].style.transform = "rotateY(0deg)";
});

// End //
