$(document).ready(function () {
    document.getElementsByClassName('onlyfans')[0].addEventListener('animationend', function () {
        let owl = $(".owl-carousel");
        owl.owlCarousel({
            responsiveClass: true,
            mouseDrag: true,
            touchDrag: true,
            dots: false,
            smartSpeed: 400,
            stagePadding: 15,
            responsiveBaseElement: $('body'),
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1,
                    margin: 10
                },
                1200: {
                    items: 3,
                    slideBy: 3,
                    margin: 25
                }
            },
            onDrag: dragStart,
            onDragged: dragEnd
        });

        //set nav-data on load

        let windowWidth = $('body').innerWidth();
        let position = 1;
        let items;

        if (windowWidth >= 1200)
            items = 3;
        else
            items = 1;

        let review_number = Math.ceil($('.review-shell').length / items);
        let nav_data = $('.nav-data');
        nav_data.html(position + ' из ' + review_number);
        console.log('Кол-во айтемов на странице: ' + items + '\nКол-во страниц: ' + review_number);

        let startIndex;

        function dragStart(event) {
            startIndex = event.item.index;
        }

        function dragEnd(event) {
            let lastIndex = event.item.index;
            console.log(startIndex + ' ; ' + lastIndex);
            if (lastIndex > startIndex) {
                position++;
                owl.trigger('to.owl.carousel', [startIndex + items])
            } else if (lastIndex < startIndex) {
                position--;
                owl.trigger('to.owl.carousel', [startIndex - items])
            }
            nav_data.html(position + ' из ' + review_number);
        }

        // Go to the next item with arrow

        function click_next() {
            console.log('click next');
            if (position < review_number) {
                owl.trigger('next.owl.carousel');
                position++;
            } else {
                owl.trigger('to.owl.carousel', [0]);
                position = 1;
            }
            nav_data.html(position + ' из ' + review_number);
        }

        function click_prev() {
            console.log('click prev');
            if (position > 1) {
                owl.trigger('prev.owl.carousel');
                position--;
            } else {
                owl.trigger('to.owl.carousel', [review_number + 1]);
                position = review_number;
            }
            nav_data.html(position + ' из ' + review_number);
        }

        let prev_btn = document.querySelector('.prev');
        let next_btn = document.querySelector('.next');

        prev_btn.addEventListener('click', click_prev, false);
        next_btn.addEventListener('click', click_next, false);
    });
});