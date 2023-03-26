document.querySelector(".search-icon").addEventListener("click", () => {
    document.querySelector(".search-input").classList.toggle("open");
});

document.querySelector(".menu-icon").addEventListener("click", () =>{
    document.querySelector(".menu").classList.toggle("menu-active");
    document.querySelector(".panel").classList.toggle("panel-active");
});