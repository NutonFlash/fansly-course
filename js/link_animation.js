$(document).ready(function (){
    function linkHoverOver() {
        let line = $(this)[0].childNodes[3];
        console.log(line);
        $(line).css({
            'opacity': '1',
            'transition': 'transform .65s ease',
            'transform':'translateX(0)'
        });
    }

    function linkHoverOut() {
        let line = $($(this)[0].childNodes[3]);
        line.css({
            'transform':'translateX(100%)',
            'transition': 'transform .35s ease'
        });
        line.addClass('hover-over');
    }

    let links_div = $('#nav-links > div');
    links_div.hover(linkHoverOver, linkHoverOut);
     document.querySelectorAll('.link-line').forEach(function (elem) {
         elem.addEventListener("transitionend", function() {
                 if (elem.classList.contains('hover-over')) {
                     elem.classList.remove('hover-over');
                     $(elem).css({
                         'opacity':'0',
                         'transform':'translateX(-100%)'
                     });
                 }
             }
         );
     }
    );


});