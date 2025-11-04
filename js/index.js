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
        
        // 产品轮播初始化
        try {
            var productSwiper = new Swiper(".productSwiper", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                slidesPerView: 4,
                spaceBetween: 20,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                // 只显示4个产品
                slidesPerGroup: 4
            });
        } catch (e) {
            console.log('Product swiper error:', e);
        }
        
        // 合作伙伴部分配置为平铺显示，禁用轮播功能
        try {
            var partnerSwiper = new Swiper(".partnerSwiper", {
                slidesPerView: 'auto',
                loop: false,
                autoplay: false,
                allowTouchMove: false,
                watchSlidesVisibility: true,
                watchSlidesProgress: true
            });
        } catch (e) {
            console.log('Partner swiper error:', e);
        }
        
        // 资质认证部分轮播初始化 - 完全修复居中显示和漂移问题
        try {
            console.log('Initializing qualification swiper...');
            console.log('Next button exists:', document.querySelector('.qualificationSwiper .swiper-button .swiper-button-next'));
            console.log('Prev button exists:', document.querySelector('.qualificationSwiper .swiper-button .swiper-button-prev'));
            
            var qualificationSwiper = new Swiper(".qualificationSwiper", {
                centeredSlides: true,
                slidesPerView: 5, // 显示5个图片
                spaceBetween: 10, // 减小间距
                // 使用自定义按钮，禁用自动生成的导航
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden'
                },
                // 确保不会自动创建额外的按钮
                loop: true,
                allowTouchMove: true,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                preventInteractionOnTransition: true,
                observer: true,
                observeParents: true,
                on: {
                    init: function() {
                        console.log('Qualification swiper initialized');
                        // 确保初始状态下活动幻灯片正确居中
                        setTimeout(() => {
                            this.slideTo(this.activeIndex, 0);
                        }, 100);
                    },
                    slideChange: function() {
                        console.log('Slide changed to:', this.activeIndex);
                    },
                    transitionEnd: function() {
                        console.log('Transition completed');
                    }
                }
            });
            
            console.log('Qualification swiper initialized successfully');
        } catch (e) {
            console.log('Qualification swiper error:', e.message);
        }
        
        // 初始化Feedback轮播
        try {
            var feedbackSwiper = new Swiper(".feedbackSwiper", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                slidesPerView: 1,
                spaceBetween: 20
            });
            console.log('Feedback swiper initialized successfully');
        } catch (e) {
            console.log('Feedback swiper error:', e.message);
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