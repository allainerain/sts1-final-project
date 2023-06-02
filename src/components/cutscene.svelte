<script>
  import { onMount } from 'svelte';

  export let image;
  export let text;
  export let link;
  export let sound;
  export let message;

  let soundSrc;
  let imageSrc;
  let audio;
  let volume = 0.2; // Adjust the volume value (0 to 1) as desired


  onMount(() => {
    imageSrc = `/backgrounds/${image}`;
    soundSrc = `/sounds/${sound}`;
  });

  let playing = false;
  function playSound() {
    if (!playing){
        playing = true;
        audio = new Audio(soundSrc);
        audio.volume = volume
        setTimeout(startPlayback, 500);
    }
  }

  function startPlayback() {
    audio.play();
  }

  function stopSound() {
    if (audio) {
      audio.pause();
    }
  }

  function playButton() {
    const clickSound = new Audio('/sounds/click.mp3');
    stopSound();
    clickSound.play();
  }
</script>

<svelte:window on:click={playSound}/>
<section class="card">
    <div class="image-wrapper">
        <img src={imageSrc} alt={imageSrc}/>
    </div>
    <div>
        <h3>{message}</h3>
    </div>
    <div class="button-wrapper">
        
        <a href={link}>
            <button on:click={playButton}>{text}</button>
        </a>
    </div>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');
    div{
        font-family: 'Pangolin', cursive;
        justify-content: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:0;
    }

    h3{
        margin:0;
        padding:0;
    }

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
        color:white;
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
        padding: 5px;
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
