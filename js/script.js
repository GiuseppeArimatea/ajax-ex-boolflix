// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto
// 0583692d32d7741ad021d9a29bea3bc4


$(document).ready(function() {

  $('.cerca').click(function(){ // click su cerca

    resetta_lista();

    var titolo = $(".nome_film").val(); // prende il valore titolo dall input

    cercaFilm(titolo);
    cercaSerieTv(titolo);
  });

});



// ----------------------FUNZIONI

function cercaFilm(string) { // chiamata all api per i film
  $.ajax (
    {
    url: 'https://api.themoviedb.org/3/search/movie',
    method: 'GET',
    data: {
      api_key :'0583692d32d7741ad021d9a29bea3bc4' ,
      query : string,
      language: 'it'
    },
    success: function(data) {
      var dati = data.results;
      if (!dati.length == 0) {
        print(dati);
      } else {
        alert('film non trovato');
      }
    },
    error: function (request, state, errors) {
      alert("E' avvenuto un errore. " + errori);
      }
    }
  );
  reset();
}

function cercaSerieTv(string){ // chiamata all api per le serie tv
  $.ajax(
    {
    url: "https://api.themoviedb.org/3/search/tv",
    method: "GET",
    data: {
          api_key: "0583692d32d7741ad021d9a29bea3bc4",
          query: string,
          language: "it"
        },
    success: function (data) {
      console.log(data);
      var dati = data.results;
      if(!dati.length == 0){
      print(dati);
    }else{
      alert('Serie tv non trovata');
    }
      },
    error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errori);
      }
    }
  );
  reset();
};

function printStelle(votiFilm){ // aggiungiamo le stelle
  var somma= '';
  for (var i = 0; i < 5; i++) {
    if ( i < votiFilm) {
      var risultato = '<i class="fas fa-star yellow"></i>';
    } else {
      var risultato = '<i class="far fa-star yellow"></i>';
    }
    somma += risultato;
  }
  return somma;
}

// funzioni di reset
function reset(){
  $('.nome_film').val('');
};
function resetta_lista(){
  $('.films').html('');
}


function print(dati) {
  var source =$("#film-template").html();
  var template = Handlebars.compile(source);

  for (var t = 0; t < dati.length; t++) {
    var film = dati[t];
    var votazione = film.vote_average / 2; //Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5
    var voti = Math.ceil(votazione);
    console.log(film.original_name);
    var flag = film.original_language;
    if (flag != "it" && flag != "en" && flag != "fr") {
      flag = "";
    }
    var context = {
      title: film.title,
      original_title: film.original_title,
      original_language: film.original_language,
      vote_average: film.vote_average,
      flag: flag,
      vote_average: voti,
      stars: printStelle(voti)
    };
    var html = template(context);
    $('.films').append(html);
  }
}
