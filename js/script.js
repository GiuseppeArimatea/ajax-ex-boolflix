// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto
// 0583692d32d7741ad021d9a29bea3bc4


$(document).ready(function() {
  $('.cerca').click(function(){
    $('.films').html('');
    var titolo = $(".nome_film").val();

   $.ajax ({
     url: 'https://api.themoviedb.org/3/search/movie',
     method: 'GET',
     data: {
       api_key :'0583692d32d7741ad021d9a29bea3bc4' ,
       query : titolo,
       language: 'it'
     },
     success: function(data) {
       var films = data.results;
       if (!films.length == 0) {
         printFilm(films);
       } else {
         alert('film non trovato');
       }
     },
     error: function (request, state, errors) {
       console.log(errors);
     }
   });
 });
});





// ----------------------FUNZIONI
function printFilm(films) {
  var source =$("#film-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < films.length; i++) {
    var questiFilm = films[i];
    console.log(questiFilm);
    var context = {
      title: questiFilm.title,
      original_title: questiFilm.original_title,
      original_language: questiFilm.original_language,
      vote_average: questiFilm.vote_average
    };
    var html = template(context);
    $('.films').append(html);
  }
}
