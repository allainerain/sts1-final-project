<script>
    import DialogueBox from './dialogueBox.svelte'
  
    export let sceneDialogues;
    export let nextScene;
    export let tooltips = [];
  
    let length = sceneDialogues.body.length - 1
    let count = 0;
  
    function handleNext() {
      count += 1;
    }
  
    function handleBack() {
      count -= 1;
    }
  </script>
  
  <h1> Scene </h1>
  <DialogueBox
    speaker={sceneDialogues.body[count].speaker}
    content={sceneDialogues.body[count].content}
    {tooltips}
  />
  
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
  
  {#if count == length}
    <a href={nextScene}>
      <button>Next Scene</button>
    </a>
  {/if}
  