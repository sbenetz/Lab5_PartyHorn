// main.js

// audio element
var audio = document.getElementById("horn-sound");

//volume input by number 
var volume_num = document.getElementById("volume-number");
volume_num.addEventListener('change',change_volume(volume_num.value));

//volume input by slider
var volume_slide = document.getElementById("volume-slider");
volume_slide.addEventListener('change', change_volume(volume_slide.value));

function change_volume(num){
    if(num > 100){
        audio.volume = 100;
        volume_slide.value = 100;
        volume_num.value = 100;
    }
    else if(num < 0){
        audio.volume = 0;
        volume_slide.value = 0;
        volume_num.value = 0;
    }
    else{
        audio.volume = num;
    }
    volume_slide.value = num;
    volume_num.value = num;
}
//play sound
var honk = document.getElementById("honk-btn");
honk.addEventListener('submit', function(){
    if(audio.volume != 0){
        audio.play();
    }
});