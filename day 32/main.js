const plus  = document.querySelector('.add')
const minus  = document.querySelector('.minus')
const value = document.querySelector('.val')

plus.addEventListener('click', ()=>{
    let currval= parseInt(value.innerHTML);
    value.classList.remove('fadein');
    value.classList.add('fadeout');
    setTimeout(function() {
        value.classList.remove('fadeout');
        value.classList.add('fadein');
        value.textContent=currval+1;
    },200);
    
});

minus.addEventListener('click', ()=>{
    let currval= parseInt(value.innerHTML);
    value.classList.remove('fadein');
    value.classList.add('fadeout');
    setTimeout(function() {
        value.classList.remove('fadeout');
        value.classList.add('fadein');
        value.textContent=currval-1;
    },300);
});