
var adverChange = document.getElementById("advert-img");
images = [
    'ship/img-20.jpg','back-g/img-4.jpg'
];


 
setInterval(function() {
    var imgCount = images.length 
    var numb = Math.floor(Math.random()* imgCount);
    adverChange.style.backgroundImage = 'url('+images[numb]+')'
}, 2000);
 
var srchBtn = document.getElementById("srchBtn");
var adverImg = document.getElementById("advert-img");
var resultDiv = document.getElementById("result-div");
var vehicles = document.getElementById("advt-div");
var errVal = document.getElementById("error-value");


var myArr = ["hijet","toyota", "honda", "nissan", "mazda", "daihtsu", "suzuki"];

function srchEl(e) {
    e.preventDefault();
    var inputSrch = document.getElementById("input-srch").value;
    inputSrch = inputSrch.toLowerCase();
    var index = myArr.indexOf(inputSrch);

        if(index !== -1) {
            adverImg.style.display = "none"
            resultDiv.style.display = "block"
            resultDiv.innerHTML =inputSrch.toUpperCase() + "<strong>  is Aviliable</strong>" + "<br><br>"+"<a href='goods.html'>click to view vehicle</a>"
        }
        else{
            resultDiv.style.display = "block"
            resultDiv.innerHTML = inputSrch.toUpperCase() + "<strong> search error!</strong>" + "<br><br>"+"<a href='goods.html'>click to view availiable vehicles</a>"
        };
};

srchBtn.addEventListener("click",srchEl );






