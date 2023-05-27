<script>
    import { sceneOneDialogues } from './scene-one-dialogues.js';
    import Scene from '../../components/scene.svelte'
    import { sceneCharacters } from './scene-characters.js'
</script>

<Scene sceneCharacters = {sceneCharacters} sceneDialogues={sceneOneDialogues} nextScene='/scene-two' />

