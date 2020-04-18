var i=false;

$("#slideShow").carousel({
    interval:5000,
    keyboard: false,
    pause: false,
    ride: true,
    wrap: true
})
$("#slideShow").carousel('prev');

$("#prev").click(function (e){
    $("#slideShow").carousel('prev');
})

$("#slideShow").carousel('next');

$("#next").click(function (e){
    $("#slideShow").carousel('next');
})

$("#play").click(function(){
    if(i){
        $("#slideShow").carousel('pause');
        i=false;
    }
    else {
        $("slideShow").carousel('play');
        i=true;
    }
})