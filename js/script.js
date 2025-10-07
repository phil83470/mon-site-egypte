console.log("Le script fonctionne !");

(function ($) {
  $(function () {
    console.log("script.js chargé et exécuté.");

    // 🎠 Initialisation du carrousel Slick
    $(".carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "linear",
    });

    // 🗂 Gestion des onglets
    const tabsContainers = document.querySelectorAll(".tabs-container");

    tabsContainers.forEach((container) => {
      const tabButtons = container.querySelectorAll(".tab-button");
      const tabPanes = container.querySelectorAll(".tab-pane");

      if (tabButtons.length > 0) {
        tabButtons[0].classList.add("active");
        tabPanes[0].classList.add("active");
      }

      tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabPanes.forEach((pane) => pane.classList.remove("active"));
          button.classList.add("active");
          tabPanes[index].classList.add("active");
        });
      });
    });
  });
})(jQuery);

// 🔊 Synthèse vocale
let allVoices = [];

function loadVoices() {
  allVoices = speechSynthesis.getVoices();

  if (allVoices.length === 0) {
    setTimeout(loadVoices, 100);
  }
}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

function speakText() {
  const synth = speechSynthesis;
  const textElement = document.getElementById("text-to-read");
  const rateSlider = document.getElementById("speech-rate");
  const pitchSlider = document.getElementById("speech-pitch");
  const femaleVoiceRadio = document.getElementById("voice-female");
  const maleVoiceRadio = document.getElementById("voice-male");

  if (!textElement) return;

  const utterance = new SpeechSynthesisUtterance(textElement.textContent);
  utterance.rate = parseFloat(rateSlider?.value || 1);
  utterance.pitch = parseFloat(pitchSlider?.value || 1);

  // 🎙️ Sélection de la voix selon bouton
  let selectedVoice;
  if (femaleVoiceRadio?.checked) {
    selectedVoice = allVoices.find(v =>
      v.name.toLowerCase().includes("female") ||
      v.name.toLowerCase().includes("femme")
    );
  } else if (maleVoiceRadio?.checked) {
    selectedVoice = allVoices.find(v =>
      v.name.toLowerCase().includes("male") ||
      v.name.toLowerCase().includes("homme")
    );
  }

  utterance.voice = selectedVoice || allVoices[0];

  synth.cancel(); // Nettoyer la file d'attente
  synth.speak(utterance);
}




