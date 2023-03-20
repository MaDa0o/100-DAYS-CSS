const btn = document.querySelector('.hamburger');
let open = false;

btn.addEventListener('click', () =>{
    if(!open)
    {
        btn.classList.add('open');
        setTimeout(()=> {
            btn.classList.add('rot')
        },500)
        open = true;
    }

    else{
        btn.classList.remove('rot');
        setTimeout(()=> {
            btn.classList.remove('open')
        },500)
        open = false;
    }

});