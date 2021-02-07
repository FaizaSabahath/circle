canvas=document.getElementById("draw");
ctx = canvas.getContext("2d");
var color;
var radius;
var width;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
 current_position_of_mouse_x= e.clientX-canvas.offsetLeft;
 current_position_of_mouse_y= e.clientY-canvas.offsetTop;
 if (mouseEvent="mouseDown"){
   console.log("Current position of x and y coordinates = "); 
 console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
    ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
   ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2*Math.PI);
   ctx.stroke();
 }
}
function clearArea(){
   ctx.clearRect(0,0,canvas.width,canvas.height);
}