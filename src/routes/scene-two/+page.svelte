<script>
    import { sceneDialogues } from './scene-dialogues.js';
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
    import Scene from '../../components/scene.svelte'
</script>

<Background background="scene-two-background.png"/>
<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneDialogues} nextScene="scene-three"/>

