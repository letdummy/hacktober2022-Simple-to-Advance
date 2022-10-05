const asideDrawer = document.querySelector("#aside-drawer");
const closeDrawerBtn = document.querySelector("#drawer-close-icon");
const hamburgerBtn = document.querySelector("#hamburger-btn");

hamburgerBtn.addEventListener("click",() => {
    asideDrawer.classList.add("aside-shown");
})

closeDrawerBtn.addEventListener("click", () => {
    asideDrawer.classList.remove("aside-shown");
})
