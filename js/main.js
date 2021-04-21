$(function(){

  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

  $.each(
    links ,
    function(i,v) {
        $("#ol_contents").append("<li>" + v + "</li>") ;
    }
) ;

});