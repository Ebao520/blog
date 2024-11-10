$(document).ready(function (e) {
    $('.copyright').html('Copyright 2024 <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f92672;"></i> 版权所有：E宝办公助手');
});

$(document).ready(function (e) {
    show_date_time();
});

// 本站运行时间
function show_date_time() {
    $('.framework-info').html('本站已运行：<span id="span_dt_dt" style="color: #fff;"></span>');
    window.setTimeout("show_date_time()", 1000);
    var BirthDay = new Date("10/20/2024 0:0:0");
    var today = new Date();
    var timeold = (today.getTime() - BirthDay.getTime());
    var sectimeold = timeold / 1000;
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);
    // 设置所有时间单位和文字为黑色
    document.getElementById('span_dt_dt').innerHTML =
        '<span style="color: #808080;">' + daysold + '</span> <span style="color: #808080;">天</span> ' +
        '<span style="color: #808080;">' + hrsold + '</span> <span style="color: #808080;">时</span> ' +
        '<span style="color: #808080;">' + minsold + '</span> <span style="color: #808080;">分</span> ' +
        '<span style="color: #808080;">' + seconds + '</span> <span style="color: #808080;">秒</span>';

}
// source/js/custom.js
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["一款佛系的Excel工具箱软件", "轻松处理您的数据", "提升工作效率", "简单、易用、高效的办公助手", "在数据的海洋中航行", "让数字在表格中舞蹈飞扬", "从枯燥的行列中解放", "让繁琐的工作变得轻松", "在每一个单元格中创造奇迹。"],
        typeSpeed: 80,  // Typing speed in milliseconds
        backSpeed: 40,  // Backspacing speed in milliseconds
        loop: true      // Loop the typing animation
    };

    var typed = new Typed("#typed", options);
});
window.tctipConfig = {
    //最上面的文字
    headText: "喜欢就打赏一包辣条吧 ^_^",
    //侧边栏文本
    siderText: "公告 & 打赏",
    //侧边栏文本高度调整
    siderTextTop: "-72px",
    //侧边栏背景颜色
    siderBgcolor: "#323d45",
    //整个侧边栏的高度设置
    siderTop: "118px",
    //底部文字
    buttomText: "了解更多",
    //底部文字链接
    buttomLink: "http://www.eplug.vip/",
    //显示列表
    list: {
        notice: {
            name: "公告栏", className: "myR-on",
            icon: "/img/icon/tip.png",
            text: '欢迎来到E宝办公。最新版：2.7。 2024-10-20'
        },
        alipay: {
            name: "支付宝", desc: "用支付宝给“E宝”打赏",
            icon: "/img/icon/alipay.png",
            qrimg: "/img/qr/alipayqr.png"
        },
        weixin: {
            name: "微信", desc: "用微信给“E宝”打赏",
            icon: "/img/icon/weixin.png",
            qrimg: "/img/qr/weixin.png"
        }
    }
};
