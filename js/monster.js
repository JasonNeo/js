var ufo = document.getElementById('ufo');
var btnContainer = document.getElementById('btn-container');
var monster = document.getElementById('monster');

ufo.addEventListener('mousemove', function(e) {
  var eyes = document.querySelector('.eyes');
  var mouseX = (eyes.getBoundingClientRect().left); 
  var mouseY = (eyes.getBoundingClientRect().top);
  var radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  var rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
  eyes.style.transform = `rotate(${rotationDegrees}deg)`
});

btnContainer.addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
        var color = e.target.getAttribute('data-color');
        console.log(color);
        monster.className = '';
        monster.className = ('text-'+color);
    }
});

var speech = [
    "Psssst!", 
    "My name is Bob.",
    "I'm made with love and JavaScript.",
    "My skill is changing colours!"
]

var typed = new Typed('#monster-speech', {
    strings: speech,
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 500,
    backDelay: 1000,
    loop: true
});