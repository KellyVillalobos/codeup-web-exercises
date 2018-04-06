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
    $('p').css('font-size', '18px');
}

$('p').dblclick(changeParaColor);

function changeListColor(){
    if ($('li').css('color') === "rgb(0, 0, 0)") {
        $('li').css('color', 'red');
    } else {
        $('li').css('color', "rgb(0, 0, 0)");
    }
console.log(($('li').css('color')));
}

$('li').hover(changeListColor);
