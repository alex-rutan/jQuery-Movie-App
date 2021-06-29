let $title;
let $rating;

$('#target').on("submit", function(evt){
    evt.preventDefault();

    $title = $('#title').eq(0).val();
    $rating = $('#rating').eq(0).val();

    $('body').append($(`<div class='movie'><li>${$title}</li><li>${$rating}</li><button class='remove'>remove</button></div>`))
   
    $('#target')[0].reset();
});

$('body').on("click", "button", function(evt) {
    $(evt.target).closest(".movie").remove();
});