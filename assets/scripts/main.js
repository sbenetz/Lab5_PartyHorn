// main.js

// audio element
var audio = document.getElementById("horn-sound");

//volume input by number 
var volume_num = document.getElementById("volume-number");
<<<<<<< HEAD
volume_num.addEventListener("change", change_volume(volume_num.value));
=======
volume_num.addEventListener("change", change_volume(volume_num.value));
>>>>>>> fe84cea1608406a74aeb110807123239c3fd6e22

//volume input by slider
var volume_slide = document.getElementById("volume-slider");
volume_slide.addEventListener("change", change_volume(volume_slide.value));

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
<<<<<<< HEAD
honk.addEventListener("click", function(){
=======
honk.addEventListener("click", function(){
>>>>>>> fe84cea1608406a74aeb110807123239c3fd6e22
    if(audio.volume != 0){
        audio.play();
    }
});
