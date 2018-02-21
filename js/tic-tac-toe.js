/**
 * @author Olga Osinskaya <ssinsk@yandex.ru>
 * 02/19/2018
 * Winter 2018
 * CSD 122 - JavaScript & jQuery
 * Group Project - Group 3 (Olga Osinskaya, Noah Greer, and Topher Gidos)
 *
 * Code to play a game of Tic Tac Toe.
 */
$(document).ready(function() {
  var whoTurn = false;
  $("#reset").text("Reset Board");

  /*function processTurn(){
   if($(".boxTwo").val()=="x"){
     $(".boxThree").text("o");
   }
 }
 */
  var whoTurn;
  $("input").keyup(function() {
    var value = $(this)
      .val()
      .toUpperCase();

    /* function random(){
       var value = Math.floor(Math.random() * 9);
       var one;
       if (value==0)
       one=".boxOne";
       else



       if($(".boxThree").val()== "")
       one=".boxThree";
       else
       one=".boxTwo"
       return one;
     }
*/
    var message = " Wins! Congratulations!";
    var newGame = "New game";
    if (
      ($(this)
        .val()
        .toLowerCase() == "x" &&
        whoTurn == false) ||
      ($(this)
        .val()
        .toLowerCase() == "o" &&
        whoTurn == true)
    ) {
      if (
        $(this)
          .val()
          .toLowerCase() == "x"
      )
        whoTurn = true;
      else {
        whoTurn = false;
      }
      $(this).css({ color: "#a31e1b" });
      $(this).attr("readonly", true);
      $("#message").html("");
      /*$(random()).val("o");*/
    } else if (
      ($(this)
        .val()
        .toLowerCase() == "x" &&
        whoTurn == true) ||
      ($(this)
        .val()
        .toLowerCase() == "o" &&
        whoTurn == false)
    ) {
      $("#message").html("It's not your turn!");
      $(this).attr("value", "");
    } else if (
      $(this)
        .val()
        .toLowerCase() != "x" ||
      $(this)
        .val()
        .toLowerCase() != "o"
    ) {
      $("#message").html("Please enter only X or O");
      $(this).attr("value", "");
    }
    if (
      $(".boxOne")
        .val()
        .toLowerCase() != "" &&
      $(".boxTwo")
        .val()
        .toLowerCase() != "" &&
      $(".boxThree")
        .val()
        .toLowerCase() != "" &&
      $(".boxFour")
        .val()
        .toLowerCase() != "" &&
      $(".boxFive")
        .val()
        .toLowerCase() != "" &&
      $(".boxSix")
        .val()
        .toLowerCase() != "" &&
      $(".boxSeven")
        .val()
        .toLowerCase() != "" &&
      $(".boxEight")
        .val()
        .toLowerCase() != "" &&
      $(".boxNine")
        .val()
        .toLowerCase() != ""
    ) {
      $("#message").text("Result is Tie!");
      $("#reset").text(newGame);
    }

    if (
      ($(".boxOne")
        .val()
        .toLowerCase() == "x" &&
        $(".boxTwo")
          .val()
          .toLowerCase() == "x" &&
        $(".boxThree")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxOne")
        .val()
        .toLowerCase() == "o" &&
        $(".boxTwo")
          .val()
          .toLowerCase() == "o" &&
        $(".boxThree")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxOne, .boxTwo, .boxThree").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    if (
      ($(".boxFour")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "x" &&
        $(".boxSix")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxFour")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "o" &&
        $(".boxSix")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxFour, .boxFive, .boxSix ").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    if (
      ($(".boxSeven")
        .val()
        .toLowerCase() == "x" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "x" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxSeven")
        .val()
        .toLowerCase() == "o" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "o" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxSeven, .boxEight, .boxNine").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    if (
      ($(".boxOne")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFour")
          .val()
          .toLowerCase() == "x" &&
        $(".boxSeven")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxOne")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFour")
          .val()
          .toLowerCase() == "o" &&
        $(".boxSeven")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxOne, .boxFour, .boxSeven").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    if (
      ($(".boxTwo")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "x" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxTwo")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "o" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxTwo, .boxFive, .boxEight").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    if (
      ($(".boxTwo")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "x" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxTwo")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "o" &&
        $(".boxEight")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxTwo, .boxFive, .boxEight").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    // third column, X
    if (
      ($(".boxThree")
        .val()
        .toLowerCase() == "x" &&
        $(".boxSix")
          .val()
          .toLowerCase() == "x" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxThree")
        .val()
        .toLowerCase() == "o" &&
        $(".boxSix")
          .val()
          .toLowerCase() == "o" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxThree, .boxSix, .boxNine").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }
    // top to bottom diagonal, X
    if (
      ($(".boxOne")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "x" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxOne")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "o" &&
        $(".boxNine")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxOne, .boxFive, .boxNine").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }
    // bottom to top diagonal, X
    if (
      ($(".boxThree")
        .val()
        .toLowerCase() == "x" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "x" &&
        $(".boxSeven")
          .val()
          .toLowerCase() == "x") ||
      ($(".boxThree")
        .val()
        .toLowerCase() == "o" &&
        $(".boxFive")
          .val()
          .toLowerCase() == "o" &&
        $(".boxSeven")
          .val()
          .toLowerCase() == "o")
    ) {
      $("#message").text(value + message);
      $("#reset").text(newGame);
      $(".boxThree, .boxFive, .boxSeven").css({ background: "#F0F0F0" });
      $("input").attr("readonly", true);
    }

    $("#reset").click(function() {
      window.location.assign("tic-tac-toe.html");
    });
  });
});