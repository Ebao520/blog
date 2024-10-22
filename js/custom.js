$(document).ready(function (e) {
    $('.copyright').html('©2024 <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f92672;"></i> E宝办公');
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
        '<span style="color: black;">' + daysold + '</span> <span style="color: black;">天</span> ' +
        '<span style="color: black;">' + hrsold + '</span> <span style="color: black;">时</span> ' +
        '<span style="color: black;">' + minsold + '</span> <span style="color: black;">分</span> ' +
        '<span style="color: black;">' + seconds + '</span> <span style="color: black;">秒</span>';

}
// source/js/custom.js
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["一款佛系的Excel插件", "轻松管理您的数据", "提升工作效率"],
        typeSpeed: 80,  // Typing speed in milliseconds
        backSpeed: 40,  // Backspacing speed in milliseconds
        loop: true      // Loop the typing animation
    };

    var typed = new Typed("#typed", options);
});