//VARIABLE DECLARATION

var level = 0;
var i = 0; //click number-1
var randomNumber;
const buttonColor = ["green", "red", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//START

document.addEventListener(
  "keydown",
  function () {
    $("#startGame").hide();
    level++;
    $("#levelNumberDeclaration").html("Level " + level);
    $("#levelNumberDeclaration").show();
    $(".row").show();
    nextSequence();
  },
  { once: true }
);

//FUNCTIONS

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  var randomColor = buttonColor[randomNumber];
  gamePattern.push(randomColor);
  console.log(gamePattern);

  $("#" + randomColor)
    .fadeOut(100)
    .fadeIn(100);
  switch (randomColor) {
    case "green":
      var audio1 = new Audio("green.mp3");
      audio1.play();
      break;
    case "red":
      var audio1 = new Audio("red.mp3");
      audio1.play();
      break;
    case "blue":
      var audio1 = new Audio("blue.mp3");
      audio1.play();
      break;
    case "yellow":
      var audio1 = new Audio("yellow.mp3");
      audio1.play();
      break;

    default:
      console.log("No parameter matched!");
      break;
  }

  $("#levelNumberDeclaration").html("Level " + level);
  level++;
  i = 0;
  userClickedPattern = [];
}

function checkAnswer() {
  if (gamePattern[i] == userClickedPattern[i]) {
    console.log("success");
    console.log("level is " + level);
    console.log("i is " + i);
    console.log("game pattern is: " + gamePattern);
    if (i == level - 2) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("failure");
    var failAudio = new Audio("wrong.mp3");
    failAudio.play();
    $("body").addClass("wrongAnswer");
    flash();
    setTimeout(function reload() {
      window.location.reload();
    }, 1000);
  }
}

function flash() {
  setTimeout(function () {
    $("body").addClass("wrongAnswer");
  }, 300);
  setTimeout(function () {
    $("body").removeClass("wrongAnswer");
  }, 300);
  setTimeout(function () {
    $("body").addClass("wrongAnswer");
  }, 300);
  setTimeout(function () {
    $("body").removeClass("wrongAnswer");
  }, 300);
}

//INPUT CLICK

$("button").on("click", function (click) {
  switch (click.currentTarget.id) {
    case "green":
      var audio1 = new Audio("green.mp3");
      audio1.play();
      break;
    case "red":
      var audio1 = new Audio("red.mp3");
      audio1.play();
      break;
    case "blue":
      var audio1 = new Audio("blue.mp3");
      audio1.play();
      break;
    case "yellow":
      var audio1 = new Audio("yellow.mp3");
      audio1.play();
      break;
  }
  $("#" + click.currentTarget.id)
    .fadeOut(100)
    .fadeIn(100);

  userClickedPattern.push(click.currentTarget.id);
  console.log("userclickedpattern is" + userClickedPattern);
  checkAnswer();
  i++;
});

//TOUCH OPTIMIZATION

document.addEventListener(
  "touchstart",
  function () {
    $("#startGame").hide();
    level++;
    $("#levelNumberDeclaration").html("Level " + level);
    $("#levelNumberDeclaration").show();
    $(".row").show();
    nextSequence();
  },
  { once: true }
);
