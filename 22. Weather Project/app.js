const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
	res.sendFile(__dirname+"/weather.html");
});

app.post("/",function(req,res){
		
		const url="https://api.openweathermap.org/data/2.5/weather?q="+req.body.cityName+"&units=metric&appid=18541bb2e58bd28ec73f8bd6069fb924";
		https.get(url,function(response){
			// console.log(response.statusCode);
			response.on("data",function(data){
				console.log(JSON.parse(data));

				// res.write("<h2>"+req.body.cityName+"</h2>");
				res.write("<h1>"+JSON.parse(data).main.temp+"&#176C</h1>");
				res.write("<h3>Weather: "+JSON.parse(data).weather[0].description+" in "+req.body.cityName+"</h1>");

				res.write("<img src=http://openweathermap.org/img/wn/"+JSON.parse(data).weather[0].icon+"@2x.png>");
				res.send();
			});
		});
});

app.listen(3000,function(){
	console.log("Server up and running on port 3000");
});
