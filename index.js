const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);


const vaNs = document.getElementById("goods")
var inPut = document.getElementById("input-el")
var searCh = document.getElementById("input-btn");

    
function myOrder(){
    var show = document.getElementById("show-up")
    var make = document.getElementById("input-make").value;
    var name = document.getElementById("name").value;
    var addre = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var type = document.getElementById("input-type").value;
    var country = document.getElementById("input-country").value;
if(make==""|| name==""|| addre==""|| phone==""|| type==""|| country=="")
{
    show.innerText= "Fill all the Inputs"
}
else if (isNaN(phone) || phone.length < 13)
{
    show.innerText= "Please enter a valid phone number!"
}
else {
    show.innerHTML = "THANK YOU " + name + "<br>" + " YOUR REQUEST WAS SUCCESSFUL!"
}
}

var slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
    var slides = document.querySelectorAll('#${slideshow.id} [role="list"] .slide');

    var index = 0, time = 5000;
    slides[index].classList.add('active');

    setInterval( () => {
        slides[index].classList.remove('active');

        index++;

        if(index===slides.length) index = 0;

        slides[index].classList.add('active');
    },time);
}