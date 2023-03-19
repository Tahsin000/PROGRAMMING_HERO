const images = [
    'img/pic-02.png',
    'img/pic-03.png',
    'img/pic-01.png',
]

let imgIndex = 0;
setInterval(()=>{
    (imgIndex > images.length-1) ? imgIndex = 0 : imgIndex;
    // console.log(images[imgIndex]);
    document.getElementById("img").src = images[imgIndex];
    imgIndex++;
}, 2000);