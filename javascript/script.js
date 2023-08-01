const menuBtn = document.querySelector('.fa-solid')
const hiddenMenu = document.querySelector('.menu-list')

function revealMenu (){
    if (hiddenMenu.style.display = "none") {
        hiddenMenu.style.display = "block"
    } else {
        hiddenMenu.style.display = "none"
    }
}

menuBtn.addEventListener('click', revealMenu)