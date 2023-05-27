<script>
    import { sceneDialogues } from './scene-dialogues.js';
    import Scene from '../../components/scene.svelte'
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
</script>

<Background background="scene-one-background.png"/>
<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene='/scene-two' />


