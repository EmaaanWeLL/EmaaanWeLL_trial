const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (musicButton) {
    musicButton.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicButton.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicButton.textContent = "🎵 Play Music";
        }
    });
}

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.opacity=.6;

    heart.style.transition="transform 6s linear, opacity 6s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh)";

        heart.style.opacity=0;

    },100);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,500);

const startButton = document.getElementById("startButton");
const homeScreen = document.getElementById("homeScreen");
const menuScreen = document.getElementById("menuScreen");

function switchScreen(showScreen, hideScreen) {
    if (!showScreen || !hideScreen) return;

    showScreen.style.display = "block";
    showScreen.classList.remove("hidden");
    hideScreen.classList.add("hidden");

    setTimeout(() => {
        hideScreen.style.display = "none";
    }, 400);
}

if (startButton) {
    startButton.addEventListener("click", () => {
        switchScreen(menuScreen, homeScreen);
    });
}

const backButton = document.getElementById("backButton");

if (backButton) {
    backButton.addEventListener("click", () => {
        switchScreen(homeScreen, menuScreen);
    });
}