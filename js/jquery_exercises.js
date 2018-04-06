'use strict';

function changeColor() {
    if ($('h1').css('background-color') === "rgba(0, 0, 0, 0)") {
        $('h1').css('background-color', 'red');
    }else{
        $('h1').css('background-color', 'transparent');
    }
console.log($('h1').css('background-color'));
}

$('h1').on('click', changeColor);