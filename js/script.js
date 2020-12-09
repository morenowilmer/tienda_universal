jQuery('document').ready(function($) {

    var menu = $('.menu-nav');
    var verMenu = $('#ver-menu');
    var ocultarMenu = $('#ocultar-menu');
    var contenido = $('.main');

    $('.menu-icon').click(function(elemento) {
        if (elemento.target.id == 'ocultar-menu') {
            menu.addClass('hide-element');
            contenido.attr('style', 'padding-top: 10rem');
            ocultarMenu.addClass('hide-element');
            verMenu.removeClass('hide-element');
        } else {
            menu.removeClass('hide-element');
            contenido.attr('style', 'padding-top: 23rem');
            ocultarMenu.removeClass('hide-element');
            verMenu.addClass('hide-element');
        }
    })
});