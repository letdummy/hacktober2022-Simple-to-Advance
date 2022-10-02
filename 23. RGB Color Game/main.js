var allCardElements =document.querySelectorAll(".card");

var change =document.querySelector(".change");
// change.innerHTML = colorGenerator();
// change.innerHTML = extractrgbb();
// extractrgbb();

var toppart=document.querySelector(".toppart");
var newgame=document.querySelector("#newgame");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var gametext=document.querySelector(".gametext");
var chosencolor;
var cardnumbers=6;

// ALL card color gives color to cards
  function allcardcolor()
  {
      var arr=[];
      for(var i=0;i< cardnumbers;i++)
      {
          arr.push(colorGenerator());
      }
      return arr;
  }
  
var colors=[];
colors=allcardcolor();
// ALL card color gives color to cards

// var allCardElements =document.querySelectorAll(".card");
// var card = allCardElements[0];
// card.style.background=colors[0];
// extractrgbb();

// THIS FOR LOOP ASSIGNS COLOR TO CARDS BY STULE
  for(var i = 0; i < cardnumbers; i++) 
{
    var card = allCardElements[i];
    card.style.background=colors[i];
    console.log(colors[i]);
}

change.innerHTML = extractrgbb();
  function extractrgbb()
  {
      var a=colors[(Math.floor(Math.random()*cardnumbers))];
      chosencolor=a;
    //   var a=colors[0];
      console.log(chosencolor);
      return a;
  }

  for(var i = 0; i <cardnumbers; i++) 
{
    var card = allCardElements[i];
    console.log("inside1");
    card.addEventListener("click",function(e)
    {
        cardClicked(this);
    });
  }

  function cardClicked(cardE)
  {
    // console.log(colors[i]);
    var g=cardE.style.background;
    console.log(g);
    console.log(cardE);
    // console.log("chosen colo");
    // console.log(chosencolor);

      if(g===chosencolor)
      {
        console.log("condition checked");
        toppart.style.background=chosencolor;

        for(var i = 0; i <cardnumbers; i++) 
        {
            var card = allCardElements[i];
            card.style.visibility="visible";
            card.style.background=chosencolor;
        }
        gametext.innerHTML = "YOU WON SIR";
        newgame.innerHTML = "Play Again!!!";
      }
      else
      {
          cardE.style.visibility="hidden";
          console.log("condition checked22");
          // setTimeout( function ( ) { alert( "moo" ); }, 50 ); 
      }
  }

  function colorGenerator()
  {
      var red=Math.floor(Math.random()*255);
      var green=Math.floor(Math.random()*255);
      var blue=Math.floor(Math.random()*255);
      return "rgb(" + red + ", " + green + ", " + blue + ")";
  }


  function easyGame()
{
  gametext.innerHTML = "Easy level here";
  console.log("EASY TIME");
  cardnumbers=3;
  for(var i = 3; i <6; i++) 
  {
      var card = allCardElements[i];
      card.style.display="none";
      // card.style.background=chosencolor;
  }
  console.log("laughing at you");
console.log(cardnumbers);

var colors=[];
colors=allcardcolor();
for(var i = 0; i < cardnumbers; i++) 
{
    var card = allCardElements[i];
    card.style.background=colors[i];
    console.log(colors[i]);
}

change.innerHTML = extractrb();
function extractrb()
  {
      var a=colors[(Math.floor(Math.random()*cardnumbers))];
      chosencolor=a;
    //   var a=colors[0];
      console.log(chosencolor);
      return a;
  }
for(var i = 0; i <cardnumbers; i++) 
{
    var card = allCardElements[i];
    console.log("inside1");
    card.addEventListener("click",function(e)
    {
        cardClicked(this);
    });
  }
}