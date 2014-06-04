/**
 * created by orz@mad4a.me with pirated webstorm
 * generate an floating outline according to the `h2' tags
 */

$(function() {
    var dict = {};
    $('h2').each(function (idx) {
        var title = $(this).text();
        var id = 'outline_' + idx;
        dict[title] = id;

/*        $(this).append('<a name="' + id + '"></a>'); */
$(this).html('<a name="' + id + '"></a>'+$(this).html());});
    var outline_ul = $('<ul id="h2outline"></ul>');
    $.each(dict, function (idx, val) {
        outline_ul.append($('<li></li>').html('<span><a href="#' + val + '">' + idx + '</a></span>'));
    });
    $('#nav-h2').append().html(outline_ul);

    /**
     * |<------------------------------w------------------------------>|
     * |       -----------     -----------------     -----------       |
     * |<--l-->|   nav   |<-d->|               |<-d->| outline |<--x-->|
     * |       |<---n--->|     |<------c------>|     |<---a--->|       |
     * |       -----------     |               |     -----------       |
     * |<----------m---------->|               |                       |
     * |                       -----------------                       |
     * -----------------------------------------------------------------
     * (w - c) / 2 = d + a + x
     *   => x = (w - c) / 2 - (a + d), where
     *     w = $(window).width(),
     *     c = $('#container').width(),
     *     a = $('h2outline').width(),
     *
     * m = l + n + d
     *   => d = m - (l + n), where
     *     m = $('#container').position().left,
     *     l = $('#nav').position().left,
     *     n = $('#nav').width()
     */
    // var main = $('#main'),
    //     h2outline = $('#h2outline'),
    //     real_nav  = $('#nav');

    // var m = main.position().left,
    //     l = real_nav.position().left,
    //     n = real_nav.width(),
    //     d = m - (l + n) + 184.8; // #nav has left margin of -184.8px

    // $(window).resize(function () {
    //     var w = $(window).width(),
    //         c = main.width(),
    //         a = h2outline.width();
    //     h2outline.css('right',
    //                   (w - c) / 2 - (a + d));
    // });

    // $(window).resize();

});


