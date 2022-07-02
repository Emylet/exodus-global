var adverChange = document.getElementById("advert-img");
images = [
   'back-g/img-1.jpg','back-g/img-2.jpg',  'back-g/img-4.jpg',
];


 
setInterval(function() {
    var imgCount = images.length 
    var numb = Math.floor(Math.random()* imgCount);
    adverChange.style.backgroundImage = 'url('+images[numb]+')'
}, 2000);
 



