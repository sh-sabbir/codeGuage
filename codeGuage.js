$.fn.codeGuage = function (options) {
    var settings = $.extend({
        part_1_size: 50,
        part_2_size: 20,
        part_3_size: 10,
        part_4_size: 20,

        part_1_color: '#FD5E53',
        part_2_color: '#B0EACD',
        part_3_color: '#21BF72',
        part_4_color: '#B0EACD',

        marker_position: 50,
        marker_color: '#101010',
    }, options);

    $(this).css({
        "--item1-size": settings.part_1_size,
        "--item2-size": settings.part_2_size,
        "--item3-size": settings.part_3_size,
        "--item4-size": settings.part_4_size,

        "--item1-color": settings.part_1_color,
        "--item2-color": settings.part_2_color,
        "--item3-color": settings.part_3_color,
        "--item4-color": settings.part_4_color,

        "--marker-color": settings.marker_color,
    });

    var markup = '<div class="codeian-gauge"><ul class="codeian-chart-skills"><li></li><li></li><li></li><li></li></ul><div class="needle"><div class="needle-head"></div></div><div class="labels"><div class="value-label"></div></div></div>';
    $(this).html(markup);

    setTimeout(() => {
        $(this).css({
            "--gauge-value": settings.marker_position,
            "--gauge-display-value": settings.marker_position,
        });
    }, 50);

    return this;
};

$.fn.setPosition = function (value) {

    setTimeout(() => {
        $(this).css({
            "--gauge-value": value,
            "--gauge-display-value": value,
        });
    }, 51);

    return this;
};
