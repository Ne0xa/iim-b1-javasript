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

// burger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const burger= document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

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