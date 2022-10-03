const jokeButton = document.querySelector("#jokeBtn");
const bg = document.querySelector(".bg");
const rvl = document.querySelector(".card > div:nth-child(1)");
const loader = document.querySelector(".load");

const joke = document.getElementById("joke");

jokeButton.addEventListener("click", () => {
    bg.classList.remove("haha");
    rvl.classList.remove("show");
    loader.classList.remove("hidden");
    setTimeout(fetchData, 1000);
});

fetchData();

function fetchData() {
    fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    })
        .then((x) => x.json())
        .then((data) => {
            joke.innerHTML = data.joke;
        })
        .then((x) => {
            bg.classList.add("haha");
            rvl.classList.add("show");
            loader.classList.add("hidden");
        });
}
