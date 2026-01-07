const trigger = document.getElementById("trigger");
const sound = document.getElementById("bgSound");

const gifs = [
  "media/gif1.gif",
  "media/gif2.gif"
];

let activated = false;

trigger.addEventListener("click", () => {
  if (activated) return;
  activated = true;

  // 🔊 Start dźwięku
  sound.volume = 9.9;
  sound.play();

 const trigger = document.getElementById("trigger");

trigger.addEventListener("click", () => {
  // ilość popupów
  const count = 10;

  for (let i = 0; i < count; i++) {
    window.open(
      "popup.html",
      "_blank",
      `width=400,height=300,left=${i*50},top=${i*50}`
    );
  }

  // Reszta Twojego kodu zostaje
  // np. GIFy w main page, dźwięk w tle, pobieranie ZIP
});


  // 📥 Pobieranie plików (działa TYLKO po kliknięciu)
  downloadFile("media/you.zip");
});

// Funkcja pobierania
function downloadFile(file) {
  const a = document.createElement("a");
  a.href = file;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

