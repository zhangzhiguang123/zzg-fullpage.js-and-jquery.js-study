$(function () {
    $("#fullpage").fullpage({
        navigation: true,
        onLeave: function (index, nextIndex, direction) {
            if (index) {
                $("aside>img").animate({
                    opacity: "0",
                }, 300);
            }
            if (index == 2) {
                $("#two #remove").css("opacity", '1');   //父块元素显示出来，为了遮挡沙发走后本来图上的那个沙发。
                $("#two #remove img").css("opacity", "1").animate({
                    right: "45px",
                    top: "730px",
                    width: "200px"
                }, 1500)
            }
            if (index == 3) {
                $("#two #remove img").css("opacity", "0");
                $("#three .tableimg").css("opacity", "1")
                    .animate({
                        top: "138%",
                        left: "720px",
                    }, 1100).animate({
                        opacity: "0",
                    }, 10)

            }
        },
        afterLoad: function (anchorLink, index) {
            if (index) {
                $("aside>img").delay("3000").animate({
                    opacity: "1",
                }, 300);
            }
            //第二页
            if (index == 2) {
                $("#two .searchimg img:first-child")
                    .css("display", "block")
                    .animate({
                        left: "41%",
                    }, 600)
                    .animate(
                        {
                            left: "43%",
                        }, 400
                    )
                    .animate(
                        {
                            opacity: "0",
                        }, 400
                    );
                $("#two .searchimg img:last-child").delay(1000)
                    .animate({
                        opacity: "1",
                    }, 400)
                    .animate(
                        {
                            width: "150px",
                            height: "30px",
                            left: "57%",
                            top: "238px",
                        }, 1600
                    )
                $("#two .tablebox img:last-child").delay(1400)
                    .animate({
                        width: "410px",
                        height: "220px",
                    }, 1600);
                $("#two .fontimg img:last-child").delay(1400)
                    .animate({
                        opacity: "1",
                    }
                        , 1100);
            }
            // 第三页 
            if (index === 3) {
                $("#three .colortab2,#three .cartbtn2").delay(1000).animate({
                    opacity: "1",
                }, 400)
            }
            //第四页
            if (index === 4) {
                $("#four .cart img:first-child").delay(390).animate({
                    opacity: "1",
                }, 1);
                $("#four .cart").delay(1100)
                    .animate({
                        left: "36%",
                    }, 300)
                    .animate({
                        left: "38%",
                    }, 300)
                    .animate({
                        left: "35%",
                    }, 300)
                    .animate({
                        left: "41%",
                    }, 300)
                    .animate({
                        left: "34%",
                    }, 300)
                    .animate({
                        left: "60%",
                    }, 300)
                    .animate({
                        left: "10%",
                    }, 300)
                    .animate({
                        left: "150%"
                    });
                $("#four .adressform").delay(3500).animate({
                    opacity: "1",
                }, 1000);
                $("#four .fontimg img:last-child").delay(3500).animate({
                    opacity: "1"
                }, 1000);
                $("#four .fontimg img:first-child").delay(3500).animate({
                    opacity: "0",
                }, 1000);
            }
            //第五页
        }
    })

});
// 第一页效果
$(function () {
    towardDown();
    towardDown1();
    function towardDown() {
        $("#one img:nth-child(1)").animate({
            top: "150px",
        }, 1500, "linear", towardUp);
    }
    function towardUp() {
        $("#one img:nth-child(1)").animate({
            top: "80px",
        }, 1500, "linear", towardDown);
    }
    function towardDown1() {
        $("#one img:nth-child(2)").animate({
            bottom: "350px",
        }, 1100, "linear", towardUp1);
    }
    function towardUp1() {
        $("#one img:nth-child(2)").animate({
            bottom: "400px",
        }, 1100, "linear", towardDown1);
    }
});

//侧边栏跳动
$(function () {
    towardDown2();
    function towardDown2() {
        $("aside>img").animate({
            bottom: "70px",
        }, 400, "linear", towardUp2);
    }
    function towardUp2() {
        $("aside>img").animate({
            bottom: "100px",
        }, 400, "linear", towardDown2);
    }
})