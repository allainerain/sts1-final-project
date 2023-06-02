<script>
    import { onMount } from 'svelte';
  
    export let image;
    export let text;
    export let link;
    export let sound;
  
    let soundSrc;
    let imageSrc;
  
    onMount(() => {
      imageSrc = `/backgrounds/${image}`;
      soundSrc = `/sounds/${sound}`;
  
      playSound();
    });
  
    let audio;
    let audioContext;
    let gainNode;
  
    function playSound() {
      audioContext = new AudioContext();
      audio = new Audio(soundSrc);
      const source = audioContext.createMediaElementSource(audio);
      gainNode = audioContext.createGain();
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
  
      // Mute the audio
      audio.muted = true;
  
      // Start audio playback with a delay to allow the audio to load
      setTimeout(startPlayback, 500);
    }
  
    function startPlayback() {
      // Unmute the audio and play
      audio.muted = false;
      audio.play();
    }
  
    function stopSound() {
      if (audioContext) {
        const fadeOutDuration = 2; // Duration in seconds for fade-out
        const fadeOutTime = audioContext.currentTime + fadeOutDuration;
        gainNode.gain.linearRampToValueAtTime(0, fadeOutTime);
        audio.pause();
        setTimeout(() => {
          audio.currentTime = 0;
          gainNode.gain.setValueAtTime(1, audioContext.currentTime);
        }, fadeOutDuration * 1000);
      }
    }

    function playButton() {
        const audio = new Audio('/sounds/click.mp3');
        stopSound();
        audio.play();
    }
</script>

<section class="card">
    <div class="image-wrapper">
        <img src={imageSrc} alt={imageSrc}/>
    </div>
    <div class="button-wrapper">
        <a href={link}>
            <button on:click={playButton}>{text}</button>
        </a>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .card {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: black;
        margin: 0;
        padding: 0;
    }

    .image-wrapper {
        flex-grow: 1;
    }

    .button-wrapper {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 10px;
        margin: 0;
    }

    button {
        font-family: 'Pangolin', cursive;
        font-size: x-large;
        background-color: rgb(239, 239, 239);
        box-shadow: none;
        border: 0px;
        border-radius: 5px;
        padding: 10px 15px;
        margin: 10px 0 200px;
        cursor: pointer;
        width: 200px;
    }

    @media (min-width: 1500px) {
        .card {
            max-width: 82vw;
            margin: 0 8vw;
        }

    }

    @media (min-width: 1700px) {
        .card {
            max-width: 80vw;
            margin: 0 10vw;
        }

    }
</style>
