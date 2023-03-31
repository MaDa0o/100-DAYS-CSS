// querySelectorAll selects all the matching class types and returns an array of all which 
// can be looped through 
// but querySelector only returns the first found class

const butt = document.querySelectorAll(".button");

butt.forEach((e)=>{
    e.addEventListener("click", ()=>{
        document.querySelector(".profile").classList.add("active");
    });
});


document.querySelector(".exit").addEventListener("click",()=>{
    document.querySelector(".profile").classList.remove("active");
});