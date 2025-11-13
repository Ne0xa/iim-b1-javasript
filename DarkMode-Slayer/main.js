// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Dark Mode
const toggleBtn = document.getElementById('toggleDark');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Mode Clair';
  } else {
    toggleBtn.textContent = '🌙 Mode Sombre';
  }
});

// This is an exemple of my lesson

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

// let colorButton = document.getElementById("changeColor");
// let block = document.querySelector(".block")

// colorButton.addEventListener('click', function() {
//     block.classList.toggle('dark');
// });