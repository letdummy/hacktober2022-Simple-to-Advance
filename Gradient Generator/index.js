var gradient = document.querySelector('#gradient');
var color1 = document.getElementsByClassName('color1');
var color2 = document.getElementsByClassName('color2');
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
var text = document.querySelector('h4');
var type = document.getElementById('type');

function setGradient(){
    gradient.style.background = "linear-gradient(" + type.value + "," + color1[0].value + "," + color2[0].value + ")";
    if(type.value == "radial"){
        gradient.style.background = "radial-gradient(" + color1[0].value + "," + color2[0].value + ")";
    }
    text.innerText = gradient.style.background;
    
}

color1[0].addEventListener('input', setGradient);
color2[0].addEventListener('input', setGradient);
type.addEventListener('input', setGradient);

