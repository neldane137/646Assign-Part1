$(document).ready(function () {
    $('section h2, aside h2').css({
        'border': 'solid black 1px', //#3
        'color': '#CC1C0D', //#4
        'padding': '3px 0px 3px 20px', //#5
        'border-radius': '0px 5px', //#6
        'background-color': '#DFE3E6' //#7
	});
    $('li a').addClass('navigation'); //#8
    $('.navigation').css({
        'border': 'solid #929CA4 1px', //#9
        'color': '#CC1C0D', //#10
        'padding': '3 0 3 20px', //#11
        'background-color': '#DFE3E6' //#12
    });
    $('section p').removeClass('vprospect vconvert vretain'); //#13
    $('<p>Chevy Dealers Association</p>').insertAfter('aside p:nth-of-type(2)');  //#14
    $('aside p:nth-of-type(1)').replaceWith(function () {
        return $('<q />', {html: $(this).html()});
    }); //#15
    $('aside q').css({
        'font-style': 'italic'
    }); //#16
    $('section b').replaceWith(function () {
        return $('<b><a href="ttp://www.vectacorp.com">Vecta Corporation</a></b>', {html: $(this).html()});
    }); //#17
});