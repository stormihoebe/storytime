$(function() {

  $("#first-form").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "verb","noun"];
    console.log(blanks)
    event.preventDefault();
    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);

    });

    $("#first-form").hide(300);
    $("#story").show(500);


  });
});
