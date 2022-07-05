
//JQuery starts

$("document").ready(function() {
    $("#toyo-vehicles").hide();
    $("#suzuki-vehicles").hide();
    $("#mazda-vehicles").hide();
    $("#honda-vehicles").hide();
    $("#nissan-vehicles").hide();
        $("#toyo-sec").on("click", function(){
            $("#toyo-vehicles").show();
            $("#hijet-vehicles").hide();
            $("#suzuki-vehicles").hide();
            $("#mazda-vehicles").hide();
            $("#honda-vehicles").hide();
            $("#nissan-vehicles").hide();
        });
        $("#hijet-sec").on("click", function(){
            $("#hijet-vehicles").show();
            $("#toyo-vehicles").hide();
            $("#suzuki-vehicles").hide();
            $("#mazda-vehicles").hide();
            $("#honda-vehicles").hide();
            $("#nissan-vehicles").hide();
        });
        $("#hond-sec").on("click", function(){
            $("#honda-vehicles").show();
            $("#hijet-vehicles").hide();
            $("#toyo-vehicles").hide();
            $("#suzuki-vehicles").hide();
            $("#mazda-vehicles").hide();
            $("#nissan-vehicles").hide();
        });
        $("#suzi-sec").on("click", function(){
            $("#suzuki-vehicles").show();
            $("#hijet-vehicles").hide();
            $("#toyo-vehicles").hide();
            $("#daihstu-vehicles").hide();
            $("#honda-vehicles").hide();
            $("#mazda-vehicles").hide();
            $("#nissan-vehicles").hide();
        });
        $("#mazd-sec").on("click", function(){
            $("#mazda-vehicles").show();
            $("#hijet-vehicles").hide();
            $("#toyo-vehicles").hide();
            $("#honda-vehicles").hide();
            $("#suzuki-vehicles").hide();
            $("#nissan-vehicles").hide();
        });
        $("#niss-sec").on("click", function(){
            $("#nissan-vehicles").show();
            $("#daihstu-vehicles").hide();
            $("#hijet-vehicles").hide();
            $("#toyo-vehicles").hide();
            $("#mazda-vehicles").hide();
            $("#honda-vehicles").hide();
            $("#suzuki-vehicles").hide();
        });
});

//Toggle fuction

var vehicles=document.getElementById("vehicles-links");
var motorList=vehicles.getElementsByClassName("motors");
var i;

for(i=0; i<motorList.length; i++){
    motorList[i].addEventListener("click", function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active", "");
        this.className+=" active";
    });
};


