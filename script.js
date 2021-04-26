const hambut=document.getElementById('hambut')
const links=document.getElementById('links')

let toggle=false
const showlink=()=>{
    if (toggle===false) {
        hambut.src='./images/icon-close.svg';
        links.classList.add('mobile');
        links.classList.remove('desk');
    }
    else{
        hambut.src='./images/icon-hamburger.svg';
        links.classList.add('desk');
        links.classList.remove('mobile');
    }
    toggle= !toggle
}
hambut.addEventListener('click',showlink)