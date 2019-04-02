// раскрытие информации в карточках
$(function () {
    var button = $('.card__button-important')
        info = $('.card__info')
    if (info.css('display') !== 'flex') {
        info.hide()
        button.click(function(){
            var $info = $(this).parent().parent().next().children('.card__info')
            $info.fadeToggle('slow')
            $info.children('.card__info_close').click(function () {
                $info.fadeOut('slow')
            })
            return false
        })
    }
})
// анимация
AOS.init({
    duration: 1200
});