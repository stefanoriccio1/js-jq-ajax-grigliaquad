$(document).ready(function () {

  // Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
  // Se è <= 5 il quadrato diventa giallo,
  // se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.

  $(document).on('click', '.box', function(){
    if($(this).hasClass('yellow') == false|| $(this).hasClass('green') == false){
      var chiamata = $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          var numero = data.response;
          var box = $('.box');
          console.log(numero);
          if (numero <= 5){
            $(this).addClass('yellow').text(numero);
          }
          else if (numero >= 5) {
            $(this).addClass('green').text(numero);
          }
        },
        error: function (richiesta, stato, errore) {
           alert("E' avvenuto un errore. " + errore);
        }
      });
      console.log(chiamata);
    };
});
});
