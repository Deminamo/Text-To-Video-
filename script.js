const generateBtn = document.getElementById("generateBtn");
const textInput = document.getElementById("textInput");
const loading = document.getElementById("loading");
const videoContainer = document.getElementById("videoContainer");
const outputVideo = document.getElementById("outputVideo");

generateBtn.addEventListener("click", async () => {
  const userText = textInput.value.trim();
  if (!userText) {
    alert("Please enter some text.");
    return;
  }

  loading.style.display = "block";
  videoContainer.style.display = "none";

  try {
    const response = await fetch("https://your-api.com/generate-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: userText })
    });

    if (!response.ok) {
      throw new Error("Video generation failed");
    }

    const data = await response.json();
    const videoUrl = data.videoUrl;

    loading.style.display = "none";
    videoContainer.style.display = "block";

    outputVideo.src = videoUrl;
    outputVideo.load();
    outputVideo.play();
  } catch (error) {
    loading.style.display = "none";
    alert("Error generating video: " + error.message);
  }
});
