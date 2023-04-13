const mark = document.querySelector('.marker');
const act = document.querySelector('.actions');
const card = document.querySelector('.card');
mark.addEventListener('click' , ()=>{
    mark.classList.add('active');
    card.classList.add('active');
});

act.addEventListener('click', ()=>{
    mark.classList.remove('active');
    card.classList.remove('active');
});