

const scroling = document.getElementById('scroolarrow');
const scrolingbox = document.getElementById('scrollbox')
const nav = document.getElementsByTagName('nav');
window.onscroll = function (){
    if (scrollY <= 400){
        scroling.style.display='none';
        scrolingbox.style.display=  'none';
        scrolingbox.style.opacity = 0;
    }
    else if (scrollY >= 400){
        scroling.style.display = 'block'
        scrolingbox.style.display = "flex";
        
        scrolingbox.style.opacity = 1;
    }
}

const resumebutton = document.getElementById('resume');
resumebutton.onclick = function (){
    window.print()
}

scroling.onclick = function (){
    scroll({
        left:0,
        top:0,
        behavior:'smooth',
    })
}
function shownavbar() {
    nav[0].style.display='flex';
}
function closeing(){
    
    nav[0].style.display='none';
}