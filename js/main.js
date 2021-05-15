$(function(){

  const links = [
    {
      label: "Week 1",
      url: "week1/"
    },
    {
      label: "Week 2",
      url: "week2/"
    },
    {
      label: "Week 3",
      url: "week3/"
    },
    {
      label: "Week 4",
      url: "week4/"
    }

  ]

  $.each(
    links ,
    function(i,v) {
        $("#div_sidenav").append("<a href=" + v.url  + ">" + v.label + "</a>");
    }
) ;

});