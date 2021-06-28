$(document).ready(console.log("Let's get ready to party with jQuery!"));

$('article img').addClass('image-center');

$('article p').last().remove();

function randomNum() {
    return Math.floor((Math.random() * (100 + 1)));
} 

$('h1').css('font-size', randomNum());