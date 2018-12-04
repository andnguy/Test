var c = document.getElementById("myCanvas"); // References to myCanvas
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",200,75);
ctx.beginPath();
ctx.arc(275,200,100,0,2 * Math.PI);
ctx.stroke();
ctx.rect(10,20,150,100);
ctx.fillStyle = 'blue';
ctx.fill();
