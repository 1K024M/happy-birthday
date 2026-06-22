const hearts = document.querySelector(".hearts");

for (let i = 0; i < 35; i++) {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = 12 + Math.random() * 20 + "px";

  heart.style.animationDuration = 5 + Math.random() * 8 + "s";

  heart.style.animationDelay = Math.random() * 5 + "s";

  hearts.appendChild(heart);
}

// AMBIL ELEMENT

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const quizQuestion = document.getElementById("quizQuestion");

const quizText = document.getElementById("quizText");

let noCount = 0;

// TOMBOL NO

noBtn.onclick = () => {
  noCount++;

  let noScale = 1 - noCount * 0.2;

  let yesScale = 1 + noCount * 0.35;

  noBtn.style.transform = `scale(${noScale})`;

  yesBtn.style.transform = `scale(${yesScale})`;

  if (noCount >= 4) {
    noBtn.style.display = "none";

    yesBtn.style.transform = "scale(2)";
  }
};

// TOMBOL YES

yesBtn.onclick = () => {
  quizQuestion.innerHTML = "Thank you for being my girlfriend 🥰";

  quizText.innerHTML =
    "Aku bakal terus berusaha menjadi seseorang yang lebih baik dan selalu menghargai kamu ❤️";

  document.querySelector(".quiz-buttons").style.display = "none";
};
