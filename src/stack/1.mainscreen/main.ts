var newPos: Array < number > = [];
var oldPos: Array < number > = [];
var mainTop: number, mainLeft: number, listmainImgTop: number, listmainImgLeft: number;

const getId: any = (d: string) => {
    return document.getElementById(d);
}
//
const typewrite = getId("typewrite");
const listmainImg = getId("listmainImg");
//
document.addEventListener('mousedown', (e: MouseEvent) => {
    oldPos = [e.clientX, e.clientY];
    mainTop = typewrite.offsetTop;
    mainLeft = typewrite.offsetLeft;
    listmainImgTop = listmainImg.offsetTop;
    listmainImgLeft = listmainImg.offsetLeft;
})

document.addEventListener('touchstart', (e: TouchEvent) => {
    oldPos = [e.touches[0].clientX, e.touches[0].clientY];
    mainTop = typewrite.offsetTop;
    mainLeft = typewrite.offsetLeft;
    listmainImgTop = listmainImg.offsetTop;
    listmainImgLeft = listmainImg.offsetLeft;
})
//
function drag(e: MouseEvent): void {
    newPos = [e.clientX, e.clientY];
    if (oldPos.length != 0) {
        typewrite.style.top = `${mainTop - (oldPos[1] - newPos[1]) / 2}px`;
        typewrite.style.left = `${mainLeft - (oldPos[0] - newPos[0]) / 2}px`;
        listmainImg.style.top = `${listmainImgTop - (oldPos[1] - newPos[1])}px`;
        listmainImg.style.left = `${listmainImgLeft - (oldPos[0] - newPos[0])}px`;
    }
}

function dragMobile(e: TouchEvent): void {
    newPos = [e.touches[0].clientX, e.touches[0].clientY];
    if (oldPos.length != 0) {
        typewrite.style.top = `${mainTop - (oldPos[1] - newPos[1]) / 2}px`;
        typewrite.style.left = `${mainLeft - (oldPos[0] - newPos[0]) / 2}px`;
        listmainImg.style.top = `${listmainImgTop - (oldPos[1] - newPos[1])}px`;
        listmainImg.style.left = `${listmainImgLeft - (oldPos[0] - newPos[0])}px`;
    }
}
//
document.addEventListener('mousemove', drag)
document.addEventListener('touchmove', dragMobile)
//
document.addEventListener('mouseup', () => {
    oldPos = [];
})

document.addEventListener('touchend', () => {
    oldPos = [];
})
//

const mainImg = document.getElementsByClassName('mainImg');
for (let i = 0; i < mainImg.length; i++) {
    getId(`mainImg${[i+1]}`).addEventListener("click", () => {
        console.log(getId(`mainImg${[i+1]}`) + " is clicked")
    })
}