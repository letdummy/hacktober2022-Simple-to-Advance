

// for button clicks
for(var i=0; i<document.querySelectorAll(".drum").length; i++){   /*using button instead of .drum is not good because if another button is added later that
                                                                    does not need any eveny listener, it will also start triggering the function*/
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonClick=this.innerHTML;
    makeSound(buttonClick);
    buttonAnimation(buttonClick);
  });
}


// for key presses
document.addEventListener("keydown",function(event){
    var keyValue=event.key;
    makeSound(keyValue);
    buttonAnimation(keyValue);
});


// function that is triggered
function makeSound(key){
  switch (key) {

    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      alert(key);

  }
}

function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed")
  }, 100);
}
