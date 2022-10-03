var translateBtn = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#inputText");
var outputTxt = document.querySelector("#outputText");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
	return serverURL + "?text=" + text;
}

function errorHandler(error) {
	alert("Either rate limit of 5 calls per hour is achieved or the server is down" + error);
}

function buttonClicked() {
	// console.log("Button clicked");
	// console.log(inputTxt.value);
	// outputTxt.innerText = "Translated text is: " + inputTxt.value;

	var inputText = inputTxt.value;

	fetch(getTranslationURL(inputText))
		.then((response) => response.json())
		.then((json) => {
			var translation = json.contents.translated;
			outputTxt.innerText = translation;
		})
		.catch(errorHandler);
}

translateBtn.addEventListener("click", buttonClicked);
