//const colors = ["#ab0603", "#a46387", "#1fd09c", "#435496","#b03cbb", "#74f137", "#320b22", "#6c02bb", "#c0d5e2", "#5b0823", "#898989", "#9c5100", "#102ef8"];

const button =  document.getElementById('changeColorB');
const body = document.body;

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
//  const randomColor = colors[Math.floor(Math.random()*colors.length)];
  document.body.style.background = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ") "
}