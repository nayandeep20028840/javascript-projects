function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

let i = 0;

window.onload = function () {
    document.getElementById("output").innerHTML = i;
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    i++;
    document.getElementById("output").innerHTML = i;
    console.log(i);
}

let x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log(navigator.geolocation);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
}

localStorage.setItem("count", i);