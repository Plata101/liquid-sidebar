/* Copyright (C) 2018 Mediakanzlei - All Rights Reserved
 * You may not use, distribute and modify this code unless
 * you purchased the MK-liquid_sidebar license.
 *
 * You should have received a copy of the MK-liquid_ads license with
 * this file. If not, please write to: info@mediakanzlei.ch
 * or visit: www.mediakanzlei.ch

 Contributors
 --------------
 This is the official list of the liquid side project contributors.

 * Mediakanzlei
   - Marc Friedmann
   - Daniel Burger
*/

// places the container element in the middle of the screen

var container = document.getElementsByClassName('container')[0];
container.setAttribute("style", "margin: 0px; position: relative; left: 50%; top: 50%; transform: translate(-50%, -50%)");

// Puts all div with classname .div-block-8 on absolute, so that the pages
// are on top of each other

var absoluteDiv = document.getElementsByClassName('div-block-8');
for (a = 0; a < absoluteDiv.length; a++) {
  absoluteDiv[a].setAttribute("style", "margin: 0px; position: absolute");
}
// End //

// Adds to all images with classname .image-4 a max-height and max-width of 90vh/90vw
// so that they become liquid. The attribute sizes has to removed, otherwise the Pic
// size will still be limited

var heightPic = document.getElementsByClassName('image-4');
for (b = 0; b < heightPic.length; b++) {
  heightPic[b].removeAttribute("sizes");
  heightPic[b].setAttribute("style", "margin: 0px; width: auto; height: auto; max-height: 85vh; max-width: 85vw");
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
  var divBlockAdjust = document.getElementsByClassName('div-block-8');

  for (c = 0; c < contAdjust.length; c++) {
    contAdjust[c].style.height = heightGrid + "px";
    contAdjust[c].style.width = widthGrid + "px";
    }
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
  var arrow = document.createElement("div");
  arrow.setAttribute("id", "arrowRight");
  arrow.setAttribute("class", "arrows");
  arrow.classList.add("background-arrow-right");
  document.body.appendChild(arrow);
}
createRightArrow();

function createLeftArrow() {
  var arrow = document.createElement("div");
  arrow.setAttribute("id", "arrowLeft");
  arrow.setAttribute("class", "arrows");
  arrow.classList.add("background-arrow-left");
  document.body.appendChild(arrow);
}
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
  container.appendChild(page);
}
createPageCounter();

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

    // the linkblocks needs to disappear, otherwise the links are still clickable, when page is in animated stage (90degrees) rotated
    document.getElementsByClassName('div-block-9')[x].style.display = "none";
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
    // the links needs to *REAPPEAR* when page is rotated back to 0 degrees
    document.getElementsByClassName('div-block-9')[x].style.display = "block";
    // adds and removes the necessary classes to div-block-8 class elements to start the *REVERSE* page flip animation
    pages[x].classList.remove("box-shadow-animation");
    pages[x].classList.add("box-shadow-animation-reverse");
});
// End //
