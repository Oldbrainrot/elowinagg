const trigger = document.getElementById("trigger");
const sound = document.getElementById("bgSound");

trigger.addEventListener("click", () => {
  // start dźwięku w tle
  sound.volume = 1;
  sound.play();

  // otwieramy 1 duży popup z wieloma GIFami
  window.open(
    "popup.html",
    "_blank",
    "width=1000,height=700,left=100,top=100"
  );

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
