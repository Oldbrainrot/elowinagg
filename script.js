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
  sound.volume = 0.7;
  sound.play();

  // 🪟 Popupy z gifami
  setInterval(() => {
    const img = document.createElement("img");
    img.src = gifs[Math.floor(Math.random() * gifs.length)];
    img.className = "popup";

    img.style.top = Math.random() * (window.innerHeight - 200) + "px";
    img.style.left = Math.random() * (window.innerWidth - 200) + "px";

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 4000);
  }, 800);

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

