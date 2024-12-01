document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('spiderman-audio');
    const volumeSlider = document.getElementById('volume-slider');

    // Set audio to loop and start muted
    audio.loop = true;
    audio.muted = true;

    // Function to attempt audio playback
    const playAudio = async () => {
        try {
            await audio.play();
            console.log('Audio is playing.');
        } catch (error) {
            console.warn('Autoplay prevented by browser. User interaction needed.');
        }
    };

    // Attempt playback on user interaction
    document.addEventListener('click', () => {
        if (audio.paused) {
            playAudio();
        }
    });

    // Update volume when the slider is adjusted
    volumeSlider.addEventListener('input', () => {
        const volume = parseFloat(volumeSlider.value);
        if (volume >= 0 && volume <= 1) {
            audio.volume = volume;
            audio.muted = volume === 0; // Mute if volume is 0
            console.log(`Volume set to: ${volume}`);
        }
    });

    // Start playback on page load
    playAudio();
});
