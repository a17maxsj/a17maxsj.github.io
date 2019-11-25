var drum = new Audio('sounds/ricercivic.mp3');
var d24 = new Audio('sounds/d24.mp3');
var civic = new Audio('sounds/vtec.mp3');
var v8 = new Audio('sounds/v8.mp3');


function playDrum(){
    drum.play();
}
function playD24(){
    d24.play();
}

function playCivic(){
    civic.play();
}

function playV8(){
    v8.play();
}


document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "f") {
        drum.play();
    }
    else if (event.key === "g") {
        d24.play();
    }
    else if (event.key === "h") {
        civic.play();
    }
    else if (event.key === "j") {
        v8.play();
    }
});