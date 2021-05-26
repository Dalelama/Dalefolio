var slider_img = document.querySelector('.slider-img');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg','9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', ];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "images/Artworks/" + images[i]);

}
