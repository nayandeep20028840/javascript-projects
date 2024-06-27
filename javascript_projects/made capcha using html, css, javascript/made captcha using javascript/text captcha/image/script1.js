var n = Math.floor(Math.random() * 3);
var names = ["Cycles", "Bikes", "Planes"];
document.getElementById('obj').textContent = "" + names[n];
document.getElementById('run').addEventListener('click', function () {
    var list = document.querySelectorAll('#hid');
    list[0].setAttribute('id', 'eee');
    list[1].setAttribute('id', 'eeee');
    var imp = document.getElementById('run');
    imp.setAttribute('id', 'hid');
})
var imgs = document.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', myFun);
}
var arr = [];
function myFun() {
    this.setAttribute('src', 'https://thumbs.dreamstime.com/b/tick-mark-icon-flat-illustration-check-mark-vector-tick-mark-icon-flat-illustration-check-mark-vector-164317151.jpg');
    arr.push(this.className);
}
document.getElementsByClassName('drun')[0].addEventListener('click', function () {
    var flag = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != names[n]) {
            flag = 1;
            document.getElementById('result').textContent = "You Failed the Captcha";
            break;
        }
    }
    if (flag != 1) {
        document.getElementById('result').textContent = "You Cleared the Captcha Successfully";
    }
});