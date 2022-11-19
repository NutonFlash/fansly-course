$(document).ready(function () {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        smartSpeed: 800,
        margin: 20,
        stagePadding: 15,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            768: {
                items: 2,
                slideBy: 2
            },
            1200: {
                margin: 25,
                items: 3,
                slideBy: 3
            }
        }
    });
    //set nav-data on load
    let position = 1;
    let items = 3;
    let review_number = Math.ceil($('.review-shell').length / items);
    $('.nav-data').html(position + ' из ' + review_number);
    // Go to the item by dragging
    owl.on("dragged.owl.carousel", function (event) {
        console.log(event.relatedTarget['_drag']['direction']);
        if (event.relatedTarget['_drag']['direction'] === 'right' && position > 1)
            $('.prev').click();
        if (event.relatedTarget['_drag']['direction'] === 'left' && position < review_number)
            $('.next').click();
    });
    // Go to the next item with arrow
    $('.next').click(function () {
        if (position < review_number) {
            owl.trigger('next.owl.carousel');
            position++;
        } else {
            owl.trigger('to.owl.carousel', [0]);
            position = 1;
        }
        $('.nav-data').html(position + ' из ' + review_number);
    })
    // Go to the previous item with arrow
    $('.prev').click(function () {
        if (position > 1) {
            owl.trigger('prev.owl.carousel');
            position--;
        } else {
            owl.trigger('to.owl.carousel', [review_number + 1]);
            position = review_number;
        }
        $('.nav-data').html(position + ' из ' + review_number);
    })
});