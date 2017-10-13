var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl: true,
    speed: 300,
    onInit: function (swiper) {
        // 当前 swiper 被激活时
        $('.slide-index .animated').addClass('active')
    },
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 0) {
            // 第一页开始
            $('#nextpage').removeClass('noNext')
            $('.sixth-page .animated').removeClass('active')
            $('.second-page .animated').removeClass('active')
            $('.index-page .animated').addClass('active')
        }
        if (swiper.activeIndex == 1) {
            // 第二页开始
            $('#nextpage').addClass('noNext')
            $('.index-page .animated').removeClass('active')
            $('.third-page .animated').removeClass('active')
            $('.second-page .animated').addClass('active')
        }
        if (swiper.activeIndex == 2) {
            // 第三页开始
            $('.second-page .animated').removeClass('active')
            $('.forth-page .animated').removeClass('active')
            $('.third-page .animated').addClass('active')
        }
        if (swiper.activeIndex == 3) {
            // 第四页开始
            $('#nextpage').removeClass('noKown')
            $('.third-page .animated').removeClass('active')
            $('.fifth-page .animated').removeClass('active')
            $('.forth-page .animated').addClass('active')
        }
        if (swiper.activeIndex == 4) {
            // 第五页开始
            $('.forth-page .animated').removeClass('active')
            $('.sixth-page .animated').removeClass('active')
            $('.fifth-page .animated').addClass('active')
        }
        if (swiper.activeIndex == 5) {
            // 第六页开始
            $('.index-page .animated').removeClass('active')
            $('.fifth-page .animated').removeClass('active')
            $('.sixth-page .animated').addClass('active')
        }
    }
});

var swiperBusiness = new Swiper('.swiper-container-business', {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 80
});

var swiperSucceed = new Swiper('.swiper-container-succeed', {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 80
});

var swiperCooperation = new Swiper('.swiper-container-cooperation', {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 80
});

var swiperUs = new Swiper('.swiper-container-us', {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 80
});
