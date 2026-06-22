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

const titleText = "For The Person I Love Most ❤️";

const subtitleText =
  "Terima kasih sudah hadir dan menjadi bagian paling indah dalam hidupku";

let titleIndex = 0;

let subtitleIndex = 0;

function typeTitle() {
  if (titleIndex < titleText.length) {
    document.getElementById("title").innerHTML += titleText.charAt(titleIndex);

    titleIndex++;

    setTimeout(typeTitle, 70);
  } else {
    typeSubtitle();
  }
}

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    document.getElementById("subtitle").innerHTML +=
      subtitleText.charAt(subtitleIndex);

    subtitleIndex++;

    setTimeout(typeSubtitle, 45);
  }
}

setTimeout(typeTitle, 1200);

const letterContainer = document.getElementById("letterContainer");

const letter = document.getElementById("letter");

const paper = document.getElementById("paper");

const overlay = document.getElementById("overlay");

const continueBtn = document.getElementById("continueBtn");

setTimeout(() => {
  letterContainer.classList.add("show");
}, 10000);

// buka surat

letter.onclick = () => {
  letter.classList.add("big");

  setTimeout(() => {
    letter.classList.add("open");
  }, 600);

  setTimeout(() => {
    letterContainer.style.bottom = "-150px";

    paper.classList.add("show");

    overlay.classList.add("show");

    // tombol lanjut muncul setelah 5 detik

    setTimeout(() => {
      continueBtn.style.display = "block";
    }, 5000);
  }, 1400);
};

overlay.onclick = () => {
  paper.classList.remove("show");

  overlay.classList.remove("show");

  continueBtn.style.display = "none";

  setTimeout(() => {
    letterContainer.style.bottom = "25px";

    letter.classList.remove("open");
  }, 700);

  setTimeout(() => {
    letter.classList.remove("big");
  }, 1400);
};

continueBtn.onclick = () => {
  window.location.href = "quiz.html";
};
