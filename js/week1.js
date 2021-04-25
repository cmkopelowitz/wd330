$(function(){
  $("#button_display").click(function() {
    var storyHTML = $("#story_editor").text()
    $("#story_display").text() = storyHTML
  });
  

  $("#button_load").click(function() {
    var storyName = $("#name_input").text()
    var storyHTML = localStorage.getItem(storyName)
    $("#story_editor").text() = storyHTML
  });

  $("#button_save").click(function() {
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName,storyHTML)
  });

  
});