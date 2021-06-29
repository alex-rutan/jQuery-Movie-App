let $title;
let $rating;

$('#target').on("submit", function(evt){
    evt.preventDefault();

    $title = $('#title').eq(0).val();
    $rating = $('#rating').eq(0).val();

    $('body').append($("<div class='movie'></div>"))
    $('.movie').append(`<li>${$title}</li><li>${$rating}</li><button class='remove'>remove</button>`)
    $('#target').reset();
});

$('.movie').on("click", "button", function(evt) {
    $(evt.target).prev().remove();
} )