const billAmount = document.querySelector("#bill-amount");
const nextBtn = document.querySelector("#next");
const cashGiven = document.querySelector("#cash-given");
const changeBtn = document.querySelector("#change-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashGivenSection = document.querySelector("#cash-given-section");
const notesSection = document.querySelector("#notes-section");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", () => {
	if (billAmount.value > 0) {
		cashGivenSection.style.display = "block";
		errorMessage.innerText = "";
	} else {
		showMessage("Invalid Value");
		cashGivenSection.style.display = "none";
		notesSection.style.display = "none";
	}
});

changeBtn.addEventListener("click", function validateInput() {
	hideMessage();
	if (billAmount.value > 0) {
		if (cashGiven.value >= billAmount.value) {
			const returnAmount = cashGiven.value - billAmount.value;
			notesSection.style.display = "block";
			calculateChange(returnAmount);
		} else {
			showMessage("Cash amount given should be greater than or equal to bill amount");
			// notesSection.style.display = "none";
		}
	} else {
		showMessage("Bill amount should be greater than 0");
	}
});

function calculateChange(returnAmount) {
	for (let i = 0; i < availableNotes.length; i++) {
		const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
		returnAmount = returnAmount % availableNotes[i];
		noOfNotes[i].innerText = numberOfNotes;
	}
}

function hideMessage() {
	errorMessage.style.display = "none";
}

function showMessage(message) {
	errorMessage.style.display = "block";
	errorMessage.innerText = message;
}
