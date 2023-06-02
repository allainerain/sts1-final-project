<script>
    import { sceneDialogues } from './scene-dialogues.js';
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
    import Scene from '../../components/scene.svelte'
    import { fade } from 'svelte/transition'
</script>

<section transition:fade="{{ duration: 1000}}">
    <Background background="scene-two-background.png"/>
    <Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene="scene-three-cutscene" sound="library.mp3"/>
</section>
