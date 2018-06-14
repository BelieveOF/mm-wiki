/**
 * main.js
 * Copyright (c) 2018 phachon@163.com
 */

function mainRightHeight() {
    var mainHeight = $(window).height() - $('header').height() - 55;
    // $('#main-right').height(mainHeight);
    $('#mainFrame').height(mainHeight);
}

function initMainLine() {
    var mainContent = document.getElementById("main-content");
    var mainLeft = document.getElementById("main-left");
    var mainRight = document.getElementById("main-right");
    var mainLine = document.getElementById("main-line");
    mainLine.onmousedown = function (e) {
        var disX = (e || event).clientX;
        mainLine.left = mainLine.offsetLeft;
        document.onmousemove = function (e) {
            var iT = mainLine.left + ((e || event).clientX - disX);
            var e = e || window.event;
            var tarnameb = e.target || e.srcElement;
            var maxT = mainContent.clientWidth - mainLine.offsetWidth;
            mainLine.style.margin = 0;
            iT < 0 && (iT = 0);
            iT > maxT && (iT = maxT);
            mainLine.style.left = mainLeft.style.width = iT + "px";
            mainRight.style.width = mainContent.clientWidth - iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            mainLine.releaseCapture && mainLine.releaseCapture()
        };
        mainLine.setCapture && mainLine.setCapture();
        return false
    };
}

function updateMainLeft(left) {
    var mainContent = document.getElementById("main-content");
    var mainLeft = document.getElementById("main-left");
    var mainRight = document.getElementById("main-right");
    var mainLine = document.getElementById("main-line");

    mainLine.left = mainLine.offsetLeft;
    var iT = left;
    var e = e || window.event, tarnameb = e.target || e.srcElement;
    var maxT = mainContent.clientWidth - mainLine.offsetWidth;
    mainLine.style.margin = 0;
    iT < 0 && (iT = 0);
    iT > maxT && (iT = maxT);
    mainLine.style.left = mainLeft.style.width = iT + "px";
    mainRight.style.width = mainContent.clientWidth - iT + "px";
}

// webui-popover
function initPopover() {
    $("[data-toggle='web-popover']").webuiPopover({animation: 'pop',autoHide:3000});
    $('[data-toggle="tooltip"]').tooltip();
}

$(window).resize(function () {
    mainRightHeight();
});

$(window).load(function() {
    initMainLine();
    initPopover();
    mainRightHeight();
    $('#side-menu').metisMenu();
});