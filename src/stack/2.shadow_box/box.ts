const mainImg: any = document.getElementsByClassName('mainImg');
for (let i = 0; i < mainImg.length; i++) {
    getId(`mainImg${[i+1]}`).addEventListener("click", () => {
        getId('shadow_box').style.height = "100%";
        getId('shadow_box').style.width = "100%";
        //getId('box_content').style.display = "block";

        // up next: opacity phan box_content + time out de animation cua shadow_box load xong
        switch (i + 1) { // innerHTML let's go
            case 1:
                console.log("huray");
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
            case 9:

                break;
            case 10:

                break;
            case 11:

                break;
            case 12:

                break;
            case 13:

                break;
            case 14:

                break;
            case 15:

                break;
            case 16:

                break;
            case 17:

                break;
            case 18:

                break;
            case 19:

                break;
            case 20:

                break;
        }
    });
};

getId("back").addEventListener("click", () => {
    getId('shadow_box').style.height = "0";
    getId('shadow_box').style.width = "0";
})
