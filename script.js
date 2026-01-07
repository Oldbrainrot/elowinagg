trigger.addEventListener("click", () => {
  sound.volume = 1;
  sound.play();

  const popupCount = 4;
  for (let i = 0; i < popupCount; i++) {
    window.open(
      "popup.html",
      "_blank",
      `width=400,height=300,left=${50 + i*40},top=${50 + i*40}`
    );
  }

  downloadFile("media/you.zip");
});
