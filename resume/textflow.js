////////////////////////////////////////////////
// Code credit to: http://jsfiddle.net/7E3AN/ //
////////////////////////////////////////////////

$(window).load(function(){
$('details summary').each(function(){
    $(this).nextAll().wrapAll('<div id="wrap"></div>');
});
$('details').attr('open','').find('#wrap').css('display','none');
$('details.open div#wrap').css('display','block');
$('details summary').click(function(e) {
    e.preventDefault();
    $(this).siblings('div#wrap').slideToggle(function(){
        $(this).parent('details').toggleClass('open');
    });
});
});