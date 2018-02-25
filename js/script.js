$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});

$('#nav-icon3').on('click',function(){
    if($('.menu-ct').is(":visible")){
        $('.menu-ct').hide();
    }
    else $('.menu-ct').show();
});
wow = new WOW(
    {
        mobile: false       // default
    }
);
wow.init();