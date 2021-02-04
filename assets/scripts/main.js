// main.js

// audio element
var audios = document.getElementById("horn-sound");

//volume input by number 
var volumeNum = document.getElementById("volume-number");
volumeNum.addEventListener("change", function(){changeVolume(volumeNum.value);});

//volume input by slider
var volumeSlide = document.getElementById("volume-slider");
volumeSlide.addEventListener("change", function(){changeVolume(volumeSlide.value);});

//volume image
var volImage = document.getElementById("volume-image");

function changeVolume(num){
    if (num > 100) {
        audios.volume = 1;
        volumeSlide.value = 100;
        volumeNum.value = 100;
    }
    else if (num < 0) {
        audios.volume = 0;
        volumeSlide.value = 0;
        volumeNum.value = 0;
    }
    else {
        audios.volume = num*0.01;
        volumeSlide.value = num;
        volumeNum.value = num;
    }
    if(num > 66){
        volImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    if(num > 33 && num < 67){
        volImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    if(num > 0 && num < 34){
        volImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    if(num <= 0 ){
        volImage.src = "./assets/media/icons/volume-level-0.svg";
    }
}
    
//play sound
var honk = document.getElementById("honk-btn");
honk.addEventListener("click", function(event){
    event.preventDefault();
    if(audios.volume != 0){
        audios.play();
    }  
});

//audio selector
var hornImage = document.getElementById("sound-image");
// airhorn
var ahorn = document.getElementById("radio-air-horn");
ahorn.addEventListener("click", function(){
    audios.src = "./assets/media/audio/air-horn.mp3";
    hornImage.src = "./assets/media/images/air-horn.svg";
});
//car horn
var chorn = document.getElementById("radio-car-horn");
chorn.addEventListener("click", function(){
    audios.src = "./assets/media/audio/car-horn.mp3";
    hornImage.src = "./assets/media/images/car.svg";
});
//party horn
var phorn = document.getElementById("radio-party-horn");
phorn.addEventListener("click", function(){
    audios.src = "./assets/media/audio/party-horn.mp3";
    hornImage.src = "./assets/media/images/party-horn.svg";
});
