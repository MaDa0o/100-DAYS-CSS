const btn = document.querySelector('.menu')
const cont = document.querySelector('.content')

let activ = false
btn.addEventListener('click', ()=>{
    if (activ) {
        btn.classList.remove('active')
        btn.classList.add('inactive')
        cont.classList.remove('active')
        activ = false
    } else {
        btn.classList.remove('inactive')
        btn.classList.add('active')
        setTimeout(() => {
            cont.classList.add('active')
        }, 400);
        activ = true        
    }
})
cont.addEventListener('click', ()=>{
    if (activ) {
        btn.classList.remove('active')
        btn.classList.add('inactive')
        cont.classList.remove('active')
        activ = false
    } else {
        btn.classList.remove('inactive')
        btn.classList.add('active')
        setTimeout(() => {
            cont.classList.add('active')
        }, 400);
        activ = true        
    }
})