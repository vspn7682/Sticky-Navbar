const showcase = document.querySelector('.showcase');
const navbar = document.querySelector('.navbar');
// console.log(showcase);

var height = showcase.clientHeight;
 console.log(height);
 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
        console.log(document.body.scrollTop)
        console.log(height);
        
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})