const sky = document.querySelector(".sky")

//adding 300 divs/stars
for (let i = 1; i <= 300; i++){
    addstar(i);
}
for (let i = 1; i <= 10; i++){
    addsstar(i);
}


function addstar(e) {
    let name = 'star star-' + e;
    const star = document.createElement('div')
    star.className = name;
    
    sky.appendChild(star);
}
function addsstar(e) {
    let name = 'sstar sstar-' + e;
    const sstar = document.createElement('div')
    sstar.className = name;
    
    sky.appendChild(sstar);
}