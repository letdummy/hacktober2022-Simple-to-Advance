// Making a stopwatch using Javascript
var interval = null;
var sec = 0
var min = 0
var hour = 0
var isStart = false;

var clock = document.getElementById("clock")
var list = document.getElementById('list')



function start_pause(){
    if(isStart){
        isStart = false
        clearInterval(interval)
        document.getElementById("start_pause").innerHTML = "Start";
    }else{
        isStart = true
        document.getElementById("start_pause").innerHTML = "Pause";
        interval = setInterval(count , 1000)
    }

}

function reset(){
    sec = 0
    min =0
    hour = 0
    clearInterval(interval)
    //interval = null
    displayClock()
    list.innerHTML = ""
}

function lap(){
    var format = ""
    if(hour.toString().length < 2){
        format += "0"+hour.toString()
    }else{
        format +=hour.toString()
    }

    if(min.toString().length < 2){
        format += ":0"+min.toString()
    }else{
        format +=":"+min.toString()
    }

    if(sec.toString().length < 2){
        format += ":0"+sec.toString()+""
    }else{
        format +=":"+sec.toString()
    }
    list.innerHTML += "<li>"+format+"</li>";
}

function count(){
    if(sec >= 60 ){
        sec= 0;
        min++;
    }
    if(min >= 60){
        min = 0
        hour++;
    }
    displayClock()
    sec++;
}

function displayClock(){
    var format = ""

    if(hour.toString().length < 2){
        format += "0"+hour.toString()
    }else{
        format +=hour.toString()
    }

    if(min.toString().length < 2){
        format += ":0"+min.toString()
    }else{
        format +=":"+min.toString()
    }

    if(sec.toString().length < 2){
        format += ":0"+sec.toString()+""
    }else{
        format +=":"+sec.toString()
    }
    clock.innerHTML = format
}
