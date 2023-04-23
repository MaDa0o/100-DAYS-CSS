const dash = document.querySelectorAll(".dash")
const comm = document.querySelectorAll(".comm")
const notif = document.querySelectorAll(".notif")
const sett = document.querySelectorAll(".sett")

let dashinfo = true
let comminfo = false
let notifinfo = false
let settinfo = false

dash[0].addEventListener('click', ()=>{
    if (!dashinfo) {
        if(comminfo){
            comm[0].classList.remove('active')
            comm[1].classList.remove('active')
            comminfo=false
        }
        if(notifinfo){
            notif[0].classList.remove('active')
            notif[1].classList.remove('active')
            notifinfo=false
        }
        if(settinfo){
            sett[0].classList.remove('active')
            sett[1].classList.remove('active')
            settinfo=false
        }
        dash[0].classList.add('active')
        dash[1].classList.add('active')
        dashinfo=true
    }
});
comm[0].addEventListener('click', ()=>{
    if (!comminfo) {
        if(dashinfo){
            dash[0].classList.remove('active')
            dash[1].classList.remove('active')
            dashinfo=false
        }
        if(notifinfo){
            notif[0].classList.remove('active')
            notif[1].classList.remove('active')
            notifinfo=false
        }
        if(settinfo){
            sett[0].classList.remove('active')
            sett[1].classList.remove('active')
            settinfo=false
        }
        comm[0].classList.add('active')
        comm[1].classList.add('active')
        comminfo=true
    }
});
notif[0].addEventListener('click', ()=>{
    if (!notifinfo) {
        if(comminfo){
            comm[0].classList.remove('active')
            comm[1].classList.remove('active')
            comminfo=false
        }
        if(dashinfo){
            dash[0].classList.remove('active')
            dash[1].classList.remove('active')
            dashinfo=false
        }
        if(settinfo){
            sett[0].classList.remove('active')
            sett[1].classList.remove('active')
            settinfo=false
        }
        notif[0].classList.add('active')
        notif[1].classList.add('active')
        notifinfo=true
    }
});
sett[0].addEventListener('click', ()=>{
    if (!settinfo) {
        if(comminfo){
            comm[0].classList.remove('active')
            comm[1].classList.remove('active')
            comminfo=false
        }
        if(notifinfo){
            notif[0].classList.remove('active')
            notif[1].classList.remove('active')
            notifinfo=false
        }
        if(dashinfo){
            dash[0].classList.remove('active')
            dash[1].classList.remove('active')
            dashinfo=false
        }
        sett[0].classList.add('active')
        sett[1].classList.add('active')
        settinfo=true
    }
});