$("document").ready(function() {
  $(".pill").on("click", function() {
      $(".pill").removeClass("active")
      $(this).addClass("active")
    });
})