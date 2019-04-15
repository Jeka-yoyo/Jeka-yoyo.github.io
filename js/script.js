function setPrice(price) {
    var priceSpan = document.getElementById('price');
    var descriptionSpan = document.getElementById('asideDescription');
    priceSpan.innerHTML = price + ' $';
    descriptionSpan.innerHTML = 'Буду рад<br>ответить';
}

$(function () {                       //run when the DOM is ready
    $("a").click(function () {  //use a class, since your ID gets mangled
        $("main").addClass("scrolling");      //add the class to the clicked element
    });
});

$(document).ready(function () {
    $("section").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 800);
    });
});

jQuery(function ($) {
    $("#phone").mask("+38 (099) 999-99-99");
});


$(document).ready(function () {
    $('.secondSection-types').slick({
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: true
                }
            }]
    })
});

