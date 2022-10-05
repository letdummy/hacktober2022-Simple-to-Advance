let string = "";
let a=0;
function toggle()
{
  var element = document.body;
  element.classList.toggle("dark-mode");
  let cal = document.getElementById("calc");
  let button = document.getElementsByClassName("button");
  if(cal.value == "light"){
     cal.style.backgroundColor = "#99d5ff";
     cal.value = "black";
     cal.style.borderColor = "#13695d";
     
  }
  else{
    cal.style.backgroundColor = "black";
    cal.style.borderColor = "#b5d307";
    cal.value = "light";
  }    
}



let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  function createitem(name)
{
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
const history = document.querySelector('#history');
    button.addEventListener('click', (e)=>{
      if(e.target.innerHTML == '='){
        history.appendChild(createitem(string));
        try {
            string = eval(string);
            document.querySelector('input').value = string;
            
          }
          catch(err) {
            document.querySelector('input').value ='Recheck' ;
            
          }
      }
      else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'sin')
      {
        if(a==1)
        string=eval(string*Math.PI/180);
        history.appendChild(createitem('sin('+string+')'));
        
        string= Math.sin(string);
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'cos')
      {
        if(a==1)
        string=eval(string*Math.PI/180);
        history.appendChild(createitem('cos('+string+')'));

          string= string= Math.cos(string);
          
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'tan')
      {
          if(a==1)
          string=eval(string*Math.PI/180);
          history.appendChild(createitem('tan('+string+')'));
          string = Math.tan(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'log')
      {
          string = Math.log10(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'ln')
      {
          string = Math.log(string);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'DEL')
      {
          string= string.slice(0, string.length - 1);
          document.querySelector('input').value = string;
      }
      else if(e.target.innerHTML == 'RAD')
      {

        document.getElementById("angle").innerHTML = "DEG";
        a=1;
      
      }
      else if(e.target.innerHTML == 'DEG')
      {
        a=0;
        document.getElementById("angle").innerHTML = "RAD";
        

      }
      else if(e.target.innerHTML == 'INV')
      {
        document.getElementById("inv").innerHTML = "NOR";
        document.getElementById("sin").innerHTML = "asin"; 
        document.getElementById("cos").innerHTML = "acos";
        document.getElementById("tan").innerHTML = "atan";
      }
      else if(e.target.innerHTML == 'NOR')
      {
        document.getElementById("inv").innerHTML = "INV";
        document.getElementById("sin").innerHTML = "sin"; 
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("tan").innerHTML = "tan";
      }      
      else if(e.target.innerHTML == 'asin')
      {
        history.appendChild(createitem('asin('+string+')'));
        string = Math.asin(string);
        
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'acos')
      {
        history.appendChild(createitem('acos('+string+')'));
        string = Math.acos(string);
        document.querySelector('input').value = string;

      }
      else if(e.target.innerHTML == 'atan')
      {
        history.appendChild(createitem('atan('+string+')'));
        string = Math.atan(string);
        document.querySelector('input').value = string;

      }
      else{ 
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
        }

    })
  })