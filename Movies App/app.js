let $title;
let $rating;

$('#target').on("submit", function(evt){
    evt.preventDefault();

    $title = $('#title').eq(0).val();
    $rating = $('#rating').eq(0).val();

    let $movieDiv = $('body').append($("<div class='movie'></div>"))
    $movieDiv.append(`<li>${$title}</li><li>${$rating}</li><button class='remove'>remove</button>`)
   
    $('#target').reset();
});

$('div').on("click", "button", function(evt) {
    $(evt.target).prev().remove();
} )