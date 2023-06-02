<script>
    import Crossword from "svelte-crossword";
    import crosswordData from "./crosswordData.json"
    import { afterUpdate } from 'svelte'

    export let sound;

    let soundSrc;

    afterUpdate(() => {
      soundSrc = `/sounds/${sound}`;
      console.log(soundSrc)
    });

    let playing = false;
    let background;
    function playBackground() {
      console.log("play bg called")
      if (!playing){
          playing = true;
          background = new Audio(soundSrc);
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
</script>

<svelte:window on:click={playBackground} />
<div>
    <Crossword data="{crosswordData}">

        <div class="next-scene" slot="message">
            <img src="/characters/manuel-happy.png" alt="manuel happy" />
            <h2>Mahusay!</h2>
            <p>Magaling, alam mo na ang mga magagandang benepisyo ng mga electric vehicles!</p>
            <a href="/scene-five"><button on:click={playButton()}>Tumuloy sa susunod</button></a>
        </div>
        <div
            class="toolbar"
            slot="toolbar"
            let:onClear
            let:onReveal
            let:onCheck >
            <button on:click="{onClear}">Ibura lahat</button>
            <button on:click="{onReveal}">Suko na</button>
            <button on:click="{onCheck}">Check kung tama</button>
            <a href="/scene-six"> <button> Suko na</button> </a>
        </div>
    
    </Crossword>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

div {
    --xd-font: 'Pangolin';
    max-height: 30vw;
    max-width: 960px;
    margin: 3rem auto;
    margin-bottom: 6rem;
  }
.next-scene{
    text-align: center;
    margin: 0px;
}
img{
    max-height:100px;
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
.toolbar{
    text-align: center;
}
</style>