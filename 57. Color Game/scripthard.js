//genrate number
// change color btn
//txt of change color
// card vanishing


var boxes = document.querySelectorAll('.box');



var heading = document.querySelector('#rgbnumber');

var colors = genraterandomcolor(6);


var pickcolor = colors[Math.floor(Math.random() * 6)];

console.log(pickcolor);


heading.textContent = pickcolor;



var playbtn = document.querySelector('#changecolor');



var hardbtn = document.querySelector('#hardbt');



var easybtn = document.querySelector('#easybt');



var boxnumber = 6;


var text = document.querySelector('#text');
text.textContent = "pick your card!";



playbtn.addEventListener('click', function () {
    text.textContent = "pick your card!";
    boxnumber = 6;
    colors = genraterandomcolor(boxnumber);
    pickcolor = colors[Math.floor(Math.random() * boxnumber)];
    heading.textContent = pickcolor;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
});

for (var i = 0; i < colors.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].addEventListener('click', function () {
        console.log(this.style.background);
        if (this.style.backgroundColor === pickcolor) {
            win();
        }
        else {
            loose(this);
        }
    });
}

function win() {
    for (let i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickcolor;

    }
    text.textContent = 'you win the game!!';
}
function loose(a) {
    a.style.background = 'black';
    text.textContent = 'pick another card';
}

function genraterandomcolor(num) {
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

