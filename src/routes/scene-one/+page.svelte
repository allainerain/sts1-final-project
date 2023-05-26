<script>
    import DialogueBox from '../../components/dialogueBox.svelte'
    import { sceneOneDialogues } from './scene-one-dialogues.js';

    console.log(sceneOneDialogues.body[0])

    let length = sceneOneDialogues.body.length - 1
    let count = 0;
    function handleNext(){
        count += 1;
    }
    function handleBack(){
        count -= 1;
    }

</script>

<h1> Scene One </h1>
<DialogueBox speaker={sceneOneDialogues.body[count].speaker} content = {sceneOneDialogues.body[count].content}/>

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
<a href="/scene-two">
    <button>Next Scene</button>
</a>
{/if}


