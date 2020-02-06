// jsnack blocco 6
// Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari
// $(document).ready(function() {
//     $(document).on('click', '.invia', function() {
//       var pari = $('.pari');
//       var dispari = $('.dispari');
//         $.ajax({
//           url : "https://flynn.boolean.careers/exercises/api/random/int",
//           method : "GET",
//           success : function (data) {
//             console.log(data);
//             if (data.response % 2 == 0) {
//               $(pari).html(data.response);
//             } else if (data.response % 2 == 1) {
//               $(dispari).html(data.response);
//             }
//           },
//           error: function (richiesta, stato, errori) {
//             alert("E' avvenuto un errore. " + errori);
//           }
//         })
//     });
// });
// Chiedere all’API 10 nomi da inserire in un array di invitati.
// Una volta generata la lista chiedere all’utente di dire il proprio nome. Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso
// negato.
// $(document).ready(function () {
  // var array = [];
  // for (var i = 0; i < 10; i++) {
  //   $.ajax(
  //     {
  //       'url' : 'https://flynn.boolean.careers/exercises/api/random/name',
  //       'method' : 'GET',
  //       'success': function (response) {
  //         console.log(response.response);
  //         array.push(response.response);
  //         if(array.length == 10) {
  //           console.log(array);
  //           var userName = prompt('Inserisci il tuo nome');
  //           if(array.includes(userName)) {
  //             alert('Benvenuto')
  //           } else {
  //             alert('non puoi entrare');
  //           }
  //         }
  //       },
  //       'error' : function (request, state, errors) {
  //         alert('Errore ' + errors);
  //       }
  //     }

  //   );
  // }



  // Creare una griglia 8X8 utilizzando jquery e handlebars.
  // Ogni volta che clicco su un quadrato chiedo all’API un valore boolean random. Se è vero colorerò il quadrato di verde altrimenti di rosso.
  //
  // $(document).ready(function() {
  //     for (var i = 0; i < 64; i++) {
  //       var quadrato = i;
  //       var source = $("#entry-template").html();
  //       var template = Handlebars.compile(source);
  //       var html = template(quadrato);
  //       $(".flex").append(html);
  //     }
  //   });
  //
  // $(document).on('click', '.quadrato', function() {
  //   var colore = $(this);
  //     $.ajax({
  //       url : "https://flynn.boolean.careers/exercises/api/random/boolean",
  //       method : "GET",
  //       success : function (data) {
  //         console.log(data);
  //         $(colore).html(data.response);
  //         if (data.response == true) {
  //           $(colore).addClass("green");
  //         } else if (data.response == false) {
  //           $(colore).addClass("red");
  //         }
  //       },
  //       error: function (richiesta, stato, errori) {
  //         alert("E' avvenuto un errore. " + errori);
  //       }
  //     })
  // });




  // Chiedere all’utente quanti elementi vuole includere nell’array.
  // Generare attraverso l’API (array/integers) un array contenente N numeri compresi tra 1 e 6.
  // Stampare a schermo una immagine che corrisponda alla faccia di un dado con quel numero.
  // https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=2 (edited)




$(document).ready(function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  array = [1,2,3,4,5];
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    var src = 'img/dice-4.png';
    var context = {
      src : src
    }
  }

  $.ajax({
        url : " https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=2",
        method : "GET",
        success : function (data) {
          console.log(data);

        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errori);
        }
      })

});
