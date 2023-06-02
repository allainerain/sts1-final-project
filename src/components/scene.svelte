<script>
    import DialogueBox from './dialogueBox.svelte';
    import Characters from './characters.svelte';
    import { afterUpdate } from 'svelte';
  
    export let nextScene;
    export let sceneDialogues;
    export let tooltips;
    export let sceneCharacters;
    export let sound;

    let firstCharacterExp = sceneCharacters.firstCharacter.expressions
    let secondCharacterExp = sceneCharacters.secondCharacter.expressions
    let thirdCharacterExp = sceneCharacters.thirdCharacter.expressions

    console.log(firstCharacterExp)
    
    let length = sceneDialogues.body.length - 1;
    let count = 0;
  
    function handleNext() {
      playSound();
      count += 1;
    }
  
    function handleBack() {
      playSound();
      count -= 1;
    }

    function playSound() {
        const audio = new Audio('/sounds/click.mp3');
        audio.play();
    }

    let volume = 0.2; // Adjust the volume value (0 to 1) as desired
    let soundSrc;

    afterUpdate(() => {
      soundSrc = `/sounds/${sound}`;
      console.log(soundSrc)
    });

    let background;

    let playing = false;
    function playBackground() {
      console.log("play bg called")
      if (!playing){
          playing = true;
          background = new Audio(soundSrc);
          background.volume = volume; // Set the volume here
          setTimeout(startPlayback, 500);
      }
    }
  
    function startPlayback() {
      console.log("start playback called")
      background.play();
    }
  
    function stopSound() {
      background.pause();

    }

    function playButton() {
      const audio = new Audio('/sounds/click.mp3');
      stopSound();
      audio.play();
    }
  
    function beforeUnload() {
      stopSound();
    }

</script>

  <svelte:window on:click={playBackground} on:beforeunload={beforeUnload}/>
  <section class = "card">
    <Characters firstCharacter={firstCharacterExp[count]} secondCharacter={secondCharacterExp[count]} thirdCharacter={thirdCharacterExp[count]}/>
    <DialogueBox class="dialogue-box" speaker={sceneDialogues.body[count].speaker} content={sceneDialogues.body[count].content} character={sceneDialogues.body[count].image} tooltips={tooltips} />
    <div class = "buttons">
      {#if count > 0}
      <button on:click={handleBack}>
        &lt;
      </button>
      {/if}
      {count}
      {#if count < length}
        <button on:click={handleNext}>
          &gt;
        </button>
      {/if}
      
      {#if count === length}
        <a href={nextScene}>
          <button on:click={playButton} class='next-scene'>Susunod</button>
        </a>
      {/if}
    </div>
  </section>
  
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');


    section{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      color: white;
      text-align: center;
      padding: 0;
      margin: 0;
      font-family: 'Pangolin', cursive;
    }

    .buttons{
      text-align: center;
      bottom:0;
      left:0;
      margin:0;
      display: block;
      width:100%;
      background-color: black;
    }

    button{
      background-color: black;
      color:white;
      font-family: 'Pangolin', cursive;
      font-size: larger;
      width: 50px;
      height: 50px;
      border: none;
      text-align: center;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    a > .next-scene{
      position: relative;
      width: 50px;
      text-align: left;
    }

    @media (min-width: 1500px) {
      .card {
        max-width: 82vw;
        margin: 0 8vw 0 8vw;
      }
    }

    @media (min-width: 1700px) {
      .card {
        max-width: 80vw;
        margin: 0 10vw 0 10vw;
      }
    }

  </style>