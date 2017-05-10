$(document).ready(function(){
    $("button").click(function(){
        $(".quote").remove();
        $.ajax({url: "https://got-quotes.herokuapp.com/quotes", success: function(result){
          $("<span class=\"quote\">\"" + result.quote + "\"" + "\n" + "- " + result.character + "</span>").insertBefore("button");
        }});
      });
    });
