Webcam.set({
    height:350,
    width:50,
    image_format:"png",
    png_quality:90
})
camera1 = document.getElementById("camera1")
Webcam.attach("#camera1")
function taken(){
    Webcam.snap(function(data_uri){
    document.getElementById("camera2").innerHTML = "<img src = "+data_uri+" id='img1' >"
    })
    }