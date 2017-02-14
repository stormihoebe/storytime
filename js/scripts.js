$(function() {
  $("#first-form").submit(function(event) {
    var person1Input = $("#person1").val();
    var person2Input = $("#person2").val();
    var animalInput = $("#animal").val();
    var exclamationInput = $("#exclamation").val();
    var verbInput = $("#verb").val();
    var nounInput = $("#noun").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#first-form").hide(300);
    $("#story").show(500);

    event.preventDefault();
  });
});
