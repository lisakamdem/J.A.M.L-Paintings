/* Lisa Kamdem
TRU ID: T00643478
October 10, 2021

this is the JavaScript for all the pages
File name: js.js
*/
function test(){
	var navMenu = document.getElementById("nav-menu-container");
  navMenu.style.display = navMenu.offsetParent === null ? "block" : "none";
}

function addForm(){
	document.getElementById("contact-form").submit();
	
}

var fullImgBox = document.getElementById("full-img");
var fullImg = document.getElementById("fullimg");

function openImg(e){
	fullImgBox.style.display = "flex";
	fullImg.src = e;
}

function closeImg(){
	fullImgBox.style.display = "none";
}