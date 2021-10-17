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
window.addEventListener('resize', function () {
    typewrite.style.top = "50%";
    typewrite.style.left = "50%";
    listmainImg.style.top = "50%";
    listmainImg.style.left = "50%";
});
var mainImg = document.getElementsByClassName('mainImg');
var wish_content = [
    "<div class=\"author\">From @vtd with love <3</div>\n    <p>\"Ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF lu\u00F4n xinh \u0111\u1EB9p, vui v\u1EBB lu\u00F4n \u0111\u00F3n nh\u1EADn nhi\u1EC1u ni\u1EC1m vui trong cu\u1ED9c s\u1ED1ng\"</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CKh\u00F4ng th\u1EC3 \u0111\u1EBFm xu\u1EC3 h\u1EBFt c\u00F4ng lao, vai tr\u00F2 to l\u1EDBn c\u1EE7a c\u00E1c \"ph\u00E1i \u0111\u1EB9p\" \u0111\u1ED1i v\u1EDBi c\u00E1c b\u1EA1n nam t\u1EE5i m\u00ECnh. Nh\u1EDD c\u00F3 c\u00E1c c\u1EADu, m\u1ED7i ng\u00E0y \u0111\u1EBFn tr\u01B0\u1EDDng \u0111\u1ED1i v\u1EDBi b\u1ECDn t\u1EDB \u0111\u1EC1u l\u00E0 nh\u1EEFng ng\u00E0y \u0111\u1EB9p nh\u1EA5t trong cu\u1ED9c \u0111\u1EDDi. 22 ng\u01B0\u1EDDi (t\u00EDnh c\u1EA3 c\u00F4) l\u00E0 22 v\u1EBB \u0111\u1EB9p v\u00E0 n\u00E9t c\u00E1 t\u00EDnh ri\u00EAng bi\u1EC7t,m\u1ED7i ng\u01B0\u1EDDi \u0111\u1EC1u c\u00F3 s\u1EE9c h\u1EA5p d\u1EABn,t\u00E0i n\u0103ng,c\u00F3 nh\u1EEFng ph\u1EA9m ch\u1EA5t cao qu\u00FD m\u00E0 b\u1ECDn con trai ch\u00FAng t\u1EDB \u0111\u00E1ng ng\u01B0\u1EE1ng m\u1ED9,h\u1ECDc t\u1EADp v\u00E0 noi theo.C\u00E1c c\u1EADu v\u00E0 c\u00F4 ch\u00EDnh l\u00E0 ch\u1ED7 d\u1EF1a,l\u00E0 \u0111\u1ED9ng l\u1EF1c \u0111\u1EC3 ch\u00FAng t\u1EDB c\u00F3 ni\u1EC1m c\u1EA3m h\u1EE9ng h\u1ECDc t\u1EADp,s\u1ED1ng t\u1ED1t h\u01A1n v\u00E0 ho\u00E0n thi\u1EC7n b\u1EA3n th\u00E2n m\u00ECnh m\u1ED7i ng\u00E0y... Nh\u00E2n ng\u00E0y Ph\u1EE5 n\u1EEF Vi\u1EC7t Nam 20/10,t\u1EDB ch\u00FAc c\u00E1c c\u1EADu v\u00E0 c\u00F4 gi\u00E1o ng\u00E0y c\u00E0ng xinh \u0111\u1EB9p,n\u1EEF t\u00EDnh,h\u1ECDc gi\u1ECFi h\u01A1n, v\u00E0 \u0111\u1EA1t \u0111\u01B0\u1EE3c nh\u1EEFng \u01B0\u1EDBc m\u01A1 m\u00E0 m\u00ECnh mong mu\u1ED1n v\u00E0 \u0111\u1EB7c bi\u1EC7t l\u00E0 v\u1EABn lu\u00F4n lu\u00F4n gi\u1EEF \u0111\u01B0\u1EE3c s\u1EF1 l\u1EA1c quan,h\u1ED3n nhi\u00EAn,y\u00EAu \u0111\u1EDDi v\u1ED1n c\u00F3 c\u1EE7a m\u00ECnh.T\u1EDB mong c\u00E1c c\u1EADu v\u1EABn lu\u00F4n s\u00E1t c\u00E1nh,\u0111\u1ED3ng h\u00E0nh,gi\u00FAp \u0111\u1EE1 b\u1ECDn t\u1EDB trong th\u1EDDi gian kh\u00F3 kh\u0103n s\u1EAFp t\u1EDBi. Girls are the best friends!\u201D</p>",
    "<div class=\"author\">From @ngmt with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c g\u00E1i l\u1EDBp A2-k13 m\u1ED9t ng\u00E0y 20-10 tuyet voi v\u00E0 ch\u00FAc c\u00E1c b s\u1EBD lu\u00F4n t\u01B0\u01A1i t\u1EAFn , xinh x\u1EAFn , m\u1EA1nh m\u1EBD , t\u1EF1 tin v\u00E0 c\u00E1 t\u00EDnh m\u1ECDi l\u00FAc m\u1ECDi n\u01A1i v\u00E0 m\u1ECDi th\u1EDDi \u0111i\u1EC3m.\u201D</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF lu\u00F4n lu\u00F4n xinh \u0111\u1EB9p, h\u1ECDc gi\u1ECFi v\u00E0 tr\u00FAng v\u00E0o tr\u01B0\u1EDDng \u0111\u1EA1i h\u1ECDc mong mu\u1ED1n nh\u00E9 <3\u201D</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF lu\u00F4n lu\u00F4n vui v\u1EBB, ki\u1EBFm \u0111c ng\u01B0\u1EDDi ch\u1ED3ng nh\u01B0 \u00FD v\u00E0 th\u00E0nh c\u00F4ng trong c\u00F4ng vi\u1EC7c sau n\u00E0y nh\u00E9 <3.</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CV\u1EADy l\u00E0 ch\u00FAng ta \u0111\u00E3 tr\u1EDF th\u00E0nh nh\u1EEFng h\u1ECDc sinh l\u1EDBp 12, v\u00E0 \u0111\u00E2y c\u0169ng l\u00E0 n\u0103m cu\u1ED1i c\u00F9ng ch\u00FAng ta \u0111\u01B0\u1EE3c h\u1ECDc chung v\u1EDBi nhau. Ch\u00FAng m\u00ECnh \u0111\u00E3 c\u00F9ng nhau \u0111o\u00E0n k\u1EBFt v\u01B0\u1EE3t qua m\u1ECDi kh\u00F3 kh\u0103n. Tuy trong l\u1EDBp \u0111\u00F4i khi c\u00F3 nh\u1EEFng x\u00EDch m\u00EDch v\u00E0 b\u1EA5t \u0111\u1ED3ng \u00FD ki\u1EBFn nh\u01B0ng sau c\u00F9ng c\u1EA3 hai ph\u00E1i n\u1EEF v\u00E0 ph\u00E1i nam trong l\u1EDBp m\u00ECnh \u0111\u1EC1u c\u00F3 th\u1EC3 c\u00F9ng gi\u1EA3i quy\u1EBFt \u0111\u01B0\u1EE3c. \u0110\u00F3 \u0111i\u1EC1u l\u00E0 nh\u1EEFng k\u1EC9 ni\u1EC7m tuy b\u00E9 nh\u1ECF nh\u01B0ng c\u0169ng th\u1EADt \u0111\u00E1ng tr\u00E2n tr\u1ECDng. \u0110i\u1EC1u n\u00E0y ph\u1EA3i ch\u0103ng ch\u00EDnh l\u00E0 minh ch\u1EE9ng cho nh\u1EEFng t\u00ECnh c\u1EA3m h\u1ECDc tr\u00F2 m\u00E0 ch\u00FAng ta \u0111\u00E3 c\u00F3 \u0111\u01B0\u1EE3c hay sao. C\u1EA3 b\u1EA1n n\u1EEF \u00E0, ng\u00E0y h\u00F4m nay l\u00E0 ng\u00E0y ph\u1EE5 n\u1EEF VN, m\u00ECnh ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF \u0111\u1EC1u vui v\u1EBB v\u00E0 t\u1EADn h\u01B0\u1EDFng ng\u00E0y h\u00F4m n\u00E0y b\u1EB1ng nh\u1EEFng \u0111i\u1EC1u tuy\u1EC7t v\u1EDDi nh\u1EA5t v\u00E0 h\u00E3y quan t\u00E2m \u0111\u1EBFn nh\u1EEFng b\u1EA1n nam ch\u00FAng m\u00ECnh nh\u00ECu h\u01A1n nx nh\u00E9. :) \u201C</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF \u0103n no ch\u00F3ng l\u1EDBn ,h\u1ECDc h\u00E0nh ch\u0103m ch\u1EC9 ,tr\u1EBB m\u00E3i kh\u00F4ng gi\u00E0\u201D</p>\n    ",
    "<div class=\"author\">From @ddd with love <3</div>\n    <p>\u201CT\u1EDB ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF c\u00F3 m\u1ED9t 20/10 h\u1EA1nh ph\u00FAc , ng\u00E0y c\u00E0ng xinh x\u1EAFn , \u0111\u1EA1t \u0111\u01B0\u1EDBc nhi\u1EC1u th\u00E0nh c\u00F4ng trong h\u1ECDc t\u1EADp, lu\u00F4n ngh\u0129 cho b\u1EA3n th\u00E2n m\u00ECnh tr\u01B0\u1EDBc khi ngh\u0129 \u0111\u1EBFn c\u00E1i kh\u00E1c , ph\u1EA3i lu\u00F4n y\u00EAu b\u1EA3n th\u00E2n gia \u0111\u00ECnh b\u1EA1n b\u00E8 nh\u00E9 \u0111\u1EB7c bi\u1EC7t l\u00E0 ph\u1EA3i \u0111\u1ED7 \u0111\u1EA1i h\u1ECDc \u0111\u1EA5y \uD83E\uDD70\u201D</p>\n    ",
    "<div class=\"author\">From @phn with love <3</div>\n    <p>\u201CM\u00ECnh ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF l\u1EDBp 12A2 h\u1ECDc gi\u1ECFi, xinh h\u01A1n, ai c\u0169ng \u0111\u1ED7 \u0111\u01B0\u1EE3c nguy\u1EC7n v\u1ECDng 1 \u201C</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CH\u00ED, nh\u00E2n ng\u00E0y Ph\u1EE5 n\u1EEF Vi\u1EC7t Nam, t\u1EDB ch\u00FAc ch\u1ECB em lu\u00F4n m\u1EA1nh kho\u1EBB, may m\u1EAFn, h\u1EA1nh ph\u00FAc, l\u00E0m v\u00E0 \u0111\u1EA1t \u0111\u01B0\u1EE3c nh\u1EEFng \u0111i\u1EC1u m\u00ECnh mong mu\u1ED1n. Trong b\u1EA5t k\u00EC \u0111i\u1EC1u ki\u1EC7n v\u00E0 ho\u00E0n c\u1EA3nh n\u00E0o, c\u00E1c c\u1EADu lu\u00F4n l\u00E0 nh\u1EEFng ni\u1EC1m t\u1EF1 h\u00E0o c\u1EE7a t\u1EE5i con trai ch\u00FAng t\u1EDB. 20/10 vui v\u1EBB nhaaaa ^_-</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CM\u1EEBng ng\u00E0y 20/10, m\u00ECnh ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF c\u0169ng nh\u01B0 c\u00F4 gi\u00E1o ch\u1EE7 nhi\u1EC7m c\u1EE7a l\u1EDBp 12A2 ng\u00E0y c\u00E0ng xinh x\u1EAFn, h\u1ECDc gi\u1ECFi, h\u1EA1nh ph\u00FAc v\u00E0 \u0111\u1EA1t \u0111\u01B0\u1EE3c \u0111i\u1EC1u m\u00ECnh mong mu\u1ED1n.\u201D</p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n \u0111\u1EA1t \u0111\u01B0\u1EE3c m\u1ECDi \u0111i\u1EC1u mong mu\u1ED1n trong t\u01B0\u01A1ng lai <br>\n    Ch\u00FAc c\u00E1c b\u1EA1n m\u00E3i xinh h\u1ECDc gi\u1ECFi\u201D\n    </p>\n    ",
    "<div class=\"author\">From @mn with love <3</div>\n    <p>\u201Cch\u00FAc s\u1ED1ng l\u00E2u tr\u0103m tu\u1ED5i\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF l\u1EDBp 12A2 v\u00E0 c\u00F4 Th\u00F9y c\u00F3 m\u1ED9t ng\u00E0y 20-10 vui v\u1EBB, \u0111\u1EB7c bi\u1EC7t l\u00E0 c\u00E1c b\u1EA1n n\u1EEF ng\u00E0y c\u00E0ng c\u1ED1 g\u1EAFng v\u00E0 n\u1ED7 l\u1EF1c \u0111\u1EC3 \u0111\u1EA1t \u0111\u01B0\u1EE3c m\u1EE5c ti\u00EAu c\u1EE7a m\u00ECnh khi r\u1EDDi m\u00E1i tr\u01B0\u1EDDng c\u1EA5p 3.\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCu\u1ED9c \u0111\u1EDDi n\u00E0y c\u00F3 r\u1EA5t nhi\u1EC1u ni\u1EC1m vui, c\u00E1c c\u1EADu h\u00E3y lu\u00F4n s\u1ED1ng t\u00EDch c\u1EF1c v\u00E0 m\u1EC9m c\u01B0\u1EDDi k\u1EC3 c\u1EA3 khi g\u1EB7p kh\u00F3 kh\u0103n nh\u00E9.\u201D\n    </p>\n    ",
    "<div class=\"author\">From @zika with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF \u0111\u1ED7 \u0111\u1EA1i h\u1ECDc, ng\u00E0y c\u00E0ng xinh \u0111\u1EB9p,lu\u00F4n lu\u00F4n vui t\u01B0\u01A1i v\u00E0 th\u00E0nh c\u00F4ng trong cu\u1ED9c s\u1ED1ng.Ch\u00FAc c\u00E1c b\u1EA1n c\u00F3 ng\u00E0y 20/10 vui v\u1EBB v\u00E0 \u00FD ngh\u0129a ,h\u1EA1nh ph\u00FAc\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n n\u1EEF nghe l\u1EDDi \u00F4ng b\u00E0 b\u1ED1 m\u1EB9 ,tu\u00E2n th\u1EE7 th\u00F4ng \u0111i\u1EC7p 5k c\u1EE7a b\u1ED9 y t\u1EBF\u201D\n    </p>\n    ",
    "<div class=\"author\">From @ntct with love <3</div>\n    <p>\u201CNh\u00E2n ng\u00E0y 20/10 m\u00ECnh ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF hay \u0103n ch\u00F3ng b\u00E9o, ti\u1EC1n nhi\u1EC1u nh\u01B0 k\u1EB9o, t\u00ECnh ch\u1EB7t nh\u01B0 keo, d\u1EBBo dai nh\u01B0 m\u00E8o, m\u1ECBn m\u00E0ng tr\u1EAFng tr\u1EBBo, s\u1EE9c kh\u1ECFe nh\u01B0 heo. \u0110\u00F9a t\u00ED g\u00EC c\u0103ng-.- ch\u00FAc c\u00E1c b\u1EA1n n\u1EEF lu\u00F4n t\u01B0\u01A1i c\u01B0\u1EDDi nh\u01B0 h\u00EDt ph\u1EA3i kh\u00ED N2O, bay b\u1ED5ng nh\u01B0 H2, th\u0103ng hoa nh\u01B0 I2, b\u1EA3n l\u0129nh nh\u01B0 N2, v\u00E0 hi\u1EC1n h\u00F2a nh\u01B0 H2O v\u00E0 tr\u00EAn h\u1EBFt 100% \u0111\u1ED7 \u0111\u1EA1i h\u1ECDc y\u00EAu th\u00EDch nh\u00E1\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201C\u0110\u00E3 l\u00E0 n\u0103m cu\u1ED1i \u0111\u01B0\u1EE3c h\u1ECDc chung v\u1EDBi c\u00E1c b\u1EA1n, ch\u00FAc c\u00E1c b\u1EA1n lu\u00F4n may m\u1EAFn v\u00E0 h\u1EA1nh ph\u00FAc trong nh\u1EEFng b\u01B0\u1EDBc ti\u1EBFn ti\u1EBFp theo c\u1EE7a cu\u1ED9c \u0111\u1EDDi m\u00ECnh\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c c\u1EADu c\u00F3 m\u1ED9t ng\u00E0y Ph\u1EE5 n\u1EEF Vi\u1EC7t Nam th\u1EADt l\u00E0 tr\u1ECDn v\u1EB9n, lu\u00F4n h\u1EA1nh ph\u00FAc b\u00EAn gia \u0111\u00ECnh, nh\u1EEFng ng\u01B0\u1EDDi th\u00E2n y\u00EAu v\u00E0 ch\u00FAng t\u1EDB nh\u00E9\u201D\n    </p>\n    ",
    "<div class=\"author\">From @andanh with love <3</div>\n    <p>\u201CCh\u00FAc c\u00E1c b\u1EA1n lu\u00F4n may m\u1EAFn, lu\u00F4n vui v\u1EBB v\u00E0 h\u1EA1nh ph\u00FAc, c\u00F3 nhi\u1EC1u ni\u1EC1m vui trong cu\u1ED9c \u0111\u1EDDi\u201D\n    </p>\n    ",
];
var _loop_1 = function (i) {
    getId("mainImg" + [i + 1]).addEventListener("click", function () {
        getId('shadow_box').style.height = "100%";
        getId('shadow_box').style.width = "100%";
        getId('shadow_box').style.pointerEvents = "auto";
        getId('shadow_box').style.opacity = "1";
        //getId('box_content').style.display = "block";
        getId('box_wish').innerHTML = wish_content[Math.floor(Math.random() * wish_content.length)];
        // up next: opacity phan box_content + time out de animation cua shadow_box load xong
        switch (i + 1) { // innerHTML let's go
            case 1:
                getId("box_hero_largeText").innerHTML = "Mai Anh";
                getId("box_hero_smallText").innerHTML = '"Bob Ross của 12A2 <3"';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/1. Hoàng Mai Anh2.jpg') no-repeat center center";
                // anh nen + loi chuc => xong !!
                break;
            case 2:
                getId("box_hero_largeText").innerHTML = "Tú Anh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/4. Nguyễn Tú Anh2.jpg') no-repeat center center";
                break;
            case 3:
                getId("box_hero_largeText").innerHTML = "Vân Anh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/5. nguyễn vân anh2.jpg') no-repeat center center";
                break;
            case 4:
                getId("box_hero_largeText").innerHTML = "Thuỳ Dương";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/8. đào thị thuỳ dương2.jpg') no-repeat center center";
                break;
            case 5:
                getId("box_hero_largeText").innerHTML = "Ánh dương";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/9. trịnh ánh dương2.jpg') no-repeat center center";
                break;
            case 6:
                getId("box_hero_largeText").innerHTML = "Thanh Hằng";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/12. chu thanh hằng2.jpg') no-repeat center center";
                break;
            case 7:
                getId("box_hero_largeText").innerHTML = "Thuý Hiền";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/13. love2.jpg') no-repeat center center";
                break;
            case 8:
                getId("box_hero_largeText").innerHTML = "Quỳnh Hoa";
                getId("box_hero_smallText").innerHTML = 'Đệ quy, đệ quy, đệ qu...';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/14. hồ quỳnh hoa2.jpg') no-repeat center center";
                break;
            case 9:
                getId("box_hero_largeText").innerHTML = "Thảo Linh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/25. đặng thảo linh2.jpg') no-repeat center center";
                break;
            case 10:
                getId("box_hero_largeText").innerHTML = "Khánh Linh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/26. nguyễn khánh linh2.jpg') no-repeat center center";
                break;
            case 11:
                getId("box_hero_largeText").innerHTML = "Trang Linh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/27. trần kim trang linh2.jpg') no-repeat center center";
                break;
            case 12:
                getId("box_hero_largeText").innerHTML = "TL. Khánh Linh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/28. trần lương khánh linh.jpg') no-repeat center center";
                break;
            case 13:
                getId("box_hero_largeText").innerHTML = "Mai Linh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/29. trần ngọc mai linh1.jpg') no-repeat center center";
                break;
            case 14:
                getId("box_hero_largeText").innerHTML = "Ánh Minh";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/31. hoàng ánh minh2.jpg') no-repeat center center";
                break;
            case 15:
                getId("box_hero_largeText").innerHTML = "Minh Nguyệt";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/34. đào minh nguyệt2.jpg') no-repeat center center";
                break;
            case 16:
                getId("box_hero_largeText").innerHTML = "Thanh Tâm";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/37. nguyễn thanh tâm2.jpg') no-repeat center center";
                break;
            case 17:
                getId("box_hero_largeText").innerHTML = "Phương Thảo";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/39. phạm phương thảo2.jpg') no-repeat center center";
                break;
            case 18:
                getId("box_hero_largeText").innerHTML = "Thuỳ Trang";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/43. phạm thuỳ trang2.jpg') no-repeat center center";
                break;
            case 19:
                getId("box_hero_largeText").innerHTML = "Thanh Trúc";
                getId("box_hero_smallText").innerHTML = 'красивая девушка';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/44. nguyễn thanh trúc2.jpg') no-repeat center center";
                break;
            case 20:
                getId("box_hero_largeText").innerHTML = "Thuý Trúc";
                getId("box_hero_smallText").innerHTML = 'Sample text';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/45. trần thuý trúc2.jpg') no-repeat center center";
                break;
        }
    });
};
for (var i = 0; i < mainImg.length; i++) {
    _loop_1(i);
}
;
getId("back").addEventListener("click", function () {
    getId('shadow_box').style.height = "70%";
    getId('shadow_box').style.width = "70%";
    getId('shadow_box').style.opacity = "0";
    getId('shadow_box').style.pointerEvents = "none";
});
getId("menu").addEventListener("click", function () {
    getId("menu_big").style.height = "100%";
});
getId("menu_button_icon").addEventListener("click", function () {
    getId("menu_big").style.height = "0%";
});
// Menu cacs thu -> chinh sua -> ok donr
