const mainImg: any = document.getElementsByClassName('mainImg');
const wish_content =  [
    `<div class="author">From @vtd with love <3</div>
    <p>"Chúc các bạn nữ luôn xinh đẹp, vui vẻ luôn đón nhận nhiều niềm vui trong cuộc sống"</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Không thể đếm xuể hết công lao, vai trò to lớn của các "phái đẹp" đối với các bạn nam tụi mình. Nhờ có các cậu, mỗi ngày đến trường đối với bọn tớ đều là những ngày đẹp nhất trong cuộc đời. 22 người (tính cả cô) là 22 vẻ đẹp và nét cá tính riêng biệt,mỗi người đều có sức hấp dẫn,tài năng,có những phẩm chất cao quý mà bọn con trai chúng tớ đáng ngưỡng mộ,học tập và noi theo.Các cậu và cô chính là chỗ dựa,là động lực để chúng tớ có niềm cảm hứng học tập,sống tốt hơn và hoàn thiện bản thân mình mỗi ngày... Nhân ngày Phụ nữ Việt Nam 20/10,tớ chúc các cậu và cô giáo ngày càng xinh đẹp,nữ tính,học giỏi hơn, và đạt được những ước mơ mà mình mong muốn và đặc biệt là vẫn luôn luôn giữ được sự lạc quan,hồn nhiên,yêu đời vốn có của mình.Tớ mong các cậu vẫn luôn sát cánh,đồng hành,giúp đỡ bọn tớ trong thời gian khó khăn sắp tới. Girls are the best friends!”</p>`,

    `<div class="author">From @ngmt with love <3</div>
    <p>“Chúc các gái lớp A2-k13 một ngày 20-10 tuyet voi và chúc các b sẽ luôn tươi tắn , xinh xắn , mạnh mẽ , tự tin và cá tính mọi lúc mọi nơi và mọi thời điểm.”</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn nữ luôn luôn xinh đẹp, học giỏi và trúng vào trường đại học mong muốn nhé <3”</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn nữ luôn luôn vui vẻ, kiếm đc người chồng như ý và thành công trong công việc sau này nhé <3.</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Vậy là chúng ta đã trở thành những học sinh lớp 12, và đây cũng là năm cuối cùng chúng ta được học chung với nhau. Chúng mình đã cùng nhau đoàn kết vượt qua mọi khó khăn. Tuy trong lớp đôi khi có những xích mích và bất đồng ý kiến nhưng sau cùng cả hai phái nữ và phái nam trong lớp mình đều có thể cùng giải quyết được. Đó điều là những kỉ niệm tuy bé nhỏ nhưng cũng thật đáng trân trọng. Điều này phải chăng chính là minh chứng cho những tình cảm học trò mà chúng ta đã có được hay sao. Cả bạn nữ à, ngày hôm nay là ngày phụ nữ VN, mình chúc các bạn nữ đều vui vẻ và tận hưởng ngày hôm này bằng những điều tuyệt vời nhất và hãy quan tâm đến những bạn nam chúng mình nhìu hơn nx nhé. :) “</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn nữ ăn no chóng lớn ,học hành chăm chỉ ,trẻ mãi không già”</p>
    `,

    `<div class="author">From @ddd with love <3</div>
    <p>“Tớ chúc các bạn nữ có một 20/10 hạnh phúc , ngày càng xinh xắn , đạt đước nhiều thành công trong học tập, luôn nghĩ cho bản thân mình trước khi nghĩ đến cái khác , phải luôn yêu bản thân gia đình bạn bè nhé đặc biệt là phải đỗ đại học đấy 🥰”</p>
    `,

    `<div class="author">From @phn with love <3</div>
    <p>“Mình chúc các bạn nữ lớp 12A2 học giỏi, xinh hơn, ai cũng đỗ được nguyện vọng 1 “</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Hí, nhân ngày Phụ nữ Việt Nam, tớ chúc chị em luôn mạnh khoẻ, may mắn, hạnh phúc, làm và đạt được những điều mình mong muốn. Trong bất kì điều kiện và hoàn cảnh nào, các cậu luôn là những niềm tự hào của tụi con trai chúng tớ. 20/10 vui vẻ nhaaaa ^_-</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Mừng ngày 20/10, mình chúc các bạn nữ cũng như cô giáo chủ nhiệm của lớp 12A2 ngày càng xinh xắn, học giỏi, hạnh phúc và đạt được điều mình mong muốn.”</p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn đạt được mọi điều mong muốn trong tương lai <br>
    Chúc các bạn mãi xinh học giỏi”
    </p>
    `,

    `<div class="author">From @mn with love <3</div>
    <p>“chúc sống lâu trăm tuổi”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn nữ lớp 12A2 và cô Thùy có một ngày 20-10 vui vẻ, đặc biệt là các bạn nữ ngày càng cố gắng và nỗ lực để đạt được mục tiêu của mình khi rời mái trường cấp 3.”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Cuộc đời này có rất nhiều niềm vui, các cậu hãy luôn sống tích cực và mỉm cười kể cả khi gặp khó khăn nhé.”
    </p>
    `,

    `<div class="author">From @zika with love <3</div>
    <p>“Chúc các bạn nữ đỗ đại học, ngày càng xinh đẹp,luôn luôn vui tươi và thành công trong cuộc sống.Chúc các bạn có ngày 20/10 vui vẻ và ý nghĩa ,hạnh phúc”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn nữ nghe lời ông bà bố mẹ ,tuân thủ thông điệp 5k của bộ y tế”
    </p>
    `,

    `<div class="author">From @ntct with love <3</div>
    <p>“Nhân ngày 20/10 mình chúc các bạn nữ hay ăn chóng béo, tiền nhiều như kẹo, tình chặt như keo, dẻo dai như mèo, mịn màng trắng trẻo, sức khỏe như heo. Đùa tí gì căng-.- chúc các bạn nữ luôn tươi cười như hít phải khí N2O, bay bổng như H2, thăng hoa như I2, bản lĩnh như N2, và hiền hòa như H2O và trên hết 100% đỗ đại học yêu thích nhá”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Đã là năm cuối được học chung với các bạn, chúc các bạn luôn may mắn và hạnh phúc trong những bước tiến tiếp theo của cuộc đời mình”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các cậu có một ngày Phụ nữ Việt Nam thật là trọn vẹn, luôn hạnh phúc bên gia đình, những người thân yêu và chúng tớ nhé”
    </p>
    `,

    `<div class="author">From @andanh with love <3</div>
    <p>“Chúc các bạn luôn may mắn, luôn vui vẻ và hạnh phúc, có nhiều niềm vui trong cuộc đời”
    </p>
    `,
]
const wish_special = [
    `<div class="author">To @Tâm with love <3</div>
    <p>“Chúc em xinh hơn, đáng yêu hơn và thủ khoa đại học e nhé.”</p>
    `,
    `<div class="author">To @Phương Thảo with love <3</div>
    <p>“Mình chúc bạn đỗ được ĐH Luật,luôn thành công trong con đường bạn chọn và luôn luôn hạnh phúc”</p>
    `,
    `<div class="author">To @Hằng & @Thanh Trúc with love <3</div>
    <p>“Gửi đến hai cô bạn của tôi hãy luôn nở nụ cười trên môi khó khăn ko đc lùi bước phải vươn lên, cấm không được suy nghĩ linh tinh, luôn bên nhau nhé iu các bồ🔥”</p>
    `,
    `<div class="author">To @Trang with love <3</div>
    <p>“Ngày 20/10 cho dù anh không được ở gần em, anh vẫn muốn ôm em thật lâu. Đừng buồn khi không có anh bên cạnh, hãy rực rỡ như những đóa hướng dương, hi vọng anh sẽ sớm được gặp em Anh yêu em <3”</p>
    `,
    `<div class="author">To @Ánh Dương with love <3</div>
    <p>“Chúc bạn đỗ đại học ,luôn vui vẻ thành công với điều mình đã có và sẽ có trong tương lai và luôn nở nụ cười trong cuộc sống.”</p>
    `,
]
for (let i = 0; i < mainImg.length; i++) {
    getId(`mainImg${[i+1]}`).addEventListener("click", () => {
        getId('shadow_box').style.height = "100%";
        getId('shadow_box').style.width = "100%";
        getId('shadow_box').style.pointerEvents = "auto";
        getId('shadow_box').style.opacity = "1";
        //getId('box_content').style.display = "block";
        getId('box_wish1').innerHTML = wish_content[Math.floor(Math.random() * wish_content.length)];
        // up next: opacity phan box_content + time out de animation cua shadow_box load xong
        switch (i + 1) { // innerHTML let's go
            case 1:
                getId("box_hero_largeText").innerHTML = "Mai Anh";
                getId("box_hero_smallText").innerHTML = '"Bob Ross của 12A2 <3"';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/1. Hoàng Mai Anh2.jpg') no-repeat center center";
                // anh nen + loi chuc => xong !!
                break;
            case 2:
                getId("box_hero_largeText").innerHTML = "Thu Thảo";
                getId("box_hero_smallText").innerHTML = 'Một con người tốt bụng, chăm chỉ và ko kém phần cute :3';
                getId("box_wish_special").innerHTML = ''; //Thay bằng ảnh của thu thảo
                getId("shadow_box").style.background = "url('./stack/1.mainscreen/img/38. nguyễn thu thảo.jpg') no-repeat center center";
                break;
            case 3:
                getId("box_hero_largeText").innerHTML = "Vân Anh";
                getId("box_hero_smallText").innerHTML = 'Cute x3000';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/5. nguyễn vân anh2.jpg') no-repeat center center";
                break;
            case 4:
                getId("box_hero_largeText").innerHTML = "Thuỳ Dương";
                getId("box_hero_smallText").innerHTML = 'Giọng hát của lớp là đây';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/8. đào thị thuỳ dương2.jpg') no-repeat center center";
                break;
            case 5:
                getId("box_hero_largeText").innerHTML = "Ánh Dương";
                getId("box_hero_smallText").innerHTML = 'Huỷ diệt tất cả đề toán';
                getId("box_wish_special").innerHTML = wish_special[4];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/9. trịnh ánh dương2.jpg') no-repeat center center";
                break;
            case 6:
                getId("box_hero_largeText").innerHTML = "Thanh Hằng";
                getId("box_hero_smallText").innerHTML = 'Vui vẻ, năng động, yêu đời.';
                getId("box_wish_special").innerHTML = wish_special[2];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/12. chu thanh hằng2.jpg') no-repeat center center";
                break;
            case 7:
                getId("box_hero_largeText").innerHTML = "Thuý Hiền";
                getId("box_hero_smallText").innerHTML = 'La Perfection';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/13. love2.jpg') no-repeat center center";
                break;
            case 8:
                getId("box_hero_largeText").innerHTML = "Quỳnh Hoa";
                getId("box_hero_smallText").innerHTML = 'Đệ quy, đệ quy, đệ qu...';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/14. hồ quỳnh hoa2.jpg') no-repeat center center";
                break;
            case 9:
                getId("box_hero_largeText").innerHTML = "Thảo Linh";
                getId("box_hero_smallText").innerHTML = 'Boss lv. 999';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/25. đặng thảo linh2.jpg') no-repeat center center";
                break;
            case 10:
                getId("box_hero_largeText").innerHTML = "Khánh Linh";
                getId("box_hero_smallText").innerHTML = 'Bạch tuyết';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/26. nguyễn khánh linh2.jpg') no-repeat center center";
                break;
            case 11:
                getId("box_hero_largeText").innerHTML = "Trang Linh";
                getId("box_hero_smallText").innerHTML = 'Thời trang tiêu biểu Gen Z.';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/27. trần kim trang linh2.jpg') no-repeat center center";
                break;
            case 12:
                getId("box_hero_largeText").innerHTML = "TL. Khánh Linh";
                getId("box_hero_smallText").innerHTML = 'Cái gì cơ, game thủ nữ không tồn tại á ???';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/28. trần lương khánh linh.jpg') no-repeat center center";
                break;
            case 13:
                getId("box_hero_largeText").innerHTML = "Mai Linh";
                getId("box_hero_smallText").innerHTML = 'Pro dancer. 100%';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/29. trần ngọc mai linh1.jpg') no-repeat center center";
                break;
            case 14:
                getId("box_hero_largeText").innerHTML = "Ánh Minh";
                getId("box_hero_smallText").innerHTML = 'Học giỏi, thân thiện, ngủ...à không không, nhầm';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/31. hoàng ánh minh2.jpg') no-repeat center center";
                break;
            case 15:
                getId("box_hero_largeText").innerHTML = "Minh Nguyệt";
                getId("box_hero_smallText").innerHTML = '2 thứ làm nên nhà vô địch: 360 thế võ và manga';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/34. đào minh nguyệt2.jpg') no-repeat center center";
                break;
            case 16:
                getId("box_hero_largeText").innerHTML = "Thanh Tâm";
                getId("box_hero_smallText").innerHTML = 'Huệ chất lan tâm';
                getId("box_wish_special").innerHTML = wish_special[0];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/37. nguyễn thanh tâm2.jpg') no-repeat center center";
                break;
            case 17:
                getId("box_hero_largeText").innerHTML = "Phương Thảo";
                getId("box_hero_smallText").innerHTML = 'Người hạnh phúc nhất lớp.';
                getId("box_wish_special").innerHTML = wish_special[1];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/39. phạm phương thảo2.jpg') no-repeat center center";
                break;
            case 18:
                getId("box_hero_largeText").innerHTML = "Thuỳ Trang";
                getId("box_hero_smallText").innerHTML = '"Top 10 nhân vật anime thông thái nhất"';
                getId("box_wish_special").innerHTML = wish_special[3];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/43. phạm thuỳ trang2.jpg') no-repeat center center";
                break;
            case 19:
                getId("box_hero_largeText").innerHTML = "Thanh Trúc";
                getId("box_hero_smallText").innerHTML = 'красивая девушка';
                getId("box_wish_special").innerHTML = wish_special[2];
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/44. nguyễn thanh trúc2.jpg') no-repeat center center";
                break;
            case 20:
                getId("box_hero_largeText").innerHTML = "Thuý Trúc";
                getId("box_hero_smallText").innerHTML = 'Thông minh. Xinh xắn. Đáng yêu.';
                getId("box_wish_special").innerHTML = '';
                getId("shadow_box").style.background = "url('./stack/2.shadow_box/img2/45. trần thuý trúc2.jpg') no-repeat center center";
                break;
        }
    });
};

getId("back").addEventListener("click", () => {
    getId('shadow_box').style.height = "70%";
    getId('shadow_box').style.width = "70%";
    getId('shadow_box').style.opacity = "0";
    getId('shadow_box').style.pointerEvents = "none";
})
