const buttons = document.querySelectorAll("button");
const audioUrls = {
    a: "https://www.fesliyanstudios.com/play-mp3/387",
    b: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    c: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    d: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
};

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const audioUrl = audioUrls[button.classList[0]];

        if (currentAudio) {
            currentAudio.pause();
        }

        currentAudio = new Audio(audioUrl);
        currentAudio.play();
    });
});