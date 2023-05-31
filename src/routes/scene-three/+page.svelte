<script>
    import Scene from '../../components/scene.svelte';
    import { sceneDialogues } from './scene-dialogues.js';
    import { tooltips } from './scene-tooltips.js';
    import { sceneCharacters } from './scene-characters.js';
    import Background from '../../components/background.svelte';
    import { fade } from 'svelte/transition';
  
    let intro = true;
  
    function handleNext() {
      intro = false;
    }
  </script>
  
  {#if intro}
    <div class="intro">
      <img src="/backgrounds/scene-three-intro.png" alt="news jeepney modernization" />
      <button on:click={handleNext}>Susunod</button>
    </div>
  {/if}
  
  {#if !intro}
    <section transition:fade="{{ duration: 1000 }}">
      <Background background="scene-three-background.png" />
      <Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene="scene-four" {tooltips} />
    </section>
  {/if}
  
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

    .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80vh;
    }
  
    img {
      width: 100%;
      height: auto;
      max-width: 90%;
      max-height: 90%;
      margin-top: 2vh;
    }
  
    button {
      /* margin-top: 2vh; */
    }
  
    @media (min-width: 480px) {
      img {
        max-width: 85%;
      }
    }
  
    @media (min-width: 768px) {
      img {
        max-width: 80%;
      }
    }
  
    @media (min-width: 992px) {
      img {
        max-width: 75%;
      }
    }
  
    @media (min-width: 1200px) {
      img {
        max-width: 70%;
      }
    }
  
    @media (min-width: 1440px) {
      img {
        max-width: 65%;
      }
    }
  
    @media (min-width: 1600px) {
      img {
        max-width: 60%;
      }
    }

    button {
        font-family: 'Pangolin', cursive;
        font-size: large;
        background-color: rgb(239,239,239);
        box-shadow: none;
        border: 0px;
        border-radius: 5px;
        padding: 10px 15px 10px 15px;
        margin: 10px;
        cursor: pointer;
    }
  </style>
  