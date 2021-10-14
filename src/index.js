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
document.addEventListener('mousedown', function (e) {
    oldPos = [e.clientX, e.clientY];
    mainTop = typewrite.offsetTop;
    mainLeft = typewrite.offsetLeft;
    listmainImgTop = listmainImg.offsetTop;
    listmainImgLeft = listmainImg.offsetLeft;
});
document.addEventListener('touchstart', function (e) {
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
        typewrite.style.top = mainTop - (oldPos[1] - newPos[1]) / 2 + "px";
        typewrite.style.left = mainLeft - (oldPos[0] - newPos[0]) / 2 + "px";
        listmainImg.style.top = listmainImgTop - (oldPos[1] - newPos[1]) + "px";
        listmainImg.style.left = listmainImgLeft - (oldPos[0] - newPos[0]) + "px";
    }
}
function dragMobile(e) {
    newPos = [e.touches[0].clientX, e.touches[0].clientY];
    if (oldPos.length != 0) {
        typewrite.style.top = mainTop - (oldPos[1] - newPos[1]) / 2 + "px";
        typewrite.style.left = mainLeft - (oldPos[0] - newPos[0]) / 2 + "px";
        listmainImg.style.top = listmainImgTop - (oldPos[1] - newPos[1]) + "px";
        listmainImg.style.left = listmainImgLeft - (oldPos[0] - newPos[0]) + "px";
    }
}
//
document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', dragMobile);
//
document.addEventListener('mouseup', function () {
    oldPos = [];
});
document.addEventListener('touchend', function () {
    oldPos = [];
});
//
var mainImg = document.getElementsByClassName('mainImg');
var _loop_1 = function (i) {
    getId("mainImg" + [i + 1]).addEventListener("click", function () {
        console.log(getId("mainImg" + [i + 1]) + " is clicked");
    });
};
for (var i = 0; i < mainImg.length; i++) {
    _loop_1(i);
}
