const trigger = document.getElementById("trigger");
const sound = document.getElementById("bgSound");

trigger.addEventListener("click", () => {
  // start dźwięku w tle
  sound.volume = 1;
  sound.play();

  // otwieramy 3 popupy
  const popupCount = 3;
  for (let i = 0; i < popupCount; i++) {
    window.open(
      "popup.html",
      "_blank",
      `width=400,height=300,left=${50 + i*40},top=${50 + i*40}`
    );
  }

  // pobieranie ZIP
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
