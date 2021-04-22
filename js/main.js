$(function(){

  const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
      label: "Week 2",
      url: "week2/index.html"
    },
    {
      label: "Week 3",
      url: "week3/index.html"
    }
  ]

  $.each(
    links ,
    function(i,v) {
        $("#div_sidenav").append("<a href=" + v.url  + ">" + v.label + "</a>");
    }
) ;

});