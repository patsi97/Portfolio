let x = 0;
let textEffect = "Hi, I'm Patricia.\n I'm a Web developer.";
let container = document.getElementById("headertext");

function animate() {
  if (x < textEffect.length) {
    container.innerHTML += textEffect.charAt(x);
    x++;
    setTimeout(animate, 100);
  }
}

animate();
