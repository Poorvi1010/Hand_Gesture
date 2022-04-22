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
}