


// set the background color of the main div
// and save the color in local storage

function changeBackgroundColor(color) {
    document.getElementById("main").style.backgroundColor = color;
    window.localStorage.setItem("color", color);
};


// get the color from local storage
// set the background color of the main div once the window is loaded

window.onload = function () {
    savedColor = window.localStorage.getItem("color");

    if (savedColor) {
        document.getElementById("main").style.backgroundColor = savedColor;
    }
};