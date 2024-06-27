var btn = document.createElement('button');
btn.id = 'myBtn';
btn.innerHTML = 'Pause';
document.body.appendChild(btn);

var video = document.getElementById('myVideo');
var isPlaying = true;

btn.addEventListener('click', function () {
    if (isPlaying) {
        video.src = video.src.replace('autoplay=1', 'autoplay=0');
        btn.innerHTML = 'Play';
    } else {
        video.src = video.src.replace('autoplay=0', 'autoplay=1');
        btn.innerHTML = 'Pause';
    }
    isPlaying = !isPlaying;
});