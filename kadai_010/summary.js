$(document).ready(function() {
   $("#change-color").click(function() {
       $("#target").css("color", "orange");
   });

   $("#change-text").click(function() {
       $("#target").text("こんばんは");
   });

   $("#fade-out").click(function() {
       $("#target").fadeOut();
   });

   $("#fade-in").click(function() {
       $("#target").fadeIn();
   });
});
