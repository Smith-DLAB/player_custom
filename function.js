$(document).ready(function(){

    //Stockage des elements html
    // le morceau mp3
    var $zik = $('#audio')[0];

    //controls
    var $play = $('.play') ;
    var $pause = $('.pause') ;
    var $close = $('.close') ;

    function jouer() {
        $zik.play();
    }
    function attente() {
        $zik.pause();
    }
    function arret() {
        $zik.pause();
        $zik.currentTime = 0;
    }

});

// Other methods

var song = document.getElementById("song") ;
var icon = document.getElementById("icon") ;

icon.onclick = function(){
    if(song.pause) {
        song.play();
        icon.scr = "icon/pause.png";
    } else {
        song.pause();
        icon.scr = "icon/play.png" ;
    }
}

//The methods uniq