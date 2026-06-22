emailjs.init("_wf9MMOHqD3Zdkk3s");

// HATI TERBANG

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

const backBtn = document.getElementById("backBtn");

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
  emailjs
    .send(
      "service_l7109kl",

      "template_pk11hhx",

      {
        message: "YES ❤️ ditekan di website ultah",
      },
    )

    .then(() => {
      console.log("Email berhasil terkirim");
    })

    .catch((error) => {
      console.log("Email gagal:", error);
    });

  quizQuestion.innerHTML = "Thank You For Being My Girlfriend ❤️";

  quizText.innerHTML =
    "Aku bakal terus berusaha menjadi seseorang yang lebih baik dan selalu menghargai kamu ❤️";

  document.querySelector(".quiz-buttons").style.display = "none";

  backBtn.style.display = "inline-block";
};

// TOMBOL KEMBALI

backBtn.onclick = () => {
  window.location.href = "index.html";
};
