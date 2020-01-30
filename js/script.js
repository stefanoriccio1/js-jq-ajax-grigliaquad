$(document).ready(function () {

  $(document).on('click', '.box', function(){
    if($(this).hasClass('yellow')== false){
      $(this).addClass('yellow');
    }
});
});
