const mainImg: any = document.getElementsByClassName('mainImg');
for (let i = 0; i < mainImg.length; i++) {
    getId(`mainImg${[i+1]}`).addEventListener("click", () => {
        getId('shadow_box').style.height = "100%";
        getId('shadow_box').style.width = "100%";
        //getId('box_content').style.display = "block";

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

getId("back").addEventListener("click", () => {
    getId('shadow_box').style.height = "0";
    getId('shadow_box').style.width = "0";
})
