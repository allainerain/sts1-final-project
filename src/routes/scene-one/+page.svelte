<script>
    import { sceneDialogues } from './scene-dialogues.js';
    import Scene from '../../components/scene.svelte'
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
    import { fade } from 'svelte/transition'
</script>

<section transition:fade="{{ duration: 1000}}">
    <Background background="scene-one-background.png"/>
    <Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene='/scene-two' />
</section>



