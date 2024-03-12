document.addEventListener('DOMContentLoaded' , () => {
const navBar = document.getElementById('navBar');
let nav_hidden = document.querySelector('.nav_hidden');

navBar.addEventListener('click' , () => {
nav_hidden.classList.toggle('nav_display');
nav_hidden.classList.toggle('nav_hidden');

});



});