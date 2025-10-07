const playButton = document.getElementById('play-text');
const pauseButton = document.getElementById('pause-text');
const stopButton = document.getElementById('stop-text');
const textToReadDiv = document.getElementById('text-to-read');
console.log('textToReadDiv au chargement : ', textToReadDiv);
const speechRateInput = document.getElementById('speech-rate');
const voiceFemaleRadio = document.getElementById('voice-female');
const voiceMaleRadio = document.getElementById('voice-male');
const speechPitchInput = document.getElementById('speech-pitch');
const backgroundMusic = document.getElementById('background-music');

let utterance = null;
let selectedVoice = null;
let currentRate = parseFloat(speechRateInput.value);
let currentPitch = parseFloat(speechPitchInput.value);
let musicPlayed = false; // Variable pour suivre si la musique a été jouée

const MUSIC_VOLUME_NORMAL = 0.5; // Volume normal de la musique (entre 0 et 1)
const MUSIC_VOLUME_SPEECH = 0.1; // Volume de la musique pendant la lecture vocale

// Fonction pour trouver une voix par son nom ou des mots-clés
function findVoice(voices, lang, keywords, excludeDefault = false) {
    for (const voice of voices) {
        const nameLower = voice.name.toLowerCase();
        const langMatch = voice.lang === lang;
        const keywordMatch = keywords.some(keyword => nameLower.includes(keyword));
        const defaultExclude = excludeDefault ? !voice.default : true;

        if (langMatch && keywordMatch && defaultExclude) {
            return voice;
        }
    }
    return null;
}

// Fonction pour définir la voix préférée en fonction du genre
function setSpeechVoice() {
    const voices = speechSynthesis.getVoices();
    const preferredGender = voiceFemaleRadio.checked ? 'female' : 'male';

    let voiceKeywords = [];
    if (preferredGender === 'female') {
        voiceKeywords = ['female', 'femme', 'zira', 'helene', 'anna', 'ilona', 'amelie', 'charlotte', 'audrey', 'google français'];
    } else {
        voiceKeywords = ['male', 'homme', 'david', 'paul', 'pierre', 'thomas', 'arnaud', 'google français'];
    }

    selectedVoice = findVoice(voices, 'fr-FR', voiceKeywords, true);

    if (!selectedVoice) {
        selectedVoice = findVoice(voices, 'fr-FR', voiceKeywords, false);
    }

    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang === 'fr-FR' && !voice.default);
    }

    if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang === 'fr-FR');
    }

    if (selectedVoice) {
        console.log('Voix sélectionnée : ', selectedVoice.name);
    } else {
        console.warn('Aucune voix française trouvée, utilisation de la voix par défaut du navigateur.');
    }
}

speechSynthesis.onvoiceschanged = setSpeechVoice;
setSpeechVoice();

voiceFemaleRadio.addEventListener('change', setSpeechVoice);
voiceMaleRadio.addEventListener('change', setSpeechVoice);

speechRateInput.addEventListener('input', () => {
    currentRate = parseFloat(speechRateInput.value);
    if (utterance && speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.cancel();
        speakText(utterance.text);
    }
});

speechPitchInput.addEventListener('input', () => {
    currentPitch = parseFloat(speechPitchInput.value);
    if (utterance && speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.cancel();
        speakText(utterance.text);
    }
});

function speakText(text) {
    console.log('Entrée dans la fonction speakText.');
    if ('speechSynthesis' in window) {
        if (utterance && speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = currentRate;
        utterance.pitch = currentPitch;

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.onstart = () => {
            if (backgroundMusic) {
                backgroundMusic.volume = MUSIC_VOLUME_SPEECH;
            }
            if (textToReadDiv) {
                textToReadDiv.classList.add('glow-reading');
                console.log('Classe glow-reading ajoutée à textToReadDiv.');
            } else {
                console.log('textToReadDiv non trouvé lors de l\'ajout de la classe.');
            }
        };

        utterance.onend = () => {
            console.log('Lecture terminée');
            if (backgroundMusic) {
                backgroundMusic.volume = MUSIC_VOLUME_NORMAL;
            }
            if (textToReadDiv) {
                textToReadDiv.classList.remove('glow-reading');
                console.log('Classe glow-reading retirée (onend).');
            } else {
                console.log('textToReadDiv non trouvé lors du retrait de la classe (onend).');
            }
        };
        utterance.onerror = (event) => {
            console.error('Erreur de synthèse vocale : ', event);
            if (backgroundMusic) {
                backgroundMusic.volume = MUSIC_VOLUME_NORMAL;
            }
            if (textToReadDiv) {
                textToReadDiv.classList.remove('glow-reading');
                console.log('Classe glow-reading retirée (onerror).');
            } else {
                console.log('textToReadDiv non trouvé lors du retrait de la classe (onerror).');
            }
        };

        console.log('Appel de speechSynthesis.speak()');
        speechSynthesis.speak(utterance);
    } else {
        alert('Désolé, votre navigateur ne supporte pas la synthèse vocale.');
    }
}

playButton.addEventListener('click', () => {
    if (!textToReadDiv) {
        console.error('Element with id "text-to-read" not found.');
        return;
    }
    const content = textToReadDiv.cloneNode(true);
    content.querySelectorAll('figcaption, #toc, .sources-section, .no-speech').forEach(el => el.remove());
    let textToSpeak = content.innerText.trim();

    if (textToSpeak) {
        speakText(textToSpeak);
    } else {
        console.warn("Aucun texte à lire après le filtrage. Lecture annulée.");
    }
});

pauseButton.addEventListener('click', () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
    }
    if (textToReadDiv) {
        textToReadDiv.classList.remove('glow-reading');
        console.log('Classe glow-reading retirée (pause).');
    } else {
        console.log('textToReadDiv non trouvé lors du retrait de la classe (pause).');
    }
});

stopButton.addEventListener('click', () => {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    if (textToReadDiv) {
        textToReadDiv.classList.remove('glow-reading');
        console.log('Classe glow-reading retirée (stop).');
    } else {
        console.log('textToReadDiv non trouvé lors du retrait de la classe (stop).');
    }
});

