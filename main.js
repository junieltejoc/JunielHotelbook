let searchBTN = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBTN = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


window.onscroll =()=>{
    searchBTN.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
searchBTN.addEventListener('click',()=>{
searchBTN.classList.toggle('fa-times');
searchBar.classList.toggle('active');

});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});