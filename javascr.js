$(document).ready(function() {

  // const mytimeout = setInterval(removetheselected, 4000);
  $.wait = function( callback, seconds)
  {
    console.log("Waiting for 2sec");
    return window.setTimeout( callback, seconds * 1000 );
  }


  $(".title div").addClass("selected");
  $.wait( removetheselected, 2);
  // $(".title div").removeClass("selected");

  
  function removetheselected()  
  {
    $(".title div").removeClass("selected");
  }

  $(".title div").mouseover(function(){
    $(this).addClass("selected");
  });

  $(".title div").mouseout(function(){
    $.wait( removetheselected, 4);
  });

  // setInterval(removetheselected, 4000);
});
