Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id="snap"src= "' + data_uri + '"/>'
    })
}

console.log("ml5 version:",ml5.version);
Classifier = ml5.imageClassifier("MobileNet",model_loaded);

function model_loaded(){
    console.log('MODEL LOADED!')
}

function check(){
    image= document.getElementById("snap");
    Classifier.classify(image,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("spanBulb").innerHTML= results[0].label
    }
}
