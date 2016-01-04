jQuery(function ($) {
    "use strict";
    $('#fullpage').fullpage({
        css3: true,
        loopHorizontal: false,
        controlArrows: false,
        scrollingSpeed: 800
    });
    /* ----------------------------------------------------------- */
    /*  #Parallax
     /* ----------------------------------------------------------- */
    $.parallaxify({
        positionProperty: 'transform',
        responsive: true,
        motionType: 'natural',
        mouseMotionType: 'gaussian',
        motionAngleX: 45,
        motionAngleY: 45,
        alphaFilter: 0.01,
        adjustBasePosition: true,
        alphaPosition: 0.01
    });
    /* ----------------------------------------------------------- */
    /*  #imgLiquid
     /* ----------------------------------------------------------- */
    $('.imgLiquid').imgLiquid({
        fill: false,
        horizontalAlign: "center",
        verticalAlign: "center"
    });
});