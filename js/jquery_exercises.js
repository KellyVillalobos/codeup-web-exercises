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
    if($("p").css('font-size') === '16px'){
    $('p').css('font-size', '18px');
    }else{
        $('p').css('font-size', '16px');
    }
}
console.log($('p').css("font-size"));
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
