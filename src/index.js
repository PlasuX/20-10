"use strict";
/*
window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
});

window.addEventListener("load", () => {
    // Fully loaded!
});
*/
window.addEventListener("load", function () {
});
var newPos = [];
var oldPos = [];
var mainTop, mainLeft, listmainImgTop, listmainImgLeft;
var getId = function (d) {
    return document.getElementById(d);
};
//
var typewrite = getId("typewrite");
var listmainImg = getId("listmainImg");
//
getId('main').addEventListener('mousedown', function (e) {
    oldPos = [e.clientX, e.clientY];
    mainTop = typewrite.offsetTop;
    mainLeft = typewrite.offsetLeft;
    listmainImgTop = listmainImg.offsetTop;
    listmainImgLeft = listmainImg.offsetLeft;
});
getId('main').addEventListener('touchstart', function (e) {
    oldPos = [e.touches[0].clientX, e.touches[0].clientY];
    mainTop = typewrite.offsetTop;
    mainLeft = typewrite.offsetLeft;
    listmainImgTop = listmainImg.offsetTop;
    listmainImgLeft = listmainImg.offsetLeft;
});
//
function drag(e) {
    newPos = [e.clientX, e.clientY];
    if (oldPos.length != 0) {
        typewrite.style.top = mainTop - (oldPos[1] - newPos[1]) / 4 + "px";
        typewrite.style.left = mainLeft - (oldPos[0] - newPos[0]) / 4 + "px";
        listmainImg.style.top = listmainImgTop - (oldPos[1] - newPos[1]) / 2 + "px";
        listmainImg.style.left = listmainImgLeft - (oldPos[0] - newPos[0]) / 2 + "px";
    }
}
function dragMobile(e) {
    newPos = [e.touches[0].clientX, e.touches[0].clientY];
    if (oldPos.length != 0) {
        typewrite.style.top = mainTop - (oldPos[1] - newPos[1]) / 4 + "px";
        typewrite.style.left = mainLeft - (oldPos[0] - newPos[0]) / 4 + "px";
        listmainImg.style.top = listmainImgTop - (oldPos[1] - newPos[1]) / 2 + "px";
        listmainImg.style.left = listmainImgLeft - (oldPos[0] - newPos[0]) / 2 + "px";
    }
}
//
getId('main').addEventListener('mousemove', drag);
getId('main').addEventListener('touchmove', dragMobile);
//
getId('main').addEventListener('mouseup', function () {
    oldPos = [];
});
getId('main').addEventListener('touchend', function () {
    oldPos = [];
});
//
var mainImg = document.getElementsByClassName('mainImg');
for (var i = 0; i < mainImg.length; i++) {
    getId("mainImg" + [i + 1]).addEventListener("click", function () {
        //console.log(mainImg[i] , " is clicked");
        getId('shadow_box').style.height = "100%";
        getId('shadow_box').style.width = "100%";
    });
}
