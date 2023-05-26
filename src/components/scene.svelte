<script>
    import DialogueBox from './dialogueBox.svelte';
  
    export let nextScene;
    export let sceneDialogues;
    export let tooltips;
  
    let length = sceneDialogues.body.length - 1;
    let count = 0;
  
    function handleNext() {
      count += 1;
      startTypewriterEffect();
    }
  
    function handleBack() {
      count -= 1;
      startTypewriterEffect();
    }
  
    function startTypewriterEffect() {
      const dialogueBox = document.querySelector('.dialogue-box');
      if (dialogueBox) {
        dialogueBox.startTypewriterEffect();
      }
    }
  </script>
  
  <h1>Scene</h1>
  <DialogueBox class="dialogue-box" speaker={sceneDialogues.body[count].speaker} content={sceneDialogues.body[count].content} tooltips={tooltips} />
  
  {#if count > 0}
    <button on:click={handleBack}>
      Back
    </button>
  {/if}
  
  {#if count < length}
    <button on:click={handleNext}>
      Next
    </button>
  {/if}
  
  {#if count === length}
    <a href={nextScene}>
      <button>Next Scene</button>
    </a>
  {/if}
  