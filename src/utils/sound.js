export function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      console.error("Web Audio API is not supported in this browser.");
      return;
    }
    const audioCtx = new AudioContext();

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    

    oscillator.type = 'sine'; 
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    

    const duration = 1.2;
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (error) {
    console.error("Failed to play chime due to internal insects(bug) ", error);
  }
}
