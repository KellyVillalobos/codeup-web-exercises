'use strict';

function changeColor() {
    if ($('h1').css('background-color') === "rgba(0, 0, 0, 0)") {
        $('h1').css('background-color', 'red');
    }else{
        $('h1').css('background-color', 'transparent');
    }

}

$('h1').on('click', changeColor);

function changeParaColor() {
    if ($('p').css('background-color') === "rgba(0, 0, 0, 0)") {
        $('p').css('background-color', 'red');
    } else {
        $('p').css('background-color', 'transparent');
    }
}

$('p').dblclick(changeParaColor);