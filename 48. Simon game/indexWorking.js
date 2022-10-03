var level = 0;
var lastAnswer;
var userClickedPattern = [];
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  console.log("this is randomNumber:" + randomNumber);
  if (level >= 1) {
    $("#startGame").hide();
    $("#levelNumber").html("Level " + level);
    $("#levelNumber").show();
  }
  level++;
  userClickedPattern = [];
  return randomNumber;
}
const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
//console.log(randomNumber);
// $("." + randomChooseColor)
// .fadeOut(100)
// .fadeIn(100);

document.addEventListener(
  "keydown",
  function () {
    var randomNumber = nextSequence(randomNumber); //here nextSequence is called for the first time
    var randomChooseColor = buttonColours[randomNumber];
    console.log(randomChooseColor);
    gamePattern.push(randomChooseColor);

    switch (randomChooseColor) {
      case "red":
        var audio1 = new Audio("red.mp3");
        audio1.play();
        $("#button1").fadeOut(100).fadeIn(100);
        break;
      case "blue":
        var audio2 = new Audio("blue.mp3");
        audio2.play();
        $("#button2").fadeOut(100).fadeIn(100);
        break;
      case "green":
        var audio3 = new Audio("green.mp3");
        audio3.play();
        $("#button3").fadeOut(100).fadeIn(100);
        break;
      case "yellow":
        var audio4 = new Audio("yellow.mp3");
        audio4.play();
        $("#button4").fadeOut(100).fadeIn(100);
        break;
    }
  },
  //{ once: true }
);
//document.addEventListener

$("button").on("click", function () {
  var userChosenColor = this.className;
  //console.log("userChosenCOlor is: "+userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  lastAnswer = userClickedPattern[level - 1];
  //console.log("last answer is " + lastAnswer);
  //nextSequence();
});
// function playSoound(name) {}
document.addEventListener("keydown", function () {
  nextSequence();
});

function checkAnswer() {
  if (lastAnswer == randomChooseColor) {
    console.log("success");
  } else {
    console.log("failure is the stepping stone to sucess");
  }
  //alert("checkAnswer is working!!");
}
$("Button").on("click", function (click) {
  //console.log(click.currentTarget.id);
  switch (click.currentTarget.id) {
    case "button1":
      var audio1 = new Audio("red.mp3");
      audio1.play();
      $("#button1").fadeOut(100).fadeIn(100);
      break;
    case "button2":
      var audio2 = new Audio("blue.mp3");
      audio2.play();
      $("#button2").fadeOut(100).fadeIn(100);
      break;
    case "button3":
      var audio3 = new Audio("green.mp3");
      audio3.play();
      $("#button3").fadeOut(100).fadeIn(100);
      break;
    case "button4":
      var audio4 = new Audio("yellow.mp3");
      audio4.play();
      $("#button4").fadeOut(100).fadeIn(100);
      break;
  }
  checkAnswer();
});
