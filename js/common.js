$(document).ready(function() {
    // 产品下拉菜单功能
    $('.downbtn').hover(function(){
      $(this).find('.downmenu').stop().slideDown();
      $(this).siblings().find('.downmenu').hide();
    },function(){
      $(this).find('.downmenu').stop().slideUp();
    });

    // 头部搜索框功能
    $('.search_btn').click(function() {
        $(this).siblings('.search_box').addClass('show');
        $(this).siblings('.search_windows').addClass('show');
    });
    $('.close_btn').click(function() {
        $(this).parents('.search_box').removeClass('show');
        $(this).parents('.search_windows').removeClass('show');
    });
    $('.close_layer').click(function() {
      $(this).parents('.search_windows').removeClass('show');
    });

    // 手机端菜单功能
    $('.mobile_navbtn').click(function() {
        $(this).toggleClass('clicked');
        $('.mobile_menu').slideToggle();
    });
    $('.mobile_menu i').click(function() {
        $(this).toggleClass('rotate');
        $(this).siblings('ul').stop().slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().siblings().find('i').removeClass('rotate');
    });
    
    // 返回顶部功能
    $('.backtop').click(function() {
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });
    
    // 监听滚动显示/隐藏返回顶部按钮
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.backtop').show();
        } else {
            $('.backtop').hide();
        }
    });
});

// 询价功能
get_a_quote = function(product_id) {
    if (product_id) {
        $('#hs_product_id').val(product_id);
    } else {
        $('#hs_product_id').val('');
    }
    $('.hs-modal-form').show();
    $('.hs-modal-form-mask').show();
    $(".hs-modal-form-body input").focus(function() {
        $(".hs-modal-form-body :focus").siblings(".invalid-tips").children("div").hide();
    });
    $(".hs-modal-form-body textarea").focus(function() {
        $(".hs-modal-form-body :focus").siblings(".invalid-tips").children("div").hide();
    });
};

// 关闭询价模态框
closeModal = function() {
    $('.hs-modal-form').hide();
    $('.hs-modal-form-mask').hide();
};

// 表单验证函数
function formValidate() {
    var name = $(".hs-modal-form-body #hs_name").val();
    var email = $(".hs-modal-form-body #hs_email").val();
    var phone = $(".hs-modal-form-body #hs_phone").val();
    var message = $(".hs-modal-form-body #hs_message").val();
    var valid = true;
    
    // 验证姓名
    if (!name) {
        $(".hs-modal-form-body #hs_name").siblings(".invalid-tips").children("div").eq(0).show();
        valid = false;
    }
    
    // 验证邮箱
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        $(".hs-modal-form-body #hs_email").siblings(".invalid-tips").children("div").eq(0).show();
        valid = false;
    }
    
    // 验证电话
    if (!phone) {
        $(".hs-modal-form-body #hs_phone").siblings(".invalid-tips").children("div").eq(0).show();
        valid = false;
    }
    
    return valid;
}