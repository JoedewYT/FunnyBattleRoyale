var c = document.getElementById("MainCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
