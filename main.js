canvas= document.getElementById("myCanvas");


ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 2;
ctx.arc(200, 200, 60, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth= 2;
ctx.arc(280, 200, 60, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth= 2;
ctx.arc(350, 200, 60, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth= 2;
ctx.arc(220, 260, 60, 0, 2*Math.PI);
ctx.stroke();

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth= 2;
ctx.arc(320, 260, 60, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X="+mouse_x+",Y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();

}

