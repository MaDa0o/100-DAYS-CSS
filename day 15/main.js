const dragarea = document.querySelector('.upload');
const droptext = document.querySelector('.upload-text');
const uploadbtn = document.querySelector('.button');
const box = document.querySelector('.box');
let filename;

dragarea.addEventListener('dragover', (event)=>{
    event.preventDefault();
    dragarea.classList.add('active');
    // console.log('file inside');
});

dragarea.addEventListener('dragleave', (event)=>{
    event.preventDefault();
    dragarea.classList.remove('active');
    // console.log('file inside');
});

dragarea.addEventListener('drop', (event)=>{
    event.preventDefault();
    filename=event.dataTransfer.files[0]['name'];
    droptext.textContent = filename;
    // console.log(filename)
    dragarea.classList.add('dropped');
    uploadbtn.addEventListener('click', ()=>{
        box.classList.add('start')
        setTimeout(()=>{
            box.classList.remove('start')
            box.classList.add('done');
            uploadbtn.textContent = 'Done';
        },5000);
    });

})