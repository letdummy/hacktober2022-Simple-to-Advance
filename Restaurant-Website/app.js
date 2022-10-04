window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY>0)
    {
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky");
    }
    
});


function toggleMenu()
{
    const menuToggle = document.querySelector(".menuToggle");
    
    
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");

}