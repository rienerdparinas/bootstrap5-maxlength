(function ($) {

    $.fn.maxlength = function () {
        this.each(function(){
            let clone = $(this).clone().attr('data-role', 'maxlength');
            let maxlength = $(this).attr('maxlength');
            let length = $(this).val().length;
            let replacement = $('<div></div>').append(clone).append($('<div></div>').addClass('d-flex justify-content-end small').append($('<span></span>').addClass('length').html(length)).append('/').append(maxlength));
            $(this).replaceWith(replacement);
        });
    };

})(jQuery);

$(() => {

    $(document).on('keyup', '[data-role="maxlength"]', function () {
        let length = $(this).val().length;
        $(this).parent().find('.length').html(length);
    });

});
