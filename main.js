Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("Camera");
Webcam.attach(camera);

function Capture_Image()
{
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='captured_image'src='"+data_uri+"'>"
 });
 console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3g50WrLgY/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
}
function Snapshot()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}
function gotResults(error,result)
{
if (error) {
    console.log(error)
} else {
    console.log(result)
    document.getElementById("result_gesture").innerHTML=result[0].label;
}
if(result[0].label=="Victory")
{
    document.getElementById("update_gesture").innerHTML="&#x270C;";
}
if(result[0].label=="Good")
{
    document.getElementById("update_gesture").innerHTML="&#x1F44C;";
}
if(result[0].label=="Thumbs up")
{
    document.getElementById("update_gesture").innerHTML="&#x1F44D;";
}

}