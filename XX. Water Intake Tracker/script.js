const smCup = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const done = document.getElementById("done");

const filled = localStorage.getItem("filled");

smCup.forEach((cup, i) => {
    cup.addEventListener("click", () => fillCup(i));
});

function fillCup(i) {
    if (
        smCup[i].classList.contains("full") &&
        smCup[i].nextElementSibling != null &&
        !smCup[i].nextElementSibling.classList.contains("full")
    ) {
        i--;
    }

    smCup.forEach((cup, x) => {
        if (x <= i) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
    console.log(percent);
    updateProgress();
}

function updateProgress() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    localStorage.setItem("filled", fullCups);

    const totalCups = smCup.length;
    if (fullCups == 0) {
        percent.style.visibility = "hidden";
        percent.style.width = 0;
    } else {
        percent.style.visibility = "visible";
        percent.style.width = `${(fullCups / totalCups) * 300}px`;
    }
    if (fullCups == totalCups) {
        remained.style.visibility = "hidden";
        setTimeout(() => done.classList.remove("hide"), 500);
        percent.style.backgroundColor = "#ff9e27";
        celebrate();
    } else {
        percent.style.backgroundColor = "#48abf7";
        done.classList.add("hide");
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}

const colors = [
    getComputedStyle(document.body).getPropertyValue("--ascent-col-1l"),
    getComputedStyle(document.body).getPropertyValue("--ascent-col-2l"),
];

function celebrate() {
    confetti({
        particleCount: 50,
        spread: 1000,
        ticks: 300,
        startVelocity: 30,
        origin: { y: -0.4, x: 0.5 },
        zIndex: 1000000000,
        colors,
        disableForReducedMotion: true,
    });
}

for (var i = 0; i < filled; i++) {
    smCup[i].classList.add("full");
}
updateProgress();
