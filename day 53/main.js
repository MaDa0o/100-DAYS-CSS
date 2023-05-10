var slider = document.getElementById("slid")
var btn = document.querySelector(".thumb")

slider.value = 50;

btn.style.left = 20 + (slider.value*2.4) + 'px';        //manipulating elements style property

slider.oninput = function() {
    btn.style.left = 20 + (this.value*2.4) + 'px'; 
}