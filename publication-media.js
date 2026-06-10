document.querySelectorAll(".publication-media").forEach((frame) => {
  const image = frame.querySelector("img");
  const video = frame.querySelector("video");

  if (image) {
    const setImageBackdrop = () => {
      frame.style.setProperty("--media-backdrop", `url("${image.currentSrc || image.src}")`);
    };

    image.complete ? setImageBackdrop() : image.addEventListener("load", setImageBackdrop, { once: true });
    return;
  }

  if (video) {
    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = Math.max(1, Math.round(320 * video.videoHeight / video.videoWidth));

      try {
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
        frame.style.setProperty("--media-backdrop", `url("${canvas.toDataURL("image/jpeg", 0.55)}")`);
      } catch {
        // The neutral frame background remains when a video frame cannot be captured.
      }
    }, { once: true });
  }
});
