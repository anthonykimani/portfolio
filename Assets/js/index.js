// const startJs = ('DOMContentLoaded',()=>{

// })

const menuButton = document.querySelector('.menu-button');
const mobileLayout = document.querySelector('.mobile-layout');
const exitMenu = document.querySelector('.exit-menu');

menuButton.addEventListener('click',(event)=>{
    mobileLayout.style.transform = 'translateX(0px)';
})

exitMenu.addEventListener('click',(event)=>{
    mobileLayout.style.transform = 'translateX(400px)';
})