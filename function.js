
let previous = document.querySelector("#previous");
console.log(previous);
let play = document.querySelector("#player");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#previous");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#duration");
let track_image = document.querySelector("#track_image");

let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer = 0;
let autoplay = 0 ;

let index_no = 0;
let playing_song = false ;

let track = document.createElement('audio') ;

// list all song
let allsong = [
    {
        name: "first song",
        path: "audio/audio.mp3",
        img: "image/bg_headphone.jpg",
        singer: "first single"
    },
    {
        name: "secund song",
        path: "audio/audio_1.mp3",
        img: "image/bg_headphone_1.jpg",
        singer: "secund single"
    },
    {
        name: "third song",
        path: "audio/audio_2.mp3",
        img: "image/bg_headphone_2.jpg",
        singer: "third single"
    },
    {
        name: "third song",
        path: "audio/audio_2.mp3",
        img: "image/bg_headphone_1.jpg",
        singer: "third single"
    }
];

// function that i use 
function load_track(index_no) {
    track.src = allsong[index_no].path
    track.type = "audio/mp3"
    track.innerHTML = allsong[index_no].name
    track_image.src = allsong[index_no].img
    artist.innerHTML = allsong[index_no].singer
    track.load();

    //
}

load_track(index_no);

function justplay() {
    if(playing_song == false) {
        play_song();
    } else {
        pause_song();
    }
}

function pause_song() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play">Play</i>' ;
}

function play_song() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause">Pause</i>' ;
}

function next_song() {
    if (index_no < (allsong.length-1) ) {
        index_no += 1;
        load_track(index_no);
        play_song();
    } else {
        index_no = 0;
        load_track(index_no);
        play_song();
    }
}

function previous_song() {
    if (index_no > 0 ) {
        index_no -= 1;
        load_track(index_no);
        play_song();
    } else {
        index_no = allsong.length;
        load_track(index_no);
        play_song();
    }
}