function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
    Posenet = ml5.poseNet(video, modelLoaded);
    Posenet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function TakeSnaphot() {
    save("Mustache.png");
}

function modelLoaded() {
    console.log("Posenet is Working :)")
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose_x:" + results[0].pose.nose.x);
        console.log("nose_y:" + results[0].pose.nose.y);
    }
}