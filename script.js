const meme = document.getElementById("meme");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

async function generateMeme() {

  meme.style.opacity = "0.5";

  const response = await fetch("https://meme-api.com/gimme");

  const data = await response.json();

  meme.src = data.url;

  downloadBtn.href = data.url;

  meme.onload = () => {
    meme.style.opacity = "1";
  };

}

generateBtn.addEventListener("click", generateMeme);

generateMeme();s