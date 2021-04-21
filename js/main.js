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
        $("#ol_contents").append("<li><a href=" + v.url  + ">" + v.label + "</a></li>") ;
    }
) ;

});