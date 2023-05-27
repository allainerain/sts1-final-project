<script>
    import DialogueBox from './dialogueBox.svelte';
    import Characters from './characters.svelte'
  
    export let nextScene;
    export let sceneDialogues;
    export let tooltips;
    export let sceneCharacters;

    let firstCharacterExp = sceneCharacters.firstCharacter.expressions
    let secondCharacterExp = sceneCharacters.secondCharacter.expressions
    let thirdCharacterExp = sceneCharacters.thirdCharacter.expressions

    console.log(firstCharacterExp)

    let length = sceneDialogues.body.length - 1;
    let count = 0;
  
    function handleNext() {
      count += 1;
    }
  
    function handleBack() {
      count -= 1;
    }
  
  </script>
  
  <section class = "card">
    <Characters firstCharacter={firstCharacterExp[count]} secondCharacter={secondCharacterExp[count]} thirdCharacter={thirdCharacterExp[count]}/>
    <DialogueBox class="dialogue-box" speaker={sceneDialogues.body[count].speaker} content={sceneDialogues.body[count].content} character={sceneDialogues.body[count].image} tooltips={tooltips} />
    <div class = "buttons">
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
    </div>
 
  
  </section>
  
  <style>

    section{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      color: white;
      text-align: center;
      padding: 0;
      margin: 0;
      /* height: 60%; */
    }

    .buttons{
      text-align: center;
      bottom:0;
      left:0;
      margin:0;
      padding:20px;
      display: block;
      width:100%;
      background-color: black;
    }

  </style>