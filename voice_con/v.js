let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  // Filter and prioritize Bangla voices
  let banglaVoiceFound = false;
  voices.forEach((voice, i) => {
    let option = new Option(voice.name + ` (${voice.lang})`, i);
    voiceSelect.options.add(option);

    // If a Bangla voice is found, set it as the default
    if (voice.lang.includes("bn") && !banglaVoiceFound) {
      speech.voice = voice;
      voiceSelect.selectedIndex = i;
      banglaVoiceFound = true;
    }
  });

  // If no Bangla voice is found, default to the first voice
  if (!banglaVoiceFound) {
    speech.voice = voices[0];
  }
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
