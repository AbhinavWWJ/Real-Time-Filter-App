function preload(){
    
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function take_snapshot(){
    save('image.png');
}
function modelLoaded(){
    console.log('Posenet is started');
}
nosex=0;
nosey=0;
function gotPoses(results){
 if (results.length>0){
     console.log(results);
     nosey= results[0].pose.nose.y;
     nosex= results[0].pose.nose.x;
     console.log("nose x="+nosex);
     console.log("nose y="+nosey);
 }
 }
function draw(){
    image(video,0,0,300,300);
    fill("#fcba03")
    stroke("#fcba03");
    circle(nosex,nosey,20);
 }
 
