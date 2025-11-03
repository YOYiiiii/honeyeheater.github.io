$(document).ready(function() {
    console.log('JavaScript initialized');
    
    // 简化的轮播图初始化
    if (window.Swiper) {
        try {
            var bannerSwiper = new Swiper(".bannerSwiper", {
                loop: true,
                autoplay: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        } catch (e) {
            console.log('Banner swiper error:', e);
        }
    }
    
    // 简化的计数器
    try {
        if ($('.counter').length && typeof $.fn.countUp === 'function') {
            $('.counter').countUp();
        }
    } catch (e) {
        console.log('Counter error:', e);
    }
});