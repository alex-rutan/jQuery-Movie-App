$(document).ready(console.log("Let's get ready to party with jQuery!"));

$('article img').addClass('image-center');

$('article p').last().remove();

function randomNum() {
    return Math.floor((Math.random() * (100 + 1)));
} 

$('h1').css('font-size', randomNum());


let $newLi = $("<li>hello world!</li>");
$('ol').append($newLi);


$('aside').empty();
let $newP = $("<p> I'm deeply sorry for listing</p>");
$('aside').append($newP);


let redValue;
let blueValue;
let greenValue;

$(".form-control").on("change", function() {
    redValue = Number($('input').eq(0).val());
    blueValue = Number($('input').eq(1).val());
    greenValue = Number($('input').eq(2).val());
    $('body').css("background-color", `rgb(${redValue}, ${greenValue}, ${blueValue})`);
});


$("img").on("click", function(evt) {
    evt.target.remove();
});