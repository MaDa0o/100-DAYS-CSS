const contain = document.querySelector('.frame');

for(let i=0;i<400;i++){
    let name = "trigger trigger-" + i;
    const pix = document.createElement('div')
    contain.appendChild(pix);
    pix.className = name;
}

const foll = document.createElement('div')
contain.appendChild(foll)
foll.className="follow"