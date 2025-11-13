// let title = document.getElementById("title");
// let imageTitle = document.getElementById("imageTitle");
// let buttonImage = document.getElementById("buttonImage");


// function changeImage() {
//     imageTitle.src = "imageFox.jpg";
// }

// function changeText() {
//     title.innerHTML = "Nouveau texte";
// }

// buttonImage.addEventListener('click', function() {
//     changeImage();
// });

let colorButton = document.getElementById("changeColor");
let block = document.querySelector(".block")

colorButton.addEventListener('click', function() {
    block.classList.toggle('dark');
});