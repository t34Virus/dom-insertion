
$(function() {

  function create_link ( link_text ) {

    var new_item = $("<li></li>");
    new_item.addClass("new_item");

    var new_link = $("<a>", {
      href : "#",
      html : link_text

    });

    new_item.append( new_link );
    return new_item;

  }

    function remove_all_new_items ( ) {

    var all_new_items = $(".new_item");

      all_new_items.remove();
    }

$("#nav_interstellar_travel").click(function (event) {
  });


  var angryWW = '<img src="images/angryWW.png">';
  var wwGIF = '<img src="images/wwGIF.gif">';
  var harley = '<img src="images/harley.gif">';
  var phoenix = '<img src="images/phoenix.jpg">';
  var sm = '<img src="images/smflying.gif">';
  var flyingWW = '<img src="images/wwflying.gif">';
  var poison = '<img src="images/poisonivy.png">';
  var killerWW = '<img src="images/wwARROW.gif">';
  var smPerv = '<img src="images/smperv.gif">';
    
    $(".recover_div").click( function () {
      $("button").appendTo("body");
    });    

    $(".remove_div").click( function () {
      $("button:last").remove();
    });

    $(".ww").click( function () {
      $(".append h1").append(angryWW);
    });
    $(".append-ul").click( function () {
      $(".append-ul").after(poison);
    });


    $(".flyingWW").click( function () {
      $(sm).appendTo(".appendTo h2");
    });

    $(".quinn2").click( function () {
      $(".prepend h1").prepend(poison);
    });

    $(".appendTo.h2.img").click( function () {
      $(sm).appendTo(".flyingWW");
    });

    $(".quinn3").click( function () {
      $(poison).prependTo(".prependTo h2");
    });


    // $(".quinn2").click( function () {
    //   $("h1").html();
    // });



    $(".quinn4").click( function () {
      $(".prependTo h1").prependTo(poison);
    });

    $(".quinn5").click(function() {
      $( this ).text( $( this ).html() );
    });


    $(".quinn4").click(function() {
      var ptext = $(".textQ p").text( );
      $(".textQ h1").text(ptext);
    });

    // $(".scouts button, h1, h2").click(function() {
    //   $( this ).text( $( this ).html() );
    // });
//wrapup


    $(".moon").click( function () {
      $(".moon").append('<img class="attack" src="images/moonAtk.gif">');
    });
    $(".mars").click( function () {
      $(".mars").append('<img class="attack" src="images/marsAtk.gif">');
    });


    $(".mercury").click( function () {
      $(".mercury").append('<img class="attack" src="images/mercAtk.gif">');
    });
    $(".cute-nept").click( function () {
      $(".h1_img").append('<img class="attack" src="images/neptAtk.gif">');
    });


    $(".jupiter").click( function () {
      $(".jupiter").append('<img class="attack" src="images/juptAtk.gif">');
    });

    $(".venus").click( function () {
      $(".venus").append('<img class="attack" src="images/venusGame.gif">');
    });

    $(".saturn").click( function () {
      $(".saturn").append('<img class="attack" src="images/satAtk.gif">');
    });    

    $(".uranus").click( function () {
      $(".uranus").append('<img class="attack" src="images/ursAtk.gif">');
    });    

    $(".pluto").click( function () {
      $(".pluto").append('<img class="attack" src="images/plutAtk.gif">');
    });
});

$(".everything div, header, .demo button").click(function () {
  var random_bg_color = Math.floor( Math.random()*0xFFFFFF );
  var random_r = Math.floor( Math.random()*256 );
  var random_g = Math.floor( Math.random()*256 );
  var random_b = Math.floor( Math.random()*256 );
  $(this).css({
    "background" : "rgb("+ random_r +","+ random_g +","+ random_b +")"
  });
 });