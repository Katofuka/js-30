const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



function getVedeo () {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('ERROR: ', err);
        })
       
}

getVedeo();


/*const width = video.videoWidth;
const height = video.height;
canvas.width = width;
canvas.height = height;

//return the timer incase we ever need it
return setInterval(() => {
    ctx.drawImage(video, 0, 0,width,height);

    //get the pixels from the canvas
    let pixels = ctx.getImageData(0, 0, width,height)
    
    //red effects

    //pixels = 
    
    
    
    
    ctx.putImageData(pixels, 0, 0);
}, 16);
//}


*/