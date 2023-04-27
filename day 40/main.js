const img = document.querySelectorAll('.image')

img.forEach((e)=>{
    let activ = false

    e.addEventListener('click',()=>{
        if(!activ){
            activ = true
            e.classList.add('active')
            img.forEach((i)=>{
                if(e!=i){
                    i.classList.add('over')
                }
            })
        }else{
            activ = false
            e.classList.remove('active')
            img.forEach((i)=>{
                if(e!=i){
                    i.classList.remove('over')
                }
            })
        }
    })
})