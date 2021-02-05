const showcase = document.querySelector('.showcase');
const navbar = document.querySelector('.navbar');
// console.log(showcase);

const height = showcase.clientHeight;
// console.log(height);

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 757 || document.documentElement.scrollTop > 757) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})