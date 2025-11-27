var btn = document.getElementById('hello_world');
var btn_planet = document.getElementById('hello_image');
var isPlaed = false;

function playAudio(url) {
    if (!isPlaed) {
        var audio = new Audio(url);
        audio.loop = true;
        audio.play();
        isPlaed = true;
    }
}

document.getElementById("hello_image").addEventListener(
    "click", 
    function() {
        document.getElementById("demo").innerHTML = "Happy New Year";
    }
);