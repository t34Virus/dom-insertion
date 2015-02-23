$(function() {

    $(" p").click(function() {
      $( this ).text( $( this ).html() );
    });

    $(".appendText").click(function(){
        $("p").append("<b> Appended text</b>.");
    });
  
    $(".appendItem").click(function(){
        $("ol").append("<li><b>Appended item</b></li>");
    });

    $(".appendToText").click(function(){
        $("<b> AppendTo text</b>.").appendTo("p");
    });
  
    $(".appendToItem").click(function(){
        $("<li><b>AppendTo item</b></li>").appendTo("ol");
    });
        
    //PREPENDS
    
    // $(".prependText").click(function(){
    //   $("p").prepend("<b> prepended text</b>.");
    // });
  
    // $(".prependItem").click(function(){
    //   $("ol").prepend("<li><b>prepended item</b></li>");
    // });

    // $(".prependToText").click(function(){
    //   $("<b> prependTo text</b>.").prependTo("p");
    // });
  
    // $(".prependToItem").click(function(){
    //   $("<li><b>prependTo item</b></li>").prependTo("ol");
    // });
  
});

