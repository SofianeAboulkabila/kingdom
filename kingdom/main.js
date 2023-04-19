const containers = document.querySelectorAll(".container");
const monSonNaviguer = document.getElementById("son-naviguer");
const monSonClick = document.getElementById("son-click");

function navigateSong() {
  monSonNaviguer.currentTime = 0.15;
  monSonNaviguer.play();
}

function stopperSonNaviguer() {
  monSonNaviguer.currentTime = monSonNaviguer.duration;
  monSonNaviguer.pause();
}

function clickSongStart() {
  monSonClick.currentTime = 0.2;
  monSonClick.play()
}


containers.forEach(function (container) {
  container.addEventListener("mouseover", function () {
    const carrer = container.querySelector(".carrer");
    carrer.style.backgroundColor = "#F89500";

    const text = container.querySelector(".text");
    text.style.textDecoration = "underline";
    text.style.color = "black";
    text.style.marginLeft = "3%";

    navigateSong();
    document.body.style.cursor = "grab";

  });

  container.addEventListener("mouseout", function () {
    const carrer = container.querySelector(".carrer");
    carrer.style.backgroundColor = "";

    const text = container.querySelector(".text");
    text.style.textDecoration = "";
    text.style.color = "";
    text.style.marginLeft = "";

    stopperSonNaviguer();
    document.body.style.cursor = "";
  });

  container.addEventListener("click", function () {
    clickSongStart();
});
});

// Mettre le nom en haut
const currentSong = document.getElementById("song-name");
const songAccueil = document.getElementById("song-1");
currentSong.textContent = songAccueil.getAttribute("data-name");

function playSound() {
  const monSonAccueil = document.getElementById("son-accueil");
  monSonAccueil.play();
}
