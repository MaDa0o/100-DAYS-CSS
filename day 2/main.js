const btn = document.querySelector('.hamburger');
let open = false;

//detect click
btn.addEventListener('click', () =>{
    if(!open)
    {
        btn.classList.add('open');
        // delay for rotate animation
        setTimeout(()=> {
            btn.classList.add('rot')  
        },500)
        open = true;
    }
    
    else{
        btn.classList.remove('rot');
        // delay for rotate animation
        setTimeout(()=> {
            btn.classList.remove('open')
        },500)
        open = false;
    }

});