const trigger = document.getElementById("trigger");
const sound = document.getElementById("bgSound");

// lista GIFów
const gifs = [
  "media/gif1.gif",
  "media/gif2.gif",
];

trigger.addEventListener("click", () => {
  sound.volume = 1;
  sound.play();

  const popupCount = 5; // liczba popupów
  for (let i = 0; i < popupCount; i++) {
    const popup = window.open(
      "popup.html",
      "_blank",
      `width=400,height=300,left=${50 + i*40},top=${50 + i*40}`
    );

    // po załadowaniu popupu, ustaw losowy GIF
    popup.onload = () => {
      const img = popup.document.getElementById("popupGif");
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
      img.src = randomGif;
    };
  }

  downloadFile("media/you.zip");
});

// funkcja pobierania
function downloadFile(file) {
  const a = document.createElement("a");
  a.href = file;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const popupCount = 5;
for (let i = 0; i < popupCount; i++) {
  const popup = window.open(
    "popup.html",
    "_blank",
    `width=800,height=600,left=${50 + i*60},top=${50 + i*60}`
  );

  popup.onload = () => {
    const img = popup.document.getElementById("popupGif");
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    img.src = randomGif;
  };
}
