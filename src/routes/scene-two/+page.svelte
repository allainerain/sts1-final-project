<script>
    import { sceneTwoDialogues } from './scene-two-dialogues.js';
    import { sceneCharacters } from './scene-characters.js'
    import Background from '../../components/background.svelte'
    import Scene from '../../components/scene.svelte'
</script>

<Background background="scene-one-background.png"/>
<Scene sceneCharacters={sceneCharacters} sceneDialogues={sceneTwoDialogues} nextScene="scene-three"/>

