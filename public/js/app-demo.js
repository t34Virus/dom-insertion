$(function() {

    $(" p").click(function() {
      $( this ).text( $( this ).html() );
    });

    $(".appendText").click(function(){
        $("p").append("<b> Appended text</b>.");
    });
  
    $(".appendItem").click(function(){
        $("ol").append("<li>Appended item</li>");
    });

    $(".appendToText").click(function(){
        $("<b> AppendTo text</b>.").appendTo("p");
    });
  
    $(".appendToItem").click(function(){
        $("<li>AppendTo item</li>").appendTo("ol");
    });
        
    //PREPENDS
    
    // $(".prependText").click(function(){
    //   $("p").prepend("<b> prepended text.</b>.");
    // });
  
    // $(".prependItem").click(function(){
    //   $("ol").prepend("<li>prepended item</li>");
    // });

    // $(".prependToText").click(function(){
    //   $("<b> prependTo text.</b>.").prependTo("p");
    // });
  
    // $(".prependToItem").click(function(){
    //   $("<li>prependTo item</li>").prependTo("ol");
    // });
  
});

