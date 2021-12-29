function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
create=createCapture(VIDEO); 
create.hide();  
color=""; 
}
function fighter(){
    color=document.getElementById("inpot").value;
}

function draw(){
    image(create,0,0,640,480);
tint(color);
}
function take_snapshot(){
    save('x.png');
}