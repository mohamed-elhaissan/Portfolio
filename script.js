const navbar = document.getElementById("nav");
const close = document.getElementsByClassName('fa-xmark');
function closenavbar() {
    navbar.style.display = "none";
    close.style.color = 'red';
}
function shownavbar(){
    navbar.style.display = 'flex';
    
}


const scroling = document.getElementById('scroolarrow');
window.onscroll = function (){
    if (scrollY <= 400){
        scroling.style.display='none';
    }
    else if (scrollY >= 400){
        scroling.style.display = 'block'
    }
}
scroling.onclick = function () {
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const project = document.querySelector('#project');
const contact = document.querySelector('#contact');

about.onclick = function () {
    scroll({
        top:2906.39990234375,
        left:0,
        behavior:"smooth"

    })
}
skills.onclick = function () {
    scroll({
        top:700,
        left:0,
        behavior:"smooth"

    })
}
project.onclick = function () {
    scroll({
        top:2800,
        left:0,
        behavior:"smooth"

    })
}
contact.onclick = function () {
    scroll({
        top:4900,
        left:0,
        behavior:"smooth"

    })
}
